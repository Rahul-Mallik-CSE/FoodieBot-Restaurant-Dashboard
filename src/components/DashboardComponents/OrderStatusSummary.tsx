/** @format */
"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { OrderStatusData } from "@/types/AllTypes";

const data: OrderStatusData[] = [
  { name: "Pending", value: 2068, color: "#f59e0b" },
  { name: "Proceeding", value: 3568, color: "#fc33a2" },
  { name: "Delivered", value: 2568, color: "#8425fd" },
  { name: "Paid", value: 2568, color: "#ef4444" },
];

const OrderStatusSummary: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-4 sm:p-6 border border-[#2C2740] flex flex-col h-full">
      <h3 className="text-primary text-sm sm:text-base font-semibold mb-4">
        Order Status Summary
      </h3>

      <div
        className="flex-1 flex items-center justify-center relative"
        style={{ minHeight: 220 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={88}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              cornerRadius="50%"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-2">
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
