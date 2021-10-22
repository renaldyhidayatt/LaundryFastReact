import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateForm from "../../../components/admin/Member/CreateOrUpdate";
import { memberCreate } from "../../../redux/action/member.action";
import Success from "../../../components/Success";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";

function CreateMember() {
  const initialState = {
    nama: "",
    alamat: "",
    jenis_kelamin: "",
    telp_member: "",
    no_ktp: "",
  };
  const { loading, success, error } = useSelector(
    (state) => state.addMemberReducer
  );

  const [create, setCreate] = useState(initialState);

  const dispatch = useDispatch();

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setCreate({ ...create, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const value = {
      nama: create.nama,
      alamat: create.alamat,
      jenis_kelamin: create.jenis_kelamin,
      telp_member: create.telp_member,
      no_ktp: create.no_ktp,
    };
    dispatch(memberCreate(value));

    console.log(value);
  };

  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Create</h6>
        </div>
        <div className="card-body">
          {success && <Success success="Product Added Succesfully" />}
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          <CreateForm
            Create={true}
            nama={create.nama}
            alamat={create.alamat}
            jenis_kelamin={create.jenis_kelamin}
            telp_member={create.telp_member}
            no_ktp={create.no_ktp}
            onChangeInput={onChangeInput}
            HandleSubmit={HandleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateMember;
