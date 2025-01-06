


# models.py
from sqlalchemy import Integer, Column, String, TIMESTAMP, Date
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)  # Add length here (e.g., 50)
    hashed_password = Column(String(100))  # Add length here (e.g., 100)

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    birthday = Column(Date)
    branch = Column(String(50))
    created_at = Column(TIMESTAMP, server_default=func.now())

class ComputerScienceStudent(Base):
    __tablename__ = "computer_science_students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    birthday = Column(Date)

class InformationTechnologyStudent(Base):
    __tablename__ = "information_technology_students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    birthday = Column(Date)

class CivilStudent(Base):
    __tablename__ = "civil_students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    birthday = Column(Date)

class MechanicalStudent(Base):
    __tablename__ = "mechanical_students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    birthday = Column(Date)

class AutomobileStudent(Base):
    __tablename__ = "automobile_students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    birthday = Column(Date)
