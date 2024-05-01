import AppStore from "../../context/UserContext";
import React, { useContext, useState } from "react";
import styles from './style.module.css'

const Login = () => {

  const { setUser } = useContext(AppStore)
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onSubmitHandler = (e) => {
    console.log('user', userName)
    e.preventDefault();
    setUser({ userName, password });
  }
  return (
    <div className={styles.mainContainer}>
      <h2>Login</h2>
      <div>

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className={styles.inputFields}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className={styles.inputFields}
        />

      </div>
      <button onClick={(e) => onSubmitHandler(e)} className={styles.buttonClass}>Submit</button>
      <h3>What this component does is very simple,<br/>it passed the props from Login Component to Profile Component With using context API</h3>
    </div>
  )
};

export default Login;
