from fastapi import APIRouter, Depends
from dto.transactionschema import TransactionSchema, UpdateStatus
from .transaksiservice import TransaksiService

router = APIRouter(prefix="/transaction", tags=["Transaction"])


@router.get("/")
def getAll():
    return TransaksiService.getAll()


@router.post("/")
def createTrans(request: TransactionSchema):
    return TransaksiService.createTrans(request=request)


@router.post("/{id}")
def updateTrans(id: int, request: TransactionSchema):
    return TransaksiService.updateTransaksi(id=id, request=request)


@router.post("/update-status/{id}")
def updateStatus(id: int, request: UpdateStatus):
    return TransaksiService.updateStatus(id=id, request=request)


@router.delete("/{id}")
def deleteTrans(id: int):
    return TransaksiService.deleteTransaksi(id=id)
