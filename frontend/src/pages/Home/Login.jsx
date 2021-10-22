import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LayoutAuthRegis from "../../components/Layout/layoutRegister";
import { loginUser } from "../../redux/action/auth.action";
import FormAuth from "../../components/formAuth/formAuth";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.authReducer);

  const { isLoggedIn, error, loading } = auth;

  const onChangeEmaail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const user = new FormData();

    user.append("username", email);
    user.append("password", password);

    dispatch(loginUser(user));
  };

  if (isLoggedIn === true) {
    history.push("/dashboard");
  }
  return (
    <LayoutAuthRegis title="Login">
      {error && <Error error="Invalid Credentials" />}
      {loading && <Loader />}
      <FormAuth
        Login={true}
        HandleSubmit={HandleSubmit}
        email={email}
        onChangeEmaail={onChangeEmaail}
        password={password}
        onChangePassword={onChangePassword}
      />
    </LayoutAuthRegis>
  );
}

export default LoginPage;
