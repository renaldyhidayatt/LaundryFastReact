from typing import Optional
from sqlmodel import SQLModel, Field


class Member(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    nama: str
    alamat: str
    jenis_kelamin: str
    telp_member: str
    no_ktp: str
