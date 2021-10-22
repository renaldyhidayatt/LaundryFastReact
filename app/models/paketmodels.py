from typing import Optional
from sqlmodel import Field, SQLModel


class Paket(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    jenis_paket: str
    nama: str
    outlet_id: int
