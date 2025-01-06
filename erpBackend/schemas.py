# schemas.py
from pydantic import BaseModel, EmailStr
from datetime import date

# Shared properties
class StudentBase(BaseModel):
    name: str
    email: EmailStr
    birthday: date

# Schema for creating a new student
class StudentCreate(StudentBase):
    branch: str

# Schema for reading a student (response model)
class Student(StudentBase):
    id: int

    class Config:
        orm_mode = True

#schmas for login page 

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    username: str

class Token(BaseModel):
    access_token: str
    token_type: str