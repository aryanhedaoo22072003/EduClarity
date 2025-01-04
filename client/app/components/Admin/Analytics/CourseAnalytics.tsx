/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   XAxis,
//   Label,
//   YAxis,
//   LabelList,
// } from "recharts";
// import Loader from "../../Loader/Loader";
// import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
// import { styles } from "@/app/styles/style";

// type Props = {};

// const CourseAnalytics = (props: Props) => {
//   const { data, isLoading } = useGetCoursesAnalyticsQuery({});

//   // const analyticsData = [
//   //     { name: 'Jun 2023', uv: 3 },
//   //     { name: 'July 2023', uv: 2 },
//   //     { name: 'August 2023', uv: 5 },
//   //     { name: 'Sept 2023', uv: 7 },
//   //     { name: 'October 2023', uv: 2 },
//   //     { name: 'Nov 2023', uv: 5 },
//   //     { name: 'December 2023', uv: 7 },
//   //   ];

//   const analyticsData: any = [];

//   data &&
//     data.courses.last12Months.forEach((item: any) => {
//       analyticsData.push({ name: item.month, uv: item.count });
//     });

//   const minValue = 0;

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="h-screen">
//           <div className="mt-[50px]">
//             <h1 className={`${styles.title} px-5 !text-start`}>
//               Courses Analytics
//             </h1>
//             <p className={`${styles.label} px-5`}>
//               Last 12 months analytics data{" "}
//             </p>
//           </div>

//           <div className="w-full h-[90%] flex items-center justify-center">
//             <ResponsiveContainer width="90%" height="50%">
//               <BarChart width={150} height={300} data={analyticsData}>
//                 <XAxis dataKey="name">
//                   <Label offset={0} position="insideBottom" />
//                 </XAxis>
//                 <YAxis domain={[minValue, "auto"]} />
//                 <Bar dataKey="uv" fill="#3faf82">
//                   <LabelList dataKey="uv" position="top" />
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseAnalytics;



// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   XAxis,
//   Label,
//   YAxis,
//   LabelList,
// } from "recharts";
// import Loader from "../../Loader/Loader";
// import html2canvas from "html2canvas";
// import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
// import { styles } from "@/app/styles/style";

// type Props = {};

// const CourseAnalytics = (props: Props) => {
//   const { data, isLoading } = useGetCoursesAnalyticsQuery({});
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const analyticsData: any = [];

//   data &&
//     data.courses.last12Months.forEach((item: any) => {
//       analyticsData.push({ name: item.month, uv: item.count });
//     });

//   const filteredData =
//     startDate && endDate
//       ? analyticsData.filter((item: any) => {
//           const itemDate = new Date(`${item.name} 01`);
//           return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
//         })
//       : analyticsData;

//   const downloadChart = () => {
//     const chartElement = document.querySelector(".recharts-wrapper");
//     if (chartElement) {
//       html2canvas(chartElement).then((canvas) => {
//         const link = document.createElement("a");
//         link.download = "courses-analytics.png";
//         link.href = canvas.toDataURL();
//         link.click();
//       });
//     }
//   };

//   const minValue = 0;

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="h-screen">
//           <div className="mt-[50px]">
//             <h1 className={`${styles.title} px-5 !text-start`}>
//               Courses Analytics
//             </h1>
//             <p className={`${styles.label} px-5`}>
//               Last 12 months analytics data
//             </p>
//           </div>

//           {/* Filters */}
//           <div className="dark:text-white text-black flex justify-between px-5 mb-5">
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="border p-2 rounded"
//               placeholder="Start Date"
//             />
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="border p-2 rounded"
//               placeholder="End Date"
//             />
//             <button
//               className="bg-green-500 text-white px-4 py-2 rounded"
//               onClick={downloadChart}
//             >
//               Download Chart
//             </button>
//           </div>

//           <div className="w-full h-[90%] flex items-center justify-center">
//             <ResponsiveContainer width="90%" height="50%">
//               <BarChart width={150} height={300} data={filteredData}>
//                 <XAxis dataKey="name">
//                   <Label offset={0} position="insideBottom" />
//                 </XAxis>
//                 <YAxis domain={[minValue, "auto"]} />
//                 <Bar dataKey="uv" fill="#3faf82">
//                   <LabelList dataKey="uv" position="top" />
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseAnalytics;



import React, { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Label,
  YAxis,
  LabelList,
} from "recharts";
import Loader from "../../Loader/Loader";
import html2canvas from "html2canvas";
import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/style";

type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CourseAnalytics = (props: Props) => {
  const { data, isLoading } = useGetCoursesAnalyticsQuery({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const analyticsData: any = [];

  data &&
    data.courses.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, uv: item.count });
    });

  const filteredData =
    startDate && endDate
      ? analyticsData.filter((item: any) => {
          const itemDate = new Date(`${item.name} 01`);
          return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
        })
      : analyticsData;

  const downloadChart = () => {
    const chartElement = document.querySelector(".recharts-wrapper")as HTMLElement;
    if (chartElement) {
      html2canvas(chartElement).then((canvas) => {
        const link = document.createElement("a");
        link.download = "courses-analytics.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const minValue = 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen">
          <div className="mt-[50px]">
            <h1 className={`${styles.title} px-5 !text-start`}>
              Courses Analytics
            </h1>
            <p className={`${styles.label} px-5`}>
              Last 12 months analytics data
            </p>
          </div>

          {/* Filters */}
          <div className="dark:text-white text-black flex justify-between px-5 mb-5">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 rounded"
              placeholder="Start Date"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded"
              placeholder="End Date"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={downloadChart}
            >
              Download Chart
            </button>
          </div>

          <div className="w-full h-[90%] flex items-center justify-center">
            <ResponsiveContainer width="90%" height="50%">
              <LineChart width={150} height={300} data={filteredData}>
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <YAxis domain={[minValue, "auto"]} />
                <Line type="monotone" dataKey="uv" stroke="#3faf82">
                  <LabelList dataKey="uv" position="top" />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseAnalytics;
