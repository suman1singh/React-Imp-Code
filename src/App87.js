import React from "react";
import "./App87.css";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

export default function App87() {
  const pdata = [
    {
      name: "Python",
      student: 13,
      fees: 10,
    },
    {
      name: "Java",
      student: 20,
      fees: 12,
    },
    {
      name: "C#",
      student: 25,
      fees: 15,
    },
    {
      name: "JS",
      student: 18,
      fees: 18,
    },
    {
      name: "Kotlin",
      student: 30,
      fees: 20,
    },
    {
      name: "C++",
      student: 35,
      fees: 25,
    },
    {
      name: "Ruby",
      student: 32,
      fees: 24,
    },
    {
      name: "Rails",
      student: 36,
      fees: 28,
    },
  ];
  return (
    <div>
      <h1 className="chart-heading">Line charts</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={800}
          height={800}
          margin={{ top: 1, right: 80, left: 20, bottom: 1 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            tickFormatter={(value) => value + " " + "Language"}
            dataKey="name"
            interval={"preserveStartEnd"}
          />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "green" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="yellow"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
