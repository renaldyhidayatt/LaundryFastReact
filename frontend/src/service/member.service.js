import AxiosInstance from "../helpers/config";

export const memberService = {
  memberList,
  memberCreate,
  updateMember,
  MemberById,
  DeleteMember,
};

function memberList() {
  return AxiosInstance().get("/member");
}

function memberCreate(data) {
  return AxiosInstance().post("/member", data);
}

function updateMember(id, data) {
  return AxiosInstance().post(`/member/${id}`, data);
}

function MemberById(id) {
  return AxiosInstance().get(`/member/${id}`);
}

function DeleteMember(id) {
  return AxiosInstance().delete(`/member/${id}`);
}
