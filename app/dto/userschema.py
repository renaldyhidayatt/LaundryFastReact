from typing import Optional
from pydantic import BaseModel


class RegisterUser(BaseModel):
    name: str
    email: str
    password: str
    is_active: Optional[bool]
    is_staff: Optional[bool]


class UserList(BaseModel):
    id: int
    name: str
    email: str
    is_active: Optional[bool]
    is_staff: Optional[bool]
