/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { styles } from "@/app/styles/style";
// import { useGetOrdersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
// import React, { useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import Loader from "../../Loader/Loader";

// type Props = {
//   isDashboard?: boolean;
// };

// export default function OrdersAnalytics({ isDashboard }: Props) {
//   const {data, isLoading } = useGetOrdersAnalyticsQuery({});

//   const analyticsData: any = [];

//   data &&
//     data.orders.last12Months.forEach((item: any) => {
//       analyticsData.push({ name: item.name, Count: item.count });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className={isDashboard ? "h-[30vh]" : "h-screen"}>
//           <div
//             className={isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]"}
//           >
//             <h1
//               className={`${styles.title} ${
//                 isDashboard && "!text-[20px]"
//               } px-5 !text-start`}
//             >
//               Orders Analytics
//             </h1>
//             {!isDashboard && (
//               <p className={`${styles.label} px-5`}>
//                 Last 12 months analytics data{" "}
//               </p>
//             )}
//           </div>
//           <div
//             className={`w-full ${
//               !isDashboard ? "h-[90%]" : "h-full"
//             } flex items-center justify-center`}
//           >
//             <ResponsiveContainer
//               width={isDashboard ? "100%" : "90%"}
//               height={isDashboard ? "100%" : "50%"}
//             >
//               <LineChart
//                 width={500}
//                 height={300}
//                 data={analyticsData}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 {!isDashboard && <Legend />}
//                 <Line type="monotone" dataKey="Count" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { styles } from "@/app/styles/style";
import { useGetOrdersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../Loader/Loader";
import html2canvas from "html2canvas";

type Props = {
  isDashboard?: boolean;
};

export default function OrdersAnalytics({ isDashboard }: Props) {
  const { data, isLoading } = useGetOrdersAnalyticsQuery({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const analyticsData: any = [];

  data &&
    data.orders.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.name, Count: item.count });
    });

  const filteredData =
    startDate && endDate
      ? analyticsData.filter((item: any) => {
          const itemDate = new Date(`${item.name} 01`);
          return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
        })
      : analyticsData;

      const downloadChart = () => {
        const chartElement = document.querySelector(".chart-wrapper") as HTMLElement;
        if (chartElement) {
          html2canvas(chartElement).then((canvas) => {
            const link = document.createElement("a");
            link.download = "orders-analytics.png";
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
        <div className={isDashboard ? "h-[30vh]" : "h-screen"}>
          <div
            className={isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]"}
          >
            <h1
              className={`${styles.title} ${
                isDashboard && "!text-[20px]"
              } px-5 !text-start`}
            >
              Orders Analytics
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

          {/* Line Chart */}
          <div
            className={`w-full ${
              !isDashboard ? "h-[90%]" : "h-full"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={isDashboard ? "100%" : "50%"}
            >
              <LineChart
                className="chart-wrapper"
                width={500}
                height={300}
                data={filteredData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {!isDashboard && <Legend />}
                <Line type="monotone" dataKey="Count" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
