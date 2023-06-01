import React from "react";
import "./navBar.scss";
import avatar from "../../assets/images/WhatsApp Image 2023-03-13 at 2.19.34 AM.jpeg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import saudiArbia from "../../assets/images/saudi-arabia.png";
import unitedKingdom from "../../assets/images/united-kingdom.png";
import france from "../../assets/images/france.png";
import { Link } from "react-router-dom";
function Navbar({ setDark, dark }) {
  const setDarkMode = () => {
    if (dark == false) {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  return (
    <div className="navBar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            {/*  <LanguageOutlinedIcon className="icon" /> 
            <select className="select_language">
              <option className="option">
                <img src={unitedKingdom} className="flag" /> English
              </option>
              <option className="option">
                <img src={saudiArbia} className="flag" /> Arabic
              </option>
              <option className="option">
                <img src={france} className="flag" /> French
              </option>
            </select>
            */}

            <Form.Select aria-label="" className="select_language">
              <option className="option">
                <img src={unitedKingdom} className="flag" /> English
              </option>

              <option value="2" className="option">
                <img src={saudiArbia} className="flag" /> Arabic
              </option>
              <option value="3" className="option">
                <img src={france} className="flag" /> French
              </option>
            </Form.Select>
          </div>
          <div className="item">
            <button onClick={setDarkMode} className="darkBtn">
              {!dark ? (
                <DarkModeOutlinedIcon className="icon" />
              ) : (
                <WbSunnyOutlinedIcon className="icon" />
              )}
            </button>
          </div>

          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item ">
            <Dropdown className="dropdown profile">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "#fff",
                  border: "none",
                }}
              >
                <img className="avatar" src={avatar} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                </Link>
                <Link to="/setting" style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                </Link>
                <Link to="/logout" style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
