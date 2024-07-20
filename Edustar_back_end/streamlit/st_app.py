from openai import OpenAI
import streamlit as st

import streamlit as st
from PIL import Image
import os
from openai import OpenAI

client = OpenAI()


bot_image = Image.open(
    "img/sparkling.png"
)
bot_image1 = Image.open(
    "img/sparkling.png"
)
user_image = Image.open(
    "img/woman.png"
)
# st.image(image, caption='Sunrise by the mountains')

col1, col2, col3, col4, col5, col6, col7 = st.columns(
    [7, 6, 5, 4, 3, 2, 1]
)  # Adjust column width ratios as needed

with col1:
    st.title("Edustar")

with col2:
    st.image(bot_image, width=80)


client = OpenAI(
    api_key=st.secrets["OPENAI_API_KEY"],
)

if "openai_model" not in st.session_state:
    st.session_state["openai_model"] = "gpt-4o-mini"

if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "system",
            "content": "You are `Edustar`, a helpful assistant that helps users find their desired course. You need to ask questions about their education level, field of interest, and online or in-class preference, and then based on the information, you have to output 5 related courses to the user. If at any point the user asks for showing the courses or results, you should just show them. YOU MUST ask questions one by one and do not forget to introduce yourself at the start of the conversation.",
        },
    ]


for message in st.session_state.messages:
    if message["role"] != "system":
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

if prompt := st.chat_input("What is up?"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user", avatar=user_image):
        st.markdown(prompt)

    with st.chat_message("assistant", avatar=bot_image):
        stream = client.chat.completions.create(
            model=st.session_state["openai_model"],
            messages=[
                {"role": m["role"], "content": m["content"]}
                for m in st.session_state.messages
            ],
            stream=True,
        )
        response = st.write_stream(stream)
    st.session_state.messages.append({"role": "assistant", "content": response})
    print(response)
    audio = client.audio.speech.create(model="tts-1", voice="alloy", input=response)

    audio.stream_to_file("output.mp3")
    os.system("afplay output.mp3")
