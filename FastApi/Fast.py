from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import uvicorn
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import  Column, Integer, String
from pydantic import BaseModel
from typing import Union
 
class Base(DeclarativeBase): pass

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "postgresql+psycopg2://postgres:root@localhost:5432/postgres"

engine = create_engine(DATABASE_URL)

class Note(Base):
    __tablename__ = "Notes"
    id = Column(Integer,autoincrement=True, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)

class NoteModel(BaseModel):
    id: Union[int, None] = None
    title: str
    content: str


Base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine, autoflush=False)
# with Session(autoflush=False, bind=engine) as db:
    # notes = db.query(Note).all()
sess = Session()

@app.get("/api/get")
def getAll():
    with Session(autoflush=False, bind=engine) as db:
        result = sess.query(Note).all()
    return sorted(result, key=lambda x: x.id)
    # return result

@app.post("/api/post")
def add(note : NoteModel):
    with Session(autoflush=False, bind=engine) as db:
        db.add(Note(title=note.title, content=note.content))
        db.commit()

@app.put("/api/put/{id}")
def patch(id : int, note : NoteModel):
    with Session(autoflush=False, bind=engine) as db:
        currentNote = db.query(Note).filter(Note.id == id).first()
        if (currentNote):
            currentNote.title = note.title
            currentNote.content = note.content
        db.commit()

@app.delete("/api/delete/{id}")
def delete(id : int):
    with Session(autoflush=False, bind=engine) as db:
        currentNote = db.query(Note).filter(Note.id == id).first()
        if (currentNote):
            db.delete(currentNote)
        db.commit()

@app.get("/api/get/{id}")
def get(id : int):
    with Session(autoflush=False, bind=engine) as db:
        result = db.query(Note).filter(Note.id == id).first()
    return result



if __name__ == "__main__":
    uvicorn.run("Fast:app", reload=True)