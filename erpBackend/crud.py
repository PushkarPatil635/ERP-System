# # from sqlalchemy.orm import Session
# # from models import Student
# # from datetime import date

# # # Function to create a new student

# # def create_students(db: Session, name: str, email: str, birthday: date, branch:str):
# #     new_student = Student(name=name, email=email, birthday=birthday, branch=branch)
# #     db.add(new_student)
# #     db.commit()
# #     db.refresh(new_student)
# #     return new_student


# # def get_student_by_id(db: Session, student_id: int):
# #     return db.query(Student).filter(Student.id == student_id).first()

# # def delete_student(db: Session, student_id: int):
# #     student = db.query(Student).filter(Student.id == student_id).first()
# #     if student:
# #         db.delete(student)
# #         db.commit()

# # # Function to fetch all students

# # def get_student(db:Session):
# #     return db.query(Student).all()

# # def get_student_by_branch(db:Session, branch:str):
# #     return db.query(Student).filter(Student.branch == branch).all()

# from sqlalchemy.orm import Session
# from models import Student, ComputerScienceStudent, InformationTechnologyStudent, CivilStudent, MechanicalStudent, AutomobileStudent
# from datetime import date

# # General function to create a new student in the `students` table
# def create_student(db: Session, name: str, email: str, birthday: date, branch: str):
#     new_student = Student(name=name, email=email, birthday=birthday, branch=branch)
#     db.add(new_student)
#     db.commit()
#     db.refresh(new_student)
#     return new_student

# # Function to create students in specific branch tables
# def create_computer_science_student(db: Session, name: str, email: str, birthday: date):
#     new_student = ComputerScienceStudent(name=name, email=email, birthday=birthday)
#     db.add(new_student)
#     db.commit()
#     db.refresh(new_student)
#     return new_student

# def create_information_technology_student(db: Session, name: str, email: str, birthday: date):
#     new_student = InformationTechnologyStudent(name=name, email=email, birthday=birthday)
#     db.add(new_student)
#     db.commit()
#     db.refresh(new_student)
#     return new_student

# def create_civil_student(db: Session, name: str, email: str, birthday: date):
#     new_student = CivilStudent(name=name, email=email, birthday=birthday)
#     db.add(new_student)
#     db.commit()
#     db.refresh(new_student)
#     return new_student

# def create_mechanical_student(db: Session, name: str, email: str, birthday: date):
#     new_student = MechanicalStudent(name=name, email=email, birthday=birthday)
#     db.add(new_student)
#     db.commit()
#     db.refresh(new_student)
#     return new_student

# def create_automobile_student(db: Session, name: str, email: str, birthday: date):
#     new_student = AutomobileStudent(name=name, email=email, birthday=birthday)
#     db.add(new_student)
#     db.commit()
#     db.refresh(new_student)
#     return new_student


# def get_students(db: Session):
#     return db.query(Student).all() 

# def get_student_by_id(db: Session, student_id: int):
#     return db.query(Student).filter(Student.id == student_id).first()


# def delete_student(db: Session, student_id: int):
#     student = get_student_by_id(db, student_id)
#     if student:
#         db.delete(student)
#         db.commit()

# crud.py
from sqlalchemy.orm import Session
from models import (
    Student, ComputerScienceStudent, InformationTechnologyStudent, 
    CivilStudent, MechanicalStudent, AutomobileStudent, User
)
from schemas import StudentCreate, UserCreate
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import date, timedelta, datetime

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Create new user
def create_user(db: Session, user: UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = User(username=user.username, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Authenticate user
def authenticate_user(db: Session, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.hashed_password):
        return False
    return user

# Create JWT token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# General function to create a new student in the `students` table
def create_student(db: Session, student: StudentCreate):
    new_student = Student(
        name=student.name,
        email=student.email,
        birthday=student.birthday,
        branch=student.branch
    )
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

# Function to create students in specific branch tables
def create_computer_science_student(db: Session, name: str, email: str, birthday: date):
    new_student = ComputerScienceStudent(name=name, email=email, birthday=birthday)
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

def create_information_technology_student(db: Session, name: str, email: str, birthday: date):
    new_student = InformationTechnologyStudent(name=name, email=email, birthday=birthday)
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

def create_civil_student(db: Session, name: str, email: str, birthday: date):
    new_student = CivilStudent(name=name, email=email, birthday=birthday)
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

def create_mechanical_student(db: Session, name: str, email: str, birthday: date):
    new_student = MechanicalStudent(name=name, email=email, birthday=birthday)
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

def create_automobile_student(db: Session, name: str, email: str, birthday: date):
    new_student = AutomobileStudent(name=name, email=email, birthday=birthday)
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

# Function to get all students
def get_students(db: Session):
    return db.query(Student).all()

# Get student by ID
def get_student_by_id(db: Session, student_id: int):
    return db.query(Student).filter(Student.id == student_id).first()

# Delete student by ID
def delete_student(db: Session, student_id: int):
    student = get_student_by_id(db, student_id)
    if student:
        db.delete(student)
        db.commit()
