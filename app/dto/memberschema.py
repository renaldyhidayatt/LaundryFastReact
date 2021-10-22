from enum import Enum
from pydantic import BaseModel


class JenisKelaminEnum(str, Enum):
    pria = "Pria"
    wanita = "Wanita"


class MemberSchema(BaseModel):
    nama: str
    alamat: str
    jenis_kelamin: JenisKelaminEnum = JenisKelaminEnum.pria
    telp_member: str
    no_ktp: str
