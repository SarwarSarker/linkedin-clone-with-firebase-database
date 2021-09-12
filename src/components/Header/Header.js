import Avatar from "@material-ui/core/Avatar";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./header.css";
import Headeroption from "./Headeroption";

const Header = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="img"
          />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header__right">
        <Headeroption Icon={HomeIcon} title="Home" />
        <Headeroption Icon={PeopleIcon} title="My Network" />
        <Headeroption Icon={BusinessCenterIcon} title="Jobs" />
        <Headeroption Icon={MessageIcon} title="Messaging" />
        <Headeroption Icon={NotificationsIcon} title="Notifications" />
        <Headeroption avater={Avatar} title={user.displayName} />
      </div>
    </div>
  );
};

export default Header;
