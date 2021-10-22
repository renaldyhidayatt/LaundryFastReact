from typing import Optional
from sqlalchemy.sql.expression import table
from sqlmodel import SQLModel, Field


class DetailTransaksi(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    transaksi_id: int
    paket_id: int
    qty: int
    total_harga: int
    keterangan: str
    total_bayar: int
