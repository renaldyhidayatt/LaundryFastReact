from typing import Optional
from sqlalchemy.sql.expression import table
from sqlmodel import SQLModel, Field


class Outlet(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    nama: str
    alamat: str
    telp: str
