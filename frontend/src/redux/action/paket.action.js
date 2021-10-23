import { PaketService } from "../../service/paket.service";

export const paketList = () => (dispatch) => {
  dispatch({ type: "PAKET_REQUEST" });

  PaketService.paketList()
    .then((res) => {
      dispatch({
        type: "PAKET_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "PAKET_FAILED", payload: err });
      console.log(err);
    });
};

export const paketCreate = (data) => (dispatch) => {
  dispatch({ type: "ADD_PAKET_REQUEST" });

  PaketService.paketCreate(data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "ADD_PAKET_SUCCESS",
      });
    })
    .catch((err) => {
      dispatch({
        type: "ADD_PAKET_FAILED",
      });
    });
};

export const updatePaket = (id, data) => (dispatch) => {
  dispatch({ type: "UPDATE_PAKET_REQUEST" });

  PaketService.paketUpdate(id, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "UPDATE_PAKET_SUCCESSS",
      });
      window.location.href = "/admin/paket";
    })
    .catch((err) => {
      dispatch({ type: "UPDATE_PAKET_FAILED" });
    });
};

export const getByidPaket = (id) => (dispatch) => {
  dispatch({ type: "GET_PAKETID_REQUEST" });
  PaketService.getPaketid(id)
    .then((res) => {
      console.log(res.data);

      dispatch({ type: "GET_PAKETID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "GET_PAKETID_FAILED",
        payload: err,
      });
    });
};

export const deletePaket = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_PAKET_REQUEST",
  });
  PaketService.deletePaketid(id)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "DELETE_PAKET_SUCCESS",
        payload: res.data,
      });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_PAKET_FAILED",
        payload: err,
      });
    });
};
