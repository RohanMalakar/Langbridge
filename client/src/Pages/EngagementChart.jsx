import { useState, useMemo, useEffect } from "react";
import json from "../utills/social-media-data.json";

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

const EngagementChart = () => {
  const [data, setData] = useState([]);
  const [filterRange, setFilterRange] = useState("last7");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Process raw data into chart-friendly format
  const processedData = useMemo(() => {
    const groupedData = {};

    data.forEach((post) => {
      const date = new Date(post.timestamps).toISOString().slice(0, 10); // YYYY-MM-DD

      if (!groupedData[date]) {
        groupedData[date] = { reels: 0, carousel: 0, static: 0 };
      }

      if (post.post_type === "reels") groupedData[date].reels += post.reach;
      else if (post.post_type === "carousel") groupedData[date].carousel += post.reach;
      else groupedData[date].static += post.reach;
    });

    return Object.entries(groupedData).map(([date, values]) => ({
      date,
      ...values,
    }));
  }, [data]);

  // Filtered data based on selected date range
  const filteredData = useMemo(() => {
    const today = new Date();
    let filtered;

    if (filterRange === "last7") {
      const lastWeek = new Date();
      lastWeek.setDate(today.getDate() - 7);
      filtered = processedData.filter((item) => new Date(item.date) >= lastWeek);
    } else if (filterRange === "last30") {
      const lastMonth = new Date();
      lastMonth.setDate(today.getDate() - 30);
      filtered = processedData.filter((item) => new Date(item.date) >= lastMonth);
    } else {
      filtered = processedData; // Show all data
    }

    return filtered;
  }, [processedData, filterRange]);

  return (
    <div className="bg-white dark:bg-dark-100 p-6 rounded-xl border border-gray-100 dark:border-dark-300 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold dark:text-white">Engagement Overview</h2>
        <select
          className="text-sm border rounded-lg px-3 py-2 bg-gray-50 dark:bg-dark-300 dark:text-gray-200 dark:border-dark-400"
          value={filterRange}
          onChange={(e) => setFilterRange(e.target.value)}
        >
          <option value="last7">Last 7 days</option>
          <option value="last30">Last 30 days</option>
          <option value="all">All Time</option>
        </select>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              stroke="#6B7280"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--tw-bg-opacity-1, white)",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                color: "var(--tw-text-opacity-1, black)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: "12px",
              }}
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="reels"
              stroke="#06B6D4"
              strokeWidth={2}
              dot={{ fill: "#06B6D4" }}
              name="Reels"
            />
            <Line
              type="monotone"
              dataKey="static"
              stroke="#F97316"
              strokeWidth={2}
              dot={{ fill: "#F97316" }}
              name="Static"
            />
            <Line
              type="monotone"
              dataKey="carousel"
              stroke="#EAB308"
              strokeWidth={2}
              dot={{ fill: "#EAB308" }}
              name="Carousel"
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          The chart shows the reach of different post types (Reels, Carousel, Static) over time, highlighting performance trends.
        </p>
      </div>
    </div>
  );
};

export default EngagementChart;
