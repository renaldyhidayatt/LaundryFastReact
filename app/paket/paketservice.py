from fastapi import Response, status
from sqlmodel import Session
from dto.paketschema import PaketSchema
from models.paketmodels import Paket
from config.database import engine


class PaketService:
    def getall():
        db = Session(engine)
        return db.query(Paket).all()

    def createpaket(request: PaketSchema):
        db = Session(engine)
        db_create = Paket(
            jenis_paket=request.jenis_paket,
            nama=request.nama,
            harga=request.harga,
            outlet_id=request.outlet_id,
        )

        db.add(db_create)
        db.commit()

        return Response(content="Bisa Bro", status_code=status.HTTP_200_OK)

    def getIdPaket(id: int):
        db = Session(engine)
        return db.query(Paket).filter(Paket.id == id).first()

    def updatePaket(id: int, request: PaketSchema):
        db = Session(engine)
        db_update = db.query(Paket).filter(Paket.id == id).first()

        db_update.jenis_paket = request.jenis_paket
        db_update.nama = request.nama
        db_update.harga = request.harga
        db_update.outlet_id = request.outlet_id
        db.commit()

        return Response(content="", status_code=status.HTTP_200_OK)

    def deletePaket(id: int):
        db = Session(engine)
        db_update = db.query(Paket).filter(Paket.id == id).first()

        db.delete(db_update)
        db.commit()

        return Response(content="", status_code=status.HTTP_200_OK)
