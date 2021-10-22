import { useEffect } from "react";
import { connect } from "react-redux";
import { memberList } from "../../../redux/action/member.action";
import TableMember from "../../../components/admin/Member/TableMember";

function MemberList(props) {
  useEffect(() => {
    props.dispatch(memberList());
  });

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Member List</h6>
        </div>
        <div className="card-body">
          <TableMember />
        </div>
      </div>
    </div>
  );
}

export default connect()(MemberList);
