import { useEffect } from "react";
import { connect } from "react-redux";
import { outletList } from "../../../redux/action/outlet.action";
import TableOutle from "../../../components/admin/Outlet/TableOutlet";

function OutletList(props) {
  useEffect(() => {
    props.dispatch(outletList());
  });

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Member List</h6>
        </div>
        <div className="card-body">
          <TableOutle />
        </div>
      </div>
    </div>
  );
}

export default connect()(OutletList);
