import React from "react";
import "./list.scss";
import "../../components/tabel2/tabel.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel from "../../components/dataTabel/Datatabel";

function List({ setDark, dark }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar setDark={setDark} dark={dark} />
        <div className="title2">
          <h2>Users</h2>
        </div>
        <div className="card">
          <div className="table-responsive">
            <table className="table align-items-center mb-0 ">
              <thead className="col-3">
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 col-3">
                    img
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 col-3">
                    Description
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 col-3">
                    Title
                  </th>

                  <th className="text-secondary opacity-7 col-3"> actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-main">
                  <td className="col-3">
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                          className="avatar avatar-sm me-3 mm"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="col-3">
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className=" badge-sm badge-success">Online</span>
                  </td>
                  <div className="actionsBtn d-flex align-items-center ">
                    <td className="align-middle green ">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Update
                      </a>
                    </td>
                    <td className="align-middle red">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="align-middle blue">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </div>
                </tr>
                <tr className="tr-main">
                  <td className="col-3">
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                          className="avatar avatar-sm me-3 mm"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="col-3">
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className=" badge-sm badge-success">Online</span>
                  </td>
                  <div className="actionsBtn d-flex align-items-center ">
                    <td className="align-middle green ">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Update
                      </a>
                    </td>
                    <td className="align-middle red">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="align-middle blue">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </div>
                </tr>
                <tr className="tr-main">
                  <td className="col-3">
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                          className="avatar avatar-sm me-3 mm"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="col-3">
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className=" badge-sm badge-success">Online</span>
                  </td>
                  <div className="actionsBtn d-flex align-items-center ">
                    <td className="align-middle green ">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Update
                      </a>
                    </td>
                    <td className="align-middle red">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="align-middle blue">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </div>
                </tr>
                <tr className="tr-main">
                  <td className="col-3">
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                          className="avatar avatar-sm me-3 mm"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="col-3">
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className=" badge-sm badge-success">Online</span>
                  </td>
                  <div className="actionsBtn d-flex align-items-center ">
                    <td className="align-middle green ">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Update
                      </a>
                    </td>
                    <td className="align-middle red">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="align-middle blue">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </div>
                </tr>
                <tr className="tr-main">
                  <td className="col-3">
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                          className="avatar avatar-sm me-3 mm"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="col-3">
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className=" badge-sm badge-success">Online</span>
                  </td>
                  <div className="actionsBtn d-flex align-items-center ">
                    <td className="align-middle green ">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Update
                      </a>
                    </td>
                    <td className="align-middle red">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="align-middle blue">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </div>
                </tr>
                <tr className="">
                  <td className="col-3">
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                          className="avatar avatar-sm me-3 mm"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="col-3">
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className=" badge-sm badge-success">Online</span>
                  </td>
                  <div className="actionsBtn d-flex align-items-center ">
                    <td className="align-middle green ">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Update
                      </a>
                    </td>
                    <td className="align-middle red">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="align-middle blue">
                      <a
                        href="javascript:;"
                        className="text-secondary font-weight-normal text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
