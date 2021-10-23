import { useEffect } from "react";
import { connect } from "react-redux";
import { paketList } from "../../../redux/action/paket.action";
import TablePaket from "../../../components/admin/Paket/TablePaket";

function PaketList(props) {
  useEffect(() => {
    props.dispatch(paketList());
  }, []);

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Member List</h6>
        </div>
        <div className="card-body">
          <TablePaket />
        </div>
      </div>
    </div>
  );
}

export default connect()(PaketList);
