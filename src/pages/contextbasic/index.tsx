import React, { useContext } from "react";
import Login from "../../components/LoginFlow/Login";
import Profile from "../../components/LoginFlow/Profile";
import AppStore from "../../context/UserContext";

const ContextBasic = () => {

  const { user } = useContext(AppStore);
  console.log('!@# user',user)

  return (
    <div>
      {!(user.userName?.length>0) && <Login />}
      {user.userName?.length>0 && <Profile />}
    </div>
  );
};

export default ContextBasic;
