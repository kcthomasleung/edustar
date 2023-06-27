Python AI Automated Grading & Feedback API


#Usage

First:

```sh
pip install -r requirements.txt
```
Then:

```py
uvicorn main:app --reload
```

For Review Sentiment analysis:

```sh
http://127.0.0.1:8000/review/review_text
```

To Search Courses:

```sh
http://127.0.0.1:8000/search/search_text
```
For Similarity Check:

```sh
http://127.0.0.1:8000/similarity/{id}/model_answer
```
