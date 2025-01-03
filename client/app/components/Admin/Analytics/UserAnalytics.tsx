/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { styles } from "@/app/styles/style";
// import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import Loader from "../../Loader/Loader"

// type Props = {
//   isDashboard?: boolean;
// }


// const UserAnalytics = ({isDashboard}:Props) => {
//   const { data, isLoading } = useGetUsersAnalyticsQuery({});

//  const analyticsData: any = [];

//   data &&
//     data.users.last12Months.forEach((item: any) => {
//       analyticsData.push({ name: item.month, count: item.count });
//     });


//   return (
//     <>
//       {
//         isLoading ? (
//             <Loader />
//         ) : (
//             <div className={`${!isDashboard ? "mt-[50px]" : "mt-[50px] dark:bg-[#111C43] shadow-sm pb-5 rounded-sm"}`}>
//             <div className={`${isDashboard ? "!ml-8 mb-5" : ''}`}>
//             <h1 className={`${styles.title} ${isDashboard && '!text-[20px]'} px-5 !text-start`}>
//                Users Analytics
//              </h1>
//              {
//                !isDashboard && (
//                  <p className={`${styles.label} px-5`}>
//                  Last 12 months analytics data{" "}
//                </p>
//                )
//              }
//             </div>

//          <div className={`w-full ${isDashboard ? 'h-[30vh]' : 'h-screen'} flex items-center justify-center`}>
//            <ResponsiveContainer width={isDashboard ? '100%' : '90%'} height={!isDashboard ? "50%" : '100%'}>
//              <AreaChart
//                data={analyticsData}
//                margin={{
//                  top: 20,
//                  right: 30,
//                  left: 0,
//                  bottom: 0,
//                }}
//              >
//                <XAxis dataKey="name" />
//                <YAxis />
//                <Tooltip />
//                <Area
//                  type="monotone"
//                  dataKey="count"
//                  stroke="#4d62d9"
//                  fill="#4d62d9"
//                />
//              </AreaChart>
//            </ResponsiveContainer>
//          </div>
//        </div>
//         )
//       }
//     </>
//   )
// }

// export default UserAnalytics

import { styles } from "@/app/styles/style";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../Loader/Loader";
import html2canvas from "html2canvas";

type Props = {
  isDashboard?: boolean;
};

const UserAnalytics = ({ isDashboard }: Props) => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const analyticsData: any = [];

  data &&
    data.users.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, count: item.count });
    });

  const filteredData =
    startDate && endDate
      ? analyticsData.filter((item: any) => {
          const itemDate = new Date(`${item.name} 01`);
          return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
        })
      : analyticsData;

  const downloadChart = () => {
    const chartElement = document.querySelector(".chart-wrapper");
    if (chartElement) {
      html2canvas(chartElement).then((canvas) => {
        const link = document.createElement("a");
        link.download = "user-analytics.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`${
            !isDashboard
              ? "mt-[50px]"
              : "mt-[50px] dark:bg-[#111C43] shadow-sm pb-5 rounded-sm"
          }`}
        >
          <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
            <h1
              className={`${styles.title} ${
                isDashboard && "!text-[20px]"
              } px-5 !text-start`}
            >
              Users Analytics
            </h1>
            {!isDashboard && (
              <p className={`${styles.label} px-5`}>
                Last 12 months analytics data{" "}
              </p>
            )}
          </div>

          {/* Filters */}
          <div className="flex justify-between px-5 mb-5 dark:text-white text-black ">
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

          {/* Chart */}
          <div
            className={`w-full ${
              isDashboard ? "h-[30vh]" : "h-screen"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={!isDashboard ? "50%" : "100%"}
            >
              <AreaChart
                data={filteredData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
                className="chart-wrapper"
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAnalytics;
