/** @format */
"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { AIConversationData } from "@/types/AllTypes";

const data: AIConversationData[] = [
  { day: "Sat", thisWeek: 200, lastWeek: 150 },
  { day: "Sun", thisWeek: 400, lastWeek: 300 },
  { day: "Mon", thisWeek: 350, lastWeek: 450 },
  { day: "Tue", thisWeek: 500, lastWeek: 350 },
  { day: "Wed", thisWeek: 450, lastWeek: 400 },
  { day: "Thu", thisWeek: 600, lastWeek: 300 },
  { day: "Fri", thisWeek: 550, lastWeek: 500 },
];

const AIConversationsChart: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-4 sm:p-6 border border-[#2C2740] flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-primary text-sm sm:text-base font-semibold">
              AI Conversations
            </h3>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
              +0.74%
            </span>
          </div>
          <p className="text-primary text-2xl sm:text-3xl font-bold">1,864</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-button" />
            This week
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-custom-pink" />
            Last week
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full" style={{ minHeight: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorThisWeek" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8425fd" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8425fd" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLastWeek" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fc33a2" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#fc33a2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2C2740" />
            <XAxis
              dataKey="day"
              stroke="#8381a3"
              tick={{ fill: "#8381a3", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#8381a3"
              tick={{ fill: "#8381a3", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1d2b",
                border: "1px solid #2C2740",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="thisWeek"
              stroke="#8425fd"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorThisWeek)"
            />
            <Area
              type="monotone"
              dataKey="lastWeek"
              stroke="#fc33a2"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorLastWeek)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AIConversationsChart;
