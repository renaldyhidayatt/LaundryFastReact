from pydantic import BaseModel


class OutletSchema(BaseModel):
    nama: str
    alamat: str
    telp: str
