

#Usage

First:

```sh
pip install -r requirements.txt
```

---
To start GPT AI assistant
```sh
cd Edustar_back_end/streamlit
streamlit run st_app.py
```

---
To start search Algorithm API
```sh
cd Edustar_back_end/AI_Review_ApI
```
```py
uvicorn main:app --reload
```

---
To start front end:

```sh
cd Edustar_front_end
npx next dev
```
---

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
