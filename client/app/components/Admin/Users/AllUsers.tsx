/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { AiOutlineDelete,AiOutlineMail } from "react-icons/ai";
import { useTheme } from "next-themes";
import { format } from "timeago.js";
import Loader from "../../Loader/Loader";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";

type Props = {};

const AllCourses = (props: Props) => {
  const { theme } = useTheme();
  const { isLoading, data, error } = useGetAllUsersQuery({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 0.5},
    { field: "email", headerName: "Email", flex: 0.5 },
    { field: "role", headerName: "Role", flex: 0.5 },
    { field: "courses", headerName: "Purchased Courses", flex: 0.5 },
    { field: "created_at", headerName: "Joined At", flex: 0.5 },
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
              className='dark:text-white text-blackß'
              size={16}
            />
          </Button>
        </Box>
      ),
    },
    {
        field: " ",
        headerName: "Email",
        flex: 0.2,
        renderCell: (params: any) => (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"ß
            height="100%"
          >
            <Button>
              <AiOutlineMail
                className='dark:text-white text-blackß'
                size={16}
              />
            </Button>
          </Box>
        ),
      },
  ];

  const rows: any[] = [];

 { data && 
    data.users.forEach((item: any) => {
      rows.push({
        id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
        courses:item.courses.length,
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
