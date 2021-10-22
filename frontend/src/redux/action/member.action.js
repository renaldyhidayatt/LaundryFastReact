import { memberService } from "../../service/member.service";

export const memberList = () => (dispatch) => {
  dispatch({ type: "MEMBER_REQUEST" });

  memberService
    .memberList()
    .then((res) => {
      dispatch({
        type: "MEMBER_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "MEMBER_FAILED", payload: err });
      console.log(err);
    });
};

export const memberCreate = (data) => (dispatch) => {
  dispatch({ type: "ADD_MEMBER_REQUEST" });

  memberService
    .memberCreate(data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "ADD_MEMBER_SUCCESS",
      });
      window.location.href = "/admin/member";
    })
    .catch((err) => {
      dispatch({
        type: "ADD_MEMBER_FAILED",
      });
    });
};

export const updateMember = (id, data) => (dispatch) => {
  dispatch({ type: "UPDATE_MEMBER_REQUEST" });

  memberService
    .updateMember(id, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "UPDATE_MEMBER_SUCCESSS",
      });
      window.location.href = "/admin/member";
    })
    .catch((err) => {
      dispatch({ type: "UPDATE_MEMBER_FAILED" });
    });
};

export const getByid = (id) => (dispatch) => {
  dispatch({ type: "GET_MEMBERID_REQUEST" });
  memberService
    .MemberById(id)
    .then((res) => {
      console.log(res.data);

      dispatch({ type: "GET_MEMBERBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "GET_MEMBERID_FAILED",
        payload: err,
      });
    });
};

export const deleteMember = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_MEMBER_REQUEST",
  });
  memberService
    .DeleteMember(id)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "DELETE_MEMBER_SUCCESS",
        payload: res.data,
      });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_MEMBER_FAILED",
        payload: err,
      });
    });
};
