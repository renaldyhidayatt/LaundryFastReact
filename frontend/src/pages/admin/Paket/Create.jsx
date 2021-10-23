import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateForm from "../../../components/admin/Paket/CreateOrUpdate";
import { paketCreate } from "../../../redux/action/paket.action";
import Success from "../../../components/Success";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";

function CreatePaket() {
  const initialState = {
    jenis_paket: "",
    nama: "",
    harga: "",
    outlet_id: "",
  };
  const { loading, success, error } = useSelector(
    (state) => state.addPaketReducer
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
      jenis_paket: create.jenis_paket,
      nama: create.nama,
      harga: create.harga,
      outlet_id: create.outlet_id,
    };
    dispatch(paketCreate(value));

    console.log(value);
  };

  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Create</h6>
        </div>
        <div className="card-body">
          {success && <Success success="Paket Added Succesfully" />}
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          <CreateForm
            Create={true}
            jenis_paket={create.jenis_paket}
            nama={create.nama}
            harga={create.harga}
            outlet_id={create.outlet_id}
            onChangeInput={onChangeInput}
            HandleSubmit={HandleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default CreatePaket;
