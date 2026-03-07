/** @format */
"use client";

import React from "react";
import type { RecentOrderItem } from "@/types/AllTypes";

const recentOrders: RecentOrderItem[] = [
  {
    orderId: "#CH 565",
    customer: "Rahim Hossain",
    date: "26 Jan, 2026",
    amount: "$69.50",
    payment: "Paid",
  },
  {
    orderId: "#CH 566",
    customer: "Rahim Hossain",
    date: "26 Jan, 2026",
    amount: "$69.50",
    payment: "Unpaid",
  },
  {
    orderId: "#CH 567",
    customer: "Rahim Hossain",
    date: "26 Jan, 2026",
    amount: "$69.50",
    payment: "Paid",
  },
  {
    orderId: "#CH 568",
    customer: "Rahim Hossain",
    date: "26 Jan, 2026",
    amount: "$69.50",
    payment: "Pending",
  },
  {
    orderId: "#CH 569",
    customer: "Rahim Hossain",
    date: "26 Jan, 2026",
    amount: "$69.50",
    payment: "Paid",
  },
];

const paymentColors: Record<string, string> = {
  Paid: "bg-green-500/20 text-green-400",
  Unpaid: "bg-red-500/20 text-red-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
};

const RecentOrders: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-4 sm:p-6 border border-[#2C2740] flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-primary text-sm sm:text-base font-semibold">
          Recent Orders
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#13111c] border border-[#2C2740] rounded-lg px-3 py-1.5 text-xs text-primary placeholder:text-muted-foreground outline-none focus:border-button w-24 sm:w-32"
          />
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="text-muted-foreground border-b border-[#2C2740]">
              <th className="text-left py-2 font-medium">Order ID</th>
              <th className="text-left py-2 font-medium">Customer</th>
              <th className="text-left py-2 font-medium">Date</th>
              <th className="text-left py-2 font-medium">Amount</th>
              <th className="text-left py-2 font-medium">Payment</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-[#2C2740]/50 hover:bg-[#1a1828] transition-colors"
              >
                <td className="py-2.5 text-primary font-medium">
                  {order.orderId}
                </td>
                <td className="py-2.5 text-muted-foreground">
                  {order.customer}
                </td>
                <td className="py-2.5 text-muted-foreground">{order.date}</td>
                <td className="py-2.5 text-primary font-medium">
                  {order.amount}
                </td>
                <td className="py-2.5">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${paymentColors[order.payment]}`}
                  >
                    {order.payment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
