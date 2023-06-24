from typing import Union
from fastapi import FastAPI
from sentence_transformers import SentenceTransformer, util
import torch
import pandas as pd


embedder = SentenceTransformer('all-MiniLM-L6-v2')
from transformers import pipeline
sentiment_pipeline = pipeline("sentiment-analysis")

df = pd.read_csv("coursea_data.csv")
qa = pd.read_csv("qa.csv", header=None)

corpus = df.iloc[:,1].to_list()
corpus_embeddings = embedder.encode(corpus, convert_to_tensor=True)



model = SentenceTransformer('multi-qa-MiniLM-L6-cos-v1')


def review(text):
    return sentiment_pipeline(text)


def search(text):
    top_k = min(5, len(corpus))
    for query in [text]:
        query_embedding = embedder.encode(query, convert_to_tensor=True)

        # We use cosine-similarity and torch.topk to find the highest 5 scores
        cos_scores = util.cos_sim(query_embedding, corpus_embeddings)[0]
        top_results = torch.topk(cos_scores, k=top_k)
        idxs = []

        for score, idx in zip(top_results[0], top_results[1]):
            idxs.append(int(idx))


    return df.iloc[idxs,:].to_json( orient='records', lines=True)
    


def similarity_check(k,text):

    sentences1 = text
    sentences2 = [qa.iloc[k,0]]
    embeddings1 = model.encode(sentences1, convert_to_tensor=True)
    embeddings2 = model.encode(sentences2, convert_to_tensor=True)
    cosine_scores = util.cos_sim(embeddings1, embeddings2)
    return float(cosine_scores[0][0])



app = FastAPI()


@app.get("/")
def read_root():
    return 'Review Api'


@app.get("/review/{text}")
def read_item(text: Union[str, None] = None):
    return review(text)



@app.get("/search/{text}")
def read_item(text: Union[str, None] = None):
    return search(text)


@app.get("/similarity/{id}/{text}")
def read_item(id:int ,text: Union[str, None] = None):
    return similarity_check(id, text)
