from typing import Optional
from sqlmodel import SQLModel, Field


class User(SQLModel, table=True):

    id: Optional[int] = Field(primary_key=True, index=True)
    name: str
    email: str
    password: str
    is_staff: Optional[bool]
    is_active: Optional[bool]
