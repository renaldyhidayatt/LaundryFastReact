import AxiosInstance from "../helpers/config";

export const UserMe = () => {
  return AxiosInstance().get("/users/me");
};
