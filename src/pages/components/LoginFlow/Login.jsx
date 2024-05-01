import AppStore from "../../../context/UserContext";
import React, { useContext, useState } from "react";

const Login = () => {

  const { setUser } = useContext(AppStore)
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onSubmitHandler = (e) =>{
    console.log('user', userName)
    e.preventDefault();
    setUser({userName,password});
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button onClick={(e)=>onSubmitHandler(e)}>Submit</button>
    </div>
  )
};

export default Login;
