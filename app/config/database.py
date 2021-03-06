from sqlmodel import create_engine
from sqlmodel.main import SQLModel


SQLALCHAMY_DATABASE_URL = "sqlite:///./laundry.db"
engine = create_engine(SQLALCHAMY_DATABASE_URL, echo=True)


def create_table():
    SQLModel.metadata.create_all(engine)


# from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker

# SQLALCHAMY_DATABASE_URL = "sqlite:///./blog.db"

# engine = create_engine(
#     SQLALCHAMY_DATABASE_URL, connect_args={"check_same_thread": False}
# )

# SessionLocal = sessionmaker(
#     bind=engine,
#     autocommit=False,
#     autoflush=False,
# )

# Base = declarative_base()


# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
