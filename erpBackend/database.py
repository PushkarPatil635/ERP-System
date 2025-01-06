from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Replace the below URL with your own MySQL credentials
DATABASE_URL = "mysql+pymysql://root:Pushkar174%24@localhost/erp_db"



# Create SQLAlchemy engine and session factory
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Create a base class for model definition
Base = declarative_base()

# Dependency function for getting the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()