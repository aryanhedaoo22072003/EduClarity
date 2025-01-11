import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React from "react";
import Loader from "../Loader/Loader";

type Props = {
  id: string;
};

const CourseContent = ({ id }: Props) => {
  const { data, isLoading } = useGetCourseContentQuery(id);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div>CourseContent</div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseContent;
