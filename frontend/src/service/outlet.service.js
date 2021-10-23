import AxioInstance from "../helpers/config";

export const OutletService = {
  createOutlet,
  getAllOutlet,
  updateOutlet,
  deleteOutlet,
  getOutletId,
};

function createOutlet(data) {
  return AxioInstance().post("/outlet", data);
}

function getAllOutlet() {
  return AxioInstance().get("/outlet");
}

function updateOutlet(id, data) {
  return AxioInstance().post(`/outlet/${id}`, data);
}

function getOutletId(id) {
  return AxioInstance().get(`/outlet/${id}`);
}

function deleteOutlet(id) {
  return AxioInstance().delete(`/outlet/${id}`);
}
