from sqlmodel import Session
from models.outletmodels import Outlet
from dto.outletschema import OutletSchema
from config.database import engine


class OutletService:
    def getall():
        db = Session(engine)
        return db.query(Outlet).all()

    def createOutlet(request: OutletSchema):
        db = Session(engine)
        db_create = Outlet(nama=request.nama, alamat=request.alamat, telp=request.telp)
        db.add(db_create)
        db.commit()

        return "Bisa"

    def updateOutlet(id: int, request: OutletSchema):
        db = Session(engine)
        db_update = db.query(Outlet).filter(Outlet.id == id).first()

        db_update.nama = request.nama
        db_update.alamat = request.alamat
        db_update.telp = request.telp

        db.commit()

        return "Outlet"

    def deleteOutlet(id: int):
        db = Session(engine)
        db_update = db.query(Outlet).filter(Outlet.id == id).first()

        db.delete(db_update)
        db.commit()

        return "Delete Outlet"
