import "./dataTabel.scss";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Datatabelsource";

function Datatabel() {
  /* {
       const actioonCoulumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="updateButton">Update</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ]; 
  }
  return (
    <div className="dataTabel">
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns}
        paginationModel={{ page: 0, pageSize: 9 }}
        checkboxSelection
      />
    </div>
  );*/
}

export default Datatabel;
