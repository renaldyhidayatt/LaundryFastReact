from pydantic import BaseModel


class PaketSchema(BaseModel):
    jenis_paket: str
    nama: str
    harga: str
    outlet_id: int
