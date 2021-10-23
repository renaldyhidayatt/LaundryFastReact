import { OutletService } from "../../service/outlet.service";

export const outletList = () => (dispatch) => {
  dispatch({ type: "OUTLET_REQUEST" });

  OutletService.getAllOutlet()
    .then((res) => {
      dispatch({
        type: "OUTLET_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "OUTLET_FAILED", payload: err });
      console.log(err);
    });
};

export const outletCreate = (data) => (dispatch) => {
  dispatch({ type: "ADD_OUTLET_REQUEST" });

  OutletService.createOutlet(data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "ADD_OUTLET_SUCCESS",
      });
      window.location.href = "/admin/outlet";
    })
    .catch((err) => {
      dispatch({
        type: "ADD_OUTLET_FAILED",
      });
    });
};

export const updateOutlet = (id, data) => (dispatch) => {
  dispatch({ type: "UPDATE_OUTLET_REQUEST" });

  OutletService.updateOutlet(id, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "UPDATE_OUTLET_SUCCESSS",
      });
      window.location.href = "/admin/outlet";
    })
    .catch((err) => {
      dispatch({ type: "UPDATE_OUTLET_FAILED" });
    });
};

export const getByid = (id) => (dispatch) => {
  dispatch({ type: "GET_OUTLETID_REQUEST" });
  OutletService.getOutletId(id)
    .then((res) => {
      console.log(res.data);

      dispatch({ type: "GET_OUTLETID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "GET_OUTLETID_FAILED",
        payload: err,
      });
    });
};

export const deleteOutlet = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_OUTLET_REQUEST",
  });
  OutletService.deleteOutlet(id)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "DELETE_OUTLET_SUCCESS",
        payload: res.data,
      });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_OUTLET_FAILED",
        payload: err,
      });
    });
};
