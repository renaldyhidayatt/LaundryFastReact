import AxiosInstance from "../helpers/config";

export const PaketService = {
  paketList,
  paketCreate,
  paketUpdate,
  getPaketid,
  deletePaketid,
};

function paketList() {
  return AxiosInstance().get("/paket");
}

function paketCreate(data) {
  return AxiosInstance().post("/paket", data);
}

function paketUpdate(id, data) {
  return AxiosInstance().post(`/paket/${id}`, data);
}

function getPaketid(id) {
  return AxiosInstance().get(`/paket/${id}`);
}

function deletePaketid(id) {
  return AxiosInstance().delete(`/paket/${id}`);
}
