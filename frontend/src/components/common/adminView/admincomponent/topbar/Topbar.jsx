import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import hehe from "../../../../../images2/GQ.png";
//import adminlg from '../../images2/gq-logo2.png';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">GQ INTERNATIONAL</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            {/*
            <span className="topIconBadge"></span> */}
          </div>

          <div className="topbarIconContainer">
            <Language />{" "}
            {/*
            <span className="topIconBadge"></span> */}
          </div>

          <div className="topbarIconContainer">
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <i class="fas fa-sign-out-alt"></i>{" "}
            </a>
          </div>

          <img src={hehe} className="topAvatar" alt="" />
        </div>
      </div>
    </div>
  );
}
