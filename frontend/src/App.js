import { Switch, Route } from "react-router-dom";
import "./App.css";
import RouteLayoutHome from './pages/Home/HomeRoute'
import RouteLayoutAdmin from './pages/admin/AdminRoute'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/admin"
          render={(props) => <RouteLayoutAdmin {...props} />}
        />
        <Route path="/" render={(props) => <RouteLayoutHome {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
