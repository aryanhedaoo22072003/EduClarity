import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useTheme } from "next-themes";
type Props = {}

const AllCourses = (props: Props) => {
    const { theme, setTheme } = useTheme();

     const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    {
        field: " ",
        headerName: "Delete",
        flex: 0.2,
        renderCell: (params: any) => {
          return (
            <>
              <Button
                onClick={() => {
                  setOpen(!open);
                  setCourseId(params.row.id);
                }}
              >
                <AiOutlineDelete
                  className="dark:text-white text-black"
                  size={20}
                />
              </Button>
            </>
          );
        },
      },
    ];
  return (
    <div>AllCourses</div>
  )
}

export default AllCourses;