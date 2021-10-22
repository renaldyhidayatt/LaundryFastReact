import AxiosInstance from "../helpers/config";

export const memberService = {
  memberList,
};

function memberList() {
  return AxiosInstance().get("/member");
}
