// components/ChatButton.js

import { useState } from "react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <button onClick={toggleChat} style={buttonStyle}>
        Chat
      </button>
      {isOpen && (
        <div style={chatPopupStyle}>
          <div style={chatHeaderStyle}>Chatbot</div>
          <div style={chatBodyStyle}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.sender === "user" ? userMsgStyle : botMsgStyle}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={chatFooterStyle}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Type your message"
            />
            <button onClick={handleSendMessage} style={sendButtonStyle}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const chatPopupStyle = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "300px",
  height: "400px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
};

const chatHeaderStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

const chatBodyStyle = {
  flex: 1,
  padding: "10px",
  overflowY: "auto",
};

const chatFooterStyle = {
  display: "flex",
  borderTop: "1px solid #ddd",
  padding: "10px",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  marginRight: "10px",
};

const sendButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
};

const userMsgStyle = {
  alignSelf: "flex-end",
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px",
  borderRadius: "10px",
  margin: "5px 0",
};

const botMsgStyle = {
  alignSelf: "flex-start",
  backgroundColor: "#f1f1f1",
  color: "#000",
  padding: "10px",
  borderRadius: "10px",
  margin: "5px 0",
};

export default ChatButton;
