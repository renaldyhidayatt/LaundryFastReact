import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/action/auth.action";
import LayoutAuthRegis from "../../components/Layout/layoutRegister";
import FormAuth from "../../components/formAuth/formAuth";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = useSelector((state) => state.registerReducer);

  const { error, loading } = register;

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const HandleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(registerUser(newUser));
  };

  return (
    <LayoutAuthRegis title="register">
      {error && <Error error="Invalid Credentials" />}
      {loading && <Loader />}
      <FormAuth
        login={false}
        HandleSubmit={HandleRegister}
        name={name}
        onChangeName={onChangeName}
        email={email}
        onChangeEmaail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}
      />
    </LayoutAuthRegis>
  );
}

export default RegisterPage;
