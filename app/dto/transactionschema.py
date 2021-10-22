from enum import Enum
from pydantic.main import BaseModel
from datetime import datetime


class StatusEnum(str, Enum):
    baru = "baru"
    proses = "proses"
    selesai = "selesai"
    diambil = "diambil"


class StatusBayarEnum(str, Enum):
    dibayar = "dibayar"
    belum = "belum"


class UpdateStatus(BaseModel):
    status: StatusEnum
    status_bayar: StatusBayarEnum
    total_bayar: int


class TransactionSchema(BaseModel):
    outlet_id: int
    kode_invoice: int
    member_id: int
    diskon: int
    paket_id: int
    qty: int
    status: StatusEnum = StatusEnum.baru
    status_bayar: StatusBayarEnum = StatusBayarEnum.dibayar
