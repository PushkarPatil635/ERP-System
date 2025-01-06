# from fastapi import FastAPI, Depends, HTTPException
# from sqlalchemy.orm import Session
# from fastapi.middleware.cors import CORSMiddleware
# from database import engine, get_db
# from models import Base
# import crud
# from pydantic import BaseModel
# from datetime import date

# app = FastAPI()

# # Allow CORS for your frontend
# origins = ["http://localhost:3000"]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Create all tables in the database
# Base.metadata.create_all(bind=engine)

# # Pydantic model to define structure for incoming student data
# class StudentCreate(BaseModel):
#     name: str
#     email: str
#     birthday: date
#     branch: str

# @app.post("/students/")
# def create_student(student: StudentCreate, db: Session = Depends(get_db)):
#     # Create a general student record
#     created_student = crud.create_student(db, student.name, student.email, student.birthday, student.branch)
    
#     # Add to the respective branch table based on the branch field
#     if student.branch == "Computer Science":
#         crud.create_computer_science_student(db, student.name, student.email, student.birthday)
#     elif student.branch == "Information Technology":
#         crud.create_information_technology_student(db, student.name, student.email, student.birthday)
#     elif student.branch == "Civil":
#         crud.create_civil_student(db, student.name, student.email, student.birthday)
#     elif student.branch == "Mechanical":
#         crud.create_mechanical_student(db, student.name, student.email, student.birthday)
#     elif student.branch == "AutoMobile":
#         crud.create_automobile_student(db, student.name, student.email, student.birthday)
#     else:
#         raise HTTPException(status_code=400, detail="Invalid branch specified")
    
#     return created_student

# # Get all students in the general table
# @app.get("/students/")
# def read_students(db: Session = Depends(get_db)):
#     students = crud.get_students(db=db)
#     return students

# # Endpoint to delete a student by ID
# @app.delete("/students/{student_id}")
# def delete_student(student_id: int, db: Session = Depends(get_db)):
#     student = crud.get_student_by_id(db, student_id)
#     if student is None:
#         raise HTTPException(status_code=404, detail="Student not found")
#     crud.delete_student(db, student_id)
#     return {"message": "Student deleted successfully"}


# main.py
from fastapi import FastAPI, Depends, HTTPException, status 
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from database import engine, get_db
from models import Base
import crud
import uvicorn
from schemas import StudentCreate, UserCreate, Token
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables in the database
Base.metadata.create_all(bind=engine)


@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    crud.create_user(db, user)
    return {"msg": "User registered successfully"}

@app.post("/login", response_model=Token)
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = crud.authenticate_user(db, user.username, user.password)
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    access_token = crud.create_access_token(data={"sub": db_user.username})
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/students/")
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    created_student = crud.create_student(db, student)

    # Add to the respective branch table based on the branch
    if student.branch == "Computer Science":
        crud.create_computer_science_student(db, student.name, student.email, student.birthday)
    elif student.branch == "Information Technology":
        crud.create_information_technology_student(db, student.name, student.email, student.birthday)
    elif student.branch == "Civil":
        crud.create_civil_student(db, student.name, student.email, student.birthday)
    elif student.branch == "Mechanical":
        crud.create_mechanical_student(db, student.name, student.email, student.birthday)
    elif student.branch == "Automobile":
        crud.create_automobile_student(db, student.name, student.email, student.birthday)
    else:
        raise HTTPException(status_code=400, detail="Invalid branch specified")
    
    return created_student

@app.get("/students/")
def read_students(db: Session = Depends(get_db)):
    return crud.get_students(db)

@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = crud.get_student_by_id(db, student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    crud.delete_student(db, student_id)
    return {"message": "Student deleted successfully"}


if __name__ == "__main__":
    # Run Uvicorn with the app on port 8080
    uvicorn.run("main:app", host="127.0.0.1", port=8080, reload=True)

