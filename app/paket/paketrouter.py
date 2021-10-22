from fastapi import APIRouter, Depends
from dto.paketschema import PaketSchema
from .paketservice import PaketService

router = APIRouter(prefix="/paket", tags=["Paket"])


@router.get("/")
def getAll():
    return PaketService.getall()


@router.post("/")
def createPaket(request: PaketSchema):
    return PaketService.createpaket(request=request)


@router.post("/{id}")
def updatePaket(id: int, request: PaketSchema):
    return PaketService.updatePaket(id=id, request=request)


@router.delete("/{id}")
def deletePaket(id: int):
    return PaketService.deletePaket(id=id)
