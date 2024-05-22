import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "mobile",
    headerName: "Mobile No",
    width: 180,
  },
  {
    field: "address",
    headerName: "Address",
    width: 250,
  },
  {
    field: "pinCode",
    headerName: "Pin Code",
    width: 160,
  },
  {
    field: "scrapType",
    headerName: "Scrap Type",
    width: 160,
  },
  {
    field: "scrapKG",
    headerName: "Scrap KG",
    width: 160,
  },
  {
    field: "affordableTime",
    headerName: "Affordable Time",
    width: 160,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    width: 160,
  },
];

export default function Sell() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://bgw-api.vercel.app/sellNow/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData.map((item, index) => ({ ...item, id: index })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <h3 style={{ marginLeft: "20px", padding: "10px" }}>Sell List</h3>
      {data && (
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          autoHeight
        />
      )}
    </div>
  );
}
