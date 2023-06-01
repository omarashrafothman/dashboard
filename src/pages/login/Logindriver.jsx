import React from "react";
import New from "../new/New";
import { useState } from "react";
import userInput from "../../Formsource";
import { useFormik } from "formik";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
function Logindriver({ userInput, setDark, dark }) {
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (values) => {},
    validate: (values) => {
      // values.name  values.email  values.channel
      // errors.name  errors.email  errors.channel
      let errors = {};
      if (!values.phone) {
        errors.phone = "Required";
      } else if (/^01[0125][0-9]{8}$/gm.test(values.username)) {
        errors.username = "Invalid email format";
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
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="01022420105"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  isInvalid={formik.errors.phone}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <p className="error" type="invalid">
                    {formik.errors.phone}
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
              <button type="submit">Login</button>
            </form>
          </div>
        </diV>
      </div>
    </div>
  );
}

export default Logindriver;
