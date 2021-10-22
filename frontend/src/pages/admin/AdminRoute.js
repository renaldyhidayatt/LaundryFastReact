import { Switch, Route, Redirect } from "react-router-dom";
import Bisa from "./Bisa";
import Dashboard from "./dashboard";
import LayoutAdmin from "../../components/Layout/layoutAdmin";

import IsAdmin from "../../guard/IsAdmin";
import MemberList from "./Member/MemberList";
import MemberCreate from "./Member/Create";
import UpdateMember from "./Member/Update";

const RouteLayoutAdmin = () => {
  return (
    <LayoutAdmin>
      <Switch>
        <IsAdmin path="/admin/bisa" component={Bisa} />
        <IsAdmin path="/admin/member/update/:id" component={UpdateMember} />
        <IsAdmin path="/admin/member/create" component={MemberCreate} />
        <IsAdmin path="/admin/member" component={MemberList} />
        <Route exact={true} path="/admin/" component={Dashboard} />
        <Redirect from="*" to="/admin/" />
      </Switch>
    </LayoutAdmin>
  );
};

export default RouteLayoutAdmin;
