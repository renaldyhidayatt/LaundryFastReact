import { Switch, Route, Redirect } from "react-router-dom";
import Bisa from "./Bisa";
import Dashboard from "./dashboard";
import LayoutAdmin from "../../components/Layout/layoutAdmin";

import IsAdmin from "../../guard/IsAdmin";
import MemberList from "./Member/MemberList";
import MemberCreate from "./Member/Create";
import UpdateMember from "./Member/Update";

import OutletList from "./Outlet/OutletList";
import CreateOutlet from "./Outlet/Create";
import UpdateOutlet from "./Outlet/Update";

import PaketList from "./Paket/List";
import PaketCreate from "./Paket/Create";
import PaketUpdate from "./Paket/Update";

const RouteLayoutAdmin = () => {
  return (
    <LayoutAdmin>
      <Switch>
        <IsAdmin path="/admin/bisa" component={Bisa} />
        <IsAdmin path="/admin/paket/update/:id" component={PaketUpdate} />
        <IsAdmin path="/admin/paket/create" component={PaketCreate} />
        <IsAdmin path="/admin/paket" component={PaketList} />
        <IsAdmin path="/admin/outlet/update/:id" component={UpdateOutlet} />
        <IsAdmin path="/admin/outlet/create" component={CreateOutlet} />
        <IsAdmin path="/admin/outlet" component={OutletList} />
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
