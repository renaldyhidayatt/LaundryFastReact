from fastapi import Depends
from config.database import engine

from models.usersmodels import User
from sqlalchemy.orm import Session
from dto.userschema import RegisterUser
from config.hashing import Hashing
from sqlmodel import Session


class UserService:
    def get_user(email: str):
        db = Session(engine)
        return db.query(User).filter(User.email == email).first()

    def create_user(user: RegisterUser):
        db = Session(engine)
        db_user = User(
            name=user.name,
            email=user.email,
            password=Hashing.bcrypt(user.password),
            is_staff=user.is_staff,
            is_active=user.is_active,
        )

        db.add(db_user)
        db.commit()

        db.refresh(db_user)
        db_user.password = None

        return db_user
