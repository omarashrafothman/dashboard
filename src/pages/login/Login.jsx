import React from "react";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import "../new/new.scss";
import "./login.scss";
import { useFormik } from "formik";
import { useState } from "react";

function Login({ setDark, dark }) {
  const [logined, setlogined] = useState(false);
  const logd = () => {
    if (logined == false) {
      setlogined(true);
      alert("you are login");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {},
    validate: (values) => {
      // values.name  values.email  values.channel
      // errors.name  errors.email  errors.channel
      let errors = {};
      if (!values.username) {
        errors.username = "Required";
      } else if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  return (
    <div className="login new">
      <Sidebar />
      <div className="newContainer">
        <Navbar setDark={setDark} dark={dark} />
        <diV className="top">
          <h1>Login</h1>
        </diV>
        <diV className="bottom">
          {/** <div className="left">
          <img
            className="image"
            src={file ? URL.createObjectURL(file) : { noImage }}
          />
        </div> */}
          <div className="right">
            <form className="" onSubmit={formik.handleSubmit}>
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
                <label>User Name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  isInvalid={formik.errors.username}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                />
                {formik.errors.username && formik.touched.username ? (
                  <p className="error" type="invalid">
                    {formik.errors.username}
                  </p>
                ) : null}
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isInvalid={formik.errors.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="error" type="invalid">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <button type="submit" onClick={logd}>
                Login
              </button>
            </form>
          </div>
        </diV>
      </div>
    </div>
  );
}

export default Login;
