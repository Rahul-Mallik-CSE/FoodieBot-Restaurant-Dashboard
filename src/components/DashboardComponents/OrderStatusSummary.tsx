/** @format */
"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { OrderStatusData } from "@/types/AllTypes";

const data: OrderStatusData[] = [
  { name: "Pending", value: 2568, color: "#f59e0b" },
  { name: "Processing", value: 3568, color: "#fc33a2" },
  { name: "Delivered", value: 3568, color: "#8425fd" },
  { name: "Paid", value: 2568, color: "#3b82f6" },
];

const OrderStatusSummary: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-4 sm:p-6 border border-[#2C2740] flex flex-col h-full">
      <h3 className="text-primary text-sm sm:text-base font-semibold mb-4">
        Order Status Summary
      </h3>

      <div
        className="flex-1 flex items-center justify-center relative"
        style={{ minHeight: 200 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center labels on chart */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Top */}
          <span
            className="absolute text-xs font-bold text-blue-400"
            style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
          >
            {data[3].value.toLocaleString()}
          </span>
          {/* Right */}
          <span
            className="absolute text-xs font-bold text-button"
            style={{ right: "2%", top: "50%", transform: "translateY(-50%)" }}
          >
            {data[2].value.toLocaleString()}
          </span>
          {/* Bottom */}
          <span
            className="absolute text-xs font-bold text-custom-pink"
            style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
          >
            {data[1].value.toLocaleString()}
          </span>
          {/* Left */}
          <span
            className="absolute text-xs font-bold text-yellow-400"
            style={{ left: "2%", top: "50%", transform: "translateY(-50%)" }}
          >
            {data[0].value.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-muted-foreground text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusSummary;
