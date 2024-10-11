from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def hello():
    return "Hello World!"

@app.get("/fast")
def fast():
    return "Fast"

if __name__ == "__main__":
    uvicorn.run("Fast:app", reload=True)