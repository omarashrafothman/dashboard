import React from "react";
import "./sideBar.scss";
//importing material ui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CategoryIcon from "@mui/icons-material/Category";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DetailsIcon from "@mui/icons-material/Details";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Gamalko</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <InventoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/Orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/contactus" style={{ textDecoration: "none" }}>
            <li>
              <ContactPageIcon className="icon" />
              <span>Contact us</span>
            </li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Category</span>
            </li>
          </Link>
          <Link to="/orderdetails" style={{ textDecoration: "none" }}>
            <li>
              <DetailsIcon className="icon" />
              <span>Order Details</span>
            </li>
          </Link>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <li>
              <InfoOutlinedIcon className="icon" />
              <span>About Us</span>
            </li>
          </Link>
          <Link to="/terms" style={{ textDecoration: "none" }}>
            <li>
              <InfoOutlinedIcon className="icon" />
              <span>Terms & Conditions</span>
            </li>
          </Link>

          <p className="title">SERVICES</p>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <Link to="/logindriver" style={{ textDecoration: "none" }}>
              <span>Login driver</span>
            </Link>
          </li>
        </ul>
      </div>
      {/**    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  );
}

export default Sidebar;
