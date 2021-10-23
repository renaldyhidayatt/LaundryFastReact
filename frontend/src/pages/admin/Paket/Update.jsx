import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePaket, getByidPaket } from "../../../redux/action/paket.action";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import Success from "../../../components/Success";
import UpdateForm from "../../../components/admin/Paket/CreateOrUpdate";

export default function UpdateOutlet({ match }) {
  const dispatch = useDispatch();

  const initialState = {
    jenis_paket: "",
    nama: "",
    harga: "",
    outlet_id: "",
  };
  const id = match.params.id;

  const { paket, error, loading } = useSelector(
    (state) => state.getPaketIdReducer
  );

  const { success, updateError, updateLoading } = useSelector(
    (state) => state.updatePaketReducer
  );

  const [update, setUpdate] = useState(initialState);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  useEffect(() => {
    if (paket) {
      if (paket.id == id) {
        setUpdate(paket);
      } else {
        dispatch(getByidPaket(id));
      }
    } else {
      dispatch(getByidPaket(id));
    }
  }, [dispatch, paket]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePaket(id, update));
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
          {paket && (
            <UpdateForm
              Create={true}
              jenis_paket={update.jenis_paket}
              nama={update.nama}
              harga={update.harga}
              outlet_id={update.outlet_id}
              onChangeInput={onChangeInput}
              HandleSubmit={HandleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
