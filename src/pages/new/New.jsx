import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import image from "../../assets/images/WhatsApp Image 2023-03-13 at 2.19.34 AM.jpeg";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import noImage from "../../assets/images/no-image-icon-6.png";
function New({ inputs, title, setDark, dark }) {
  const [file, setFile] = useState("");
  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar setDark={setDark} dark={dark} />
        <diV className="top">
          <h1>{title}</h1>
        </diV>
        <diV className="bottom">
          {/** <div className="left">
            <img
              className="image"
              src={file ? URL.createObjectURL(file) : { noImage }}
            />
          </div> */}
          <div className="right">
            <form>
              {/**<div className="formInput">
                <label htmlFor="file">
                  image{<UploadFileIcon className="icon" />}
                </label>
                <input
                  type="file"
                  onClick={(e) => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
  */}

              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+2 0155 2242 010" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="" />
              </div>

              <button>Login</button>
            </form>
          </div>
        </diV>
      </div>
    </div>
  );
}

export default New;
