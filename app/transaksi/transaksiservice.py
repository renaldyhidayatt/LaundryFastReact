from fastapi import HTTPException, status
from sqlalchemy.orm.session import Session
from models.detailtransmodels import DetailTransaksi
from models.transactionmodel import Transaction
from dto.transactionschema import TransactionSchema, UpdateStatus
from models.outletmodels import Outlet
from models.membermodels import Member
from models.paketmodels import Paket
from datetime import datetime, timedelta
from config.database import engine


class TransaksiService:
    def getAll():
        db = Session(engine)
        return db.query(Transaction).all()

    def createTrans(request: TransactionSchema):
        db = Session(engine)
        db_outlet = db.query(Outlet).filter(Outlet.id == request.outlet_id).first()
        db_member = db.query(Member).filter(Member.id == request.member_id).first()
        db_paket = db.query(Paket).filter(Paket.id == request.paket_id).first()

        batas_waktu = datetime.now() + timedelta(days=7)

        if not db_paket:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Id Paket tidak ada yahahah",
            )

        if not db_outlet:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Id Outlet tidak ada yahahah",
            )

        if not db_member:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Id Member tidak ada yahahah",
            )

        db_create = Transaction(
            outlet_id=db_outlet.id,
            kode_invoice=request.kode_invoice,
            member_id=db_member.id,
            tgl=datetime.now(),
            batas_waktu=batas_waktu,
            diskon=request.diskon,
            status=request.status,
            status_bayar=request.status_bayar,
        )

        db.add(db_create)
        if db_create:
            harga_qty = int(db_paket.harga) * request.qty * request.diskon / 100
            db_trans_id = (
                db.query(Transaction)
                .filter(Transaction.kode_invoice == request.kode_invoice)
                .first()
            )

            db_crtrans = DetailTransaksi(
                transaksi_id=db_trans_id.id,
                paket_id=db_paket.id,
                qty=request.qty,
                total_harga=harga_qty,
            )
            db.add(db_crtrans)

        # if db_create:

        # else:
        #     print("Yahahah")

        db.commit()
        return "Bisa"

    def updateTransaksi(id: int, request: TransactionSchema):
        db = Session(engine)
        db_id = db.query(Transaction).filter(Transaction.id == id).first()

        db_id.outlet_id = request.outlet_id
        db_id.kode_invoice = request.kode_invoice
        db_id.member_id = request.member_id
        db_id.tgl = request.tgl
        db_id.batas_waktu = request.batas_waktu
        db_id.biaya_tambahan = request.biaya_tambahan
        db_id.diskon = request.diskon
        db_id.pajak = request.pajak
        db_id.status = request.status
        db_id.status_bayar = request.status_bayar

        db.commit()
        return "Bisa"

    def updateStatus(id: int, request: UpdateStatus):
        db = Session(engine)
        db_id = db.query(Transaction).filter(Transaction.id == id).first()
        db_detail = db.query(DetailTransaksi).filter(DetailTransaksi.id == id).first()

        db_id.status = request.status
        db_id.status_bayar = request.status_bayar

        db_detail.total_bayar = str(request.total_bayar)
        db_detail.keterangan = "Sudah Bayar"

        db.commit()

        return "Sudah Update Status Bayar"

    def deleteTransaksi(id: int):
        db = Session(engine)
        db_id = db.query(Transaction).filter(Transaction.id == id).first()
        db.delete(db_id)
        db.commit()

        return "Bisa"
