from fastapi import Response, status
from sqlmodel import Session

from config.database import engine
from dto.memberschema import MemberSchema
from models.membermodels import Member


class MemberService:
    def getAll():
        db = Session(engine)
        return db.query(Member).all()

    def createMember(request: MemberSchema):
        db = Session(engine)

        db_create = Member(
            nama=request.nama,
            alamat=request.alamat,
            jenis_kelamin=request.jenis_kelamin,
            telp_member=request.telp_member,
            no_ktp=request.no_ktp,
        )
        db.add(db_create)
        db.commit()

        return Response(content="Bisa", status_code=status.HTTP_200_OK)

    def memberById(id: int):
        db = Session(engine)
        return db.query(Member).filter(Member.id == id).first()

    def updateMember(id: int, request: MemberSchema):
        db = Session(engine)
        db_update = db.query(Member).filter(Member.id == id).first()
        db_update.nama = request.nama
        db_update.alamat = request.alamat
        db_update.jenis_kelamin = request.jenis_kelamin
        db_update.telp_member = request.telp_member
        db_update.no_ktp = request.no_ktp

        db.commit()

        return Response(content="Bisa", status_code=status.HTTP_200_OK)

    def deleteMember(id: int):
        db = Session(engine)
        db_update = db.query(Member).filter(Member.id == id).first()

        db.delete(db_update)
        db.commit()

        return Response(content="Bisa", status_code=status.HTTP_200_OK)
