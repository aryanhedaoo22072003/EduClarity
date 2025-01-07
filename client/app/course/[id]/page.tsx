/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";


const Page = ({params}:any) => {
    const { id } = React.use(params);
    return (
        <div>
            <CourseDetailsPage id={id} />
        </div>
    )
}

export default Page;
 