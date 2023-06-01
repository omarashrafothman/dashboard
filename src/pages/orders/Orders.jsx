import React from "react";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";

import "./order.scss";
function Orders({ setDark, dark }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar setDark={setDark} dark={dark} />

        <div className="title2">
          <h2>Orders</h2>
        </div>
        <div className="card">
          <div className="table-responsive">
            <table className="table align-items-center mb-0 ">
              <thead className="col-3 thead">
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 col-1">
                    id
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 col-1">
                    country
                  </th>

                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 col-2">
                    Details
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 col-2">
                    full addresses
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 col-1">
                    Region
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 col-1">
                    floor number
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 col-1">
                    service type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-main">
                  <td className="col-1">
                    <p className="text-xs font-weight-bold mb-0">1</p>
                  </td>

                  <td className="align-middle  text-sm col-1">
                    <span className=" badge-sm badge-success">Egypt</span>
                  </td>
                  <td className="align-middle  text-sm col-2">
                    <span className=" badge-sm badge-success">
                      loremfa-rotate-180
                    </span>
                  </td>
                  <td className="align-middle  text-sm col-2">
                    <span className=" badge-sm badge-success">
                      loremfa-rotate-180
                    </span>
                  </td>
                  <td className="align-middle  text-sm col-1">
                    <span className=" badge-sm badge-success">online</span>
                  </td>
                  <td className="align-middle text-center text-sm col-1">
                    <span className=" badge-sm badge-success">2</span>
                  </td>
                  <td className="align-middle text-center  text-sm col-1">
                    <span className=" badge-sm badge-success">cash</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
