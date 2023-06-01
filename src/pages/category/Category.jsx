import React from "react";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel from "../../components/dataTabel/Datatabel";
import "./category.scss";
import "../new/new.scss";
import "../login/login.scss";
import Tabel2 from "../../components/tabel2/Tabel2";
import { useFormik } from "formik";
import { useState } from "react";
import noImage from "../../assets/images/WhatsApp Image 2023-03-13 at 2.19.34 AM.jpeg";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function Category({ setDark, dark }) {
  const [file, setFile] = useState("");
  console.log(file);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      title: "",
      description: "",
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
    <div className="list category new">
      <Sidebar />
      <div className="listContainer newContainer">
        <Navbar setDark={setDark} dark={dark} />
        <diV className="top">
          <h1>Add Category</h1>
        </diV>
        <diV className="bottom">
          <div className="left">
            <img
              className="image"
              /* src={file ? URL.createObjectURL(file) : { noImage }}*/
              src={noImage}
            />
          </div>

          <div className="right ">
            <form className="" onSubmit={formik.handleSubmit}>
              <div className="formInput">
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
              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="write category title.."
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  isInvalid={formik.errors.title}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                />
                {formik.errors.title && formik.touched.title ? (
                  <p className="error" type="invalid">
                    {formik.errors.title}
                  </p>
                ) : null}
              </div>
              <div className="formInput description">
                <label>description</label>
                <input
                  type="textarea"
                  placeholder=" write category description.."
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  isInvalid={formik.errors.description}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description ? (
                  <p className="error" type="invalid">
                    {formik.errors.description}
                  </p>
                ) : null}
              </div>
              <button type="submit" className="add">
                Add Category
              </button>
            </form>
          </div>
        </diV>
        <div className="title2">
          <h2>Category</h2>
        </div>
        <Tabel2 />
      </div>
    </div>
  );
}

export default Category;
