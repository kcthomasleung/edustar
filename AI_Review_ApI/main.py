from typing import Union
from fastapi import FastAPI
from transformers import pipeline
sentiment_pipeline = pipeline("sentiment-analysis")


def review(text):
    return sentiment_pipeline(text)



app = FastAPI()


@app.get("/")
def read_root():
    return 'Review Api'


@app.get("/review/{text}")
def read_item(text: Union[str, None] = None):
    print(text)
    return review(text)
