
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useTheme } from "next-themes";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { FiEdit2 } from "react-icons/fi";
import Link from "next/link";
import { format } from "timeago.js";
import Loader from "../../Loader/Loader";

type Props = {};

const AllCourses = (props: Props) => {
  const { theme } = useTheme();
  const { isLoading, data, error } = useGetAllCoursesQuery({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params: any) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Link href={`/admin/edit-course/${params.row.id}`}>
            <FiEdit2
              style={{
                color: theme === "dark" ? "#ffffff" : "#000000",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              size={16}
            />
          </Link>
        </Box>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Button>
            <AiOutlineDelete
              style={{
                color: theme === "dark" ? "#ffffff" : "#000000",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              size={16}
            />
          </Button>
        </Box>
      ),
    },
  ];

  const rows: any[] = [];

  if (data && data.courses) {
    data.courses.forEach((item: any) => {
      rows.push({
        id: item._id,
        title: item.name,
        ratings: item.ratings,
        purchased: item.purchased,
        created_at: format(item.createdAt),
      });
    });
  }

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <Box
          
            m="40px 0 0 0"
            height="80vh"
            sx={{
              "& .MuiDataGrid-root": {
                
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{
                color:theme==="dark" ? "#fff" :"#000",
              },
              "& .MuiDataGrid-sortIcon":{
                color:theme==="dark" ? "#fff" :"#000",
              },
              "& .MuiDataGrid-row":{
                color:theme==="dark" ? "#fff" :"#000",
                borderBottom:
                    theme === "dark"
                        ? "1px solid #ffffff30!important"
                        : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root":{
                color:theme==="dark" ? "#fff" :"#000",
              },
              "& .MuiDataGrid-cell":{
                borderBottom:"none",
              },
              "& .name-column--cell":{
                color:theme==="dark" ? "#fff" :"#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom: "none"
              },
              "& .MuiDataGrid-virtualScroller":{
                backgroundColor:theme==="dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer":{
                color: theme === "dark" ? "#fff" : "#000",
                borderTop:"none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
              },
              "& .MuiCheckbox-root": {
                
                color: theme === "dark"
                  ? `#b7ebde !important`
                  : `#000000 !important`,
              },
              "& .MuiCheckbox-toolContainer .MuiButton-text": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
