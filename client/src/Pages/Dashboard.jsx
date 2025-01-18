import React, { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../utills/axiosInstance";
import EngagementOverview from "./EngagementChart.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { LineChart, Line, CartesianGrid } from "recharts";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const barData = [
  { name: "Total Likes", value: 69 },
  { name: "Comments", value: 10 },
  { name: "Saves", value: 29 },
  { name: "Shares", value: 17 },
];

const lineData = [
  { day: "Mon", engagement: 80 },
  { day: "Tue", engagement: 60 },
  { day: "Wed", engagement: 50 },
  { day: "Thu", engagement: 70 },
  { day: "Fri", engagement: 100 },
  { day: "Sat", engagement: 40 },
  { day: "Sun", engagement: 30 },
];

const pieData = [
  { name: "Reels", value: 300 },
  { name: "Carousels", value: 200 },
  { name: "Images", value: 150 },
  { name: "Shorts", value: 500 },
];

const radarData = [
  { metric: "Likes", Reels: 120, Carousels: 90, Images: 70, Shorts: 300 },
  { metric: "Comments", Reels: 50, Carousels: 30, Images: 40, Shorts: 120 },
  { metric: "Saves", Reels: 30, Carousels: 20, Images: 15, Shorts: 90 },
  { metric: "Shares", Reels: 60, Carousels: 40, Images: 30, Shorts: 100 },
];

const audienceData = [
  { name: "Children", value: 25 },
  { name: "Men", value: 35 },
  { name: "Women", value: 30 },
  { name: "Older People", value: 10 },
];

const COLORS = ["#8B5CF6", "#A78BFA", "#C4B5FD", "#D8B4FE"];

const keys = [
  "post_id",
  "user_id",
  "post_type",
  "likes",
  "comments",
  "share",
  "reach",
  "timestamp",
  "content_length"
];


const Dashboard = () => {
  
  const [posts, setPosts] = useState([]);
  async function getAllPosts() {
    try {
      const response = await axiosInstance.get("/posts");
      
      // Access the `data` field which contains the array of posts
      const posts = response.data.data;
  
      if (posts && Array.isArray(posts)) {
        posts.forEach((post) => {
          const parsedData = post.content
          .split("\n").map(line => {
            const values = line.split(","); // Split the line by commas
            return keys.reduce((obj, key, index) => {
              obj[key] = isNaN(values[index]) || key === "post_type" || key === "timestamp"
                ? values[index]
                : Number(values[index]); // Convert numeric fields to numbers
              return obj;
            }, {});
          });
          setPosts((prevPosts) => [...prevPosts, ...parsedData]); 
        });
      } else {
        console.log("No posts available.");
      }
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  }
  
  useEffect(() => {
    getAllPosts();
  }, []);
  

  return (
    <div className="min-h-screen bg-black text-purple-400 lg:px-28 lg:py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Engagement Dashboard</h1>

      {/* Charts Grid */}
      <div className="grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-gray-900 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Engagement Rate Over Time</h2>
          <p className="text-purple-300 mb-3">Current: 5.43%</p>
          <LineChart width={400} height={250} data={lineData}>
            <CartesianGrid stroke="#4B5563" />
            <XAxis dataKey="day" stroke="#A78BFA" />
            <YAxis stroke="#A78BFA" />
            <Tooltip contentStyle={{ backgroundColor: "#1F2937", color: "#A78BFA" }} />
            <Line type="monotone" dataKey="engagement" stroke="#8B5CF6" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-900 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Engagement Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#A78BFA" />
              <YAxis stroke="#A78BFA" />
              <Tooltip contentStyle={{ backgroundColor: "#1F2937", color: "#A78BFA" }} />
              <Bar dataKey="value" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-900 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Post Type Proportions</h2>
          <PieChart width={400} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8B5CF6"
              dataKey="value"
              label={(entry) => entry.name}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Radar Chart */}
        <div className="bg-gray-900 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Engagement Comparison</h2>
          <RadarChart outerRadius={120} width={400} height={250} data={radarData}>
            <PolarGrid stroke="#4B5563" />
            <PolarAngleAxis dataKey="metric" stroke="#A78BFA" />
            <PolarRadiusAxis stroke="#A78BFA" />
            <Radar name="Reels" dataKey="Reels" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
            <Radar name="Carousels" dataKey="Carousels" stroke="#A78BFA" fill="#A78BFA" fillOpacity={0.6} />
            <Radar name="Images" dataKey="Images" stroke="#C4B5FD" fill="#C4B5FD" fillOpacity={0.6} />
            <Radar name="Shorts" dataKey="Shorts" stroke="#D8B4FE" fill="#D8B4FE" fillOpacity={0.6} />
          </RadarChart>
        </div>

        <div className="bg-gray-900 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3 text-purple-400">
            Audience Distribution
          </h2>
          <PieChart width={400} height={250}>
            <Pie
              data={audienceData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8B5CF6"
              paddingAngle={5}
              dataKey="value"
              label={(entry) => entry.name}
            >
              {audienceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#1F2937", color: "#A78BFA" }} />
          </PieChart>
        </div>
        <div>
          hello
        </div>
        <EngagementOverview/>
      </div>
    </div>
  );
};

export default Dashboard;





