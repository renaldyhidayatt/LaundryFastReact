from fastapi import APIRouter
from dto.memberschema import MemberSchema
from .memberservice import MemberService

router = APIRouter(prefix="/member", tags=["Member"])


@router.get("/")
def getAll():
    return MemberService.getAll()


@router.post("/")
def createMember(request: MemberSchema):
    return MemberService.createMember(request=request)


@router.post("/{id}")
def updateMember(id: int, request: MemberSchema):
    return MemberService.updateMember(id=id, request=request)


@router.delete("/{id}")
def deleteMember(id: int):
    return MemberService.deleteMember(id=id)
