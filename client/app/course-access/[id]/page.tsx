/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import CourseContent from "@/app/components/Course/CourseContent";
import Loader from "@/app/components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
    params:any;
}

const Page = ({params}: Props) => {
    const id = params.id;
  const { isLoading, error, data } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item._id === id
      );
      if (!isPurchased) {
        redirect("/");
      }
    }
    if (error) {
      redirect("/");
    }
  }, [data,error]);

  return (
   <>
   {
    isLoading ? (
        <Loader />
    ) : (
        <div>
          <CourseContent id={id} user={data.user} />
        </div>
    )
   }
   </>
  )
}

export default Page


// 'use client';
// import CourseContent from "@/app/components/Course/CourseContent";
// import Loader from "@/app/components/Loader/Loader";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// import { redirect } from "next/navigation";
// import React, { useEffect, useState } from "react";

// type Props = {
//   params: any;
// };

// const Page = ({ params }: Props) => {
//   const [id, setId] = useState<string | null>(null);
//   const { isLoading, error, data } = useLoadUserQuery(undefined, {});

//   // UseEffect to unwrap params (assuming it's a Promise)
//   useEffect(() => {
//     const unwrapParams = async () => {
//       const resolvedParams = await params;
//       setId(resolvedParams.id); // Set id after unwrapping params
//     };

//     unwrapParams();
//   }, [params]);

//   useEffect(() => {
//     if (data && id) {
//       const isPurchased = data.user.courses.find(
//         (item: any) => item._id === id
//       );
//       if (!isPurchased) {
//         redirect("/");
//       }
//     }
//     if (error) {
//       redirect("/");
//     }
//   }, [data, error, id]);

//   if (!id) {
//     return <Loader />; // Handle loading state for params
//   }

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div>
//           <CourseContent id={id} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Page;
