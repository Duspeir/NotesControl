from fastapi import FastAPI
import uvicorn
app = FastAPI()

@app.get("/")
def hello():
    return "Hello World!"

@app.get("/fast")
def fast():
    return "Fast"



if __name__ == "__main__":
    uvicorn.run("Fast:app", reload=True)