from fastapi import APIRouter, Depends
from models.usersmodels import User
from dto.userschema import RegisterUser
from .usersservice import UserService
from config.token import get_currentUser

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/")
def createUser(user: RegisterUser):
    return UserService.create_user(user)


@router.get("/me")
def getMe(current_user: User = Depends(get_currentUser)):
    return current_user
