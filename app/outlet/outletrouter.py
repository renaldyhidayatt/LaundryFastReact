from fastapi import APIRouter
from dto.outletschema import OutletSchema
from .outletservice import OutletService


router = APIRouter(prefix="/outlet", tags=["Outlet"])


@router.get("/")
def getAll():
    return OutletService.getall()


@router.post("/")
def createOutlet(request: OutletSchema):
    return OutletService.createOutlet(request=request)


@router.get("/{id}")
def getOutletId(id: int):
    return OutletService.getByIdOutlet(id=id)


@router.post("/{id}")
def updateOutlet(id: int, request: OutletSchema):
    return OutletService.updateOutlet(id=id, request=request)


@router.delete("/{id}")
def deleteOutlet(id: int):
    return OutletService.deleteOutlet(id=id)
