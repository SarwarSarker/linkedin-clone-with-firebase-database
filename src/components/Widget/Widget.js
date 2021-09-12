import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./widget.css";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__top">
        <div className="widget__header">
          <h4>Today’s top courses</h4>
          <InfoIcon />
        </div>

        <div className="widget_body">
          <ul className="widget__header__option">
            <li>
              <h4>Learning the JavaScript Language</h4>
              <p>Jam Konick</p>
            </li>
            <li>
              <h4>Web Project Workflows</h4>
              <p>Ray Balidam</p>
            </li>
            <li>
              <h4> Variables and Fluid Layouts</h4>
              <p>Jam Karmer</p>
            </li>
            <li>
              <h4>Learning Chrome Web Developer Tools</h4>
              <p>Goen Smith</p>
            </li>
            <li>
              <h4>Slaying Job Search </h4>
              <p>Sam Jodish</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget__bottom">
        <div className="widget__header">
          <h4>Linkedin News</h4>
          <InfoIcon />
        </div>
        <div className="widget_body">
          <ul className="widget__header__option">
            <li>
              <h4>Becoming an Ally to All</h4>
              <p>Kenji Yoshino</p>
            </li>
            <li>
              <h4>15 Secrets Successful People Know</h4>
              <p>getAbstract</p>
            </li>
            <li>
              <h4>Unconscious Bias</h4>
              <p>Stacey Gordon</p>
            </li>
            <li>
              <h4>Telecom playing a significant role</h4>
              <p>Telecom towers</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Widget;
