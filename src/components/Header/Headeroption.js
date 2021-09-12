import Avatar from "@material-ui/core/Avatar";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser, selectUser } from "../../features/userSlice";
import "./header.css";

const Headeroption = ({ Icon, title, avater }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(logoutuser());
    });
  };

  return (
    <div className="header__options">
      {Icon && <Icon />}

      {avater && <Avatar name={avater} src={user.photoURL} onClick={logOut} />}

      <span>{title}</span>
    </div>
  );
};

export default Headeroption;
