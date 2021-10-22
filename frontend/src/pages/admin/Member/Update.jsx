import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMember, getByid } from "../../../redux/action/member.action";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import Success from "../../../components/Success";
import UpdateForm from "../../../components/admin/Member/CreateOrUpdate";

export default function UpdateMember({ match }) {
  const dispatch = useDispatch();

  const initialState = {
    nama: "",
    alamat: "",
    jenis_kelamin: "",
    telp_member: "",
    no_ktp: "",
  };
  const id = match.params.id;

  const { member, error, loading } = useSelector(
    (state) => state.getMemberReducer
  );

  const { success, updateError, updateLoading } = useSelector(
    (state) => state.updateMemberReducer
  );

  const [update, setUpdate] = useState(initialState);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  useEffect(() => {
    if (member) {
      if (member.id == id) {
        setUpdate(member);
      } else {
        dispatch(getByid(id));
      }
    } else {
      dispatch(getByid(id));
    }
  }, [dispatch, member]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateMember(id, update));
  };

  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Update</h6>
        </div>
        <div className="card-body">
          {loading && <Loader />}
          {error && <Error error="Something" />}
          {updateLoading && <Loader />}
          {updateError && <Error error="Something went wrong" />}
          {success && <Success success="Member Update Success" />}
          {member && (
            <UpdateForm
              Create={true}
              nama={update.nama}
              alamat={update.alamat}
              jenis_kelamin={update.jenis_kelamin}
              telp_member={update.telp_member}
              no_ktp={update.no_ktp}
              onChangeInput={onChangeInput}
              HandleSubmit={HandleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
