import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOutlet, getByid } from "../../../redux/action/outlet.action";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import Success from "../../../components/Success";
import UpdateForm from "../../../components/admin/Outlet/CreateOrEdit";

export default function UpdateOutlet({ match }) {
  const dispatch = useDispatch();

  const initialState = {
    nama: "",
    alamat: "",
    telp: "",
  };
  const id = match.params.id;

  const { outlet, error, loading } = useSelector(
    (state) => state.getOutletIdReducer
  );

  const { success, updateError, updateLoading } = useSelector(
    (state) => state.updateOutletReducer
  );

  const [update, setUpdate] = useState(initialState);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  useEffect(() => {
    if (outlet) {
      if (outlet.id == id) {
        setUpdate(outlet);
      } else {
        dispatch(getByid(id));
      }
    } else {
      dispatch(getByid(id));
    }
  }, [dispatch, outlet]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateOutlet(id, update));
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
          {outlet && (
            <UpdateForm
              Create={true}
              nama={update.nama}
              alamat={update.alamat}
              telp={update.telp}
              onChangeInput={onChangeInput}
              HandleSubmit={HandleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
