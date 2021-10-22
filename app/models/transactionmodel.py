from typing import Optional
from sqlmodel import Field, SQLModel, DateTime
from datetime import datetime


class Transaction(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    outlet_id: int
    kode_invoice: str
    member_id: int
    tgl: datetime = Field(DateTime, nullable=True)
    batas_waktu: datetime = Field(DateTime, nullable=True)
    diskon: int
    status: str
    status_bayar: str
