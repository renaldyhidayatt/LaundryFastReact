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
