import Avatar from "@material-ui/core/Avatar";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/30/12/27/st-petersburg-4805295__340.jpg"
          alt="img"
        />
        <div className="profile__detail">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <p>Web Developer</p>
        </div>

        <div className="profile__stars">
          <span>Who view your profile</span>
          <span className="stars__number">20</span>
        </div>
        <div className="profile__stars">
          <span>
            Connections
            <br />
            <b>Grow Your Network</b>
          </span>
          <span className="stars__number">120</span>
        </div>
      </div>

      <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>branding
        </p>
        <p className="hash">
          <span>#</span>marketing
        </p>
        <p className="hash">
          <span>#</span>web developing
        </p>
        <p className="hash">
          <span>#</span>programming
        </p>
        <p className="hash">
          <span>#</span>speaking
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
