/** @format */
"use client";

import React from "react";
import StatCard from "@/components/DashboardComponents/StatCard";
import AIConversationsChart from "@/components/DashboardComponents/AIConversationsChart";
import TopSellingDish from "@/components/DashboardComponents/TopSellingDish";
import OrderStatusSummary from "@/components/DashboardComponents/OrderStatusSummary";
import RecentOrders from "@/components/DashboardComponents/RecentOrders";
import { ShoppingCart, Armchair, QrCode, Bot, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Today Order"
          value={123}
          icon={<ShoppingCart size={18} />}
          trendIcon={<TrendingUp size={28} />}
        />
        <StatCard
          title="Active Tables"
          value={123}
          icon={<Armchair size={18} />}
          trendIcon={<TrendingUp size={28} />}
        />
        <StatCard
          title="Total QR Scans"
          value={123}
          icon={<QrCode size={18} />}
          trendIcon={<TrendingUp size={28} />}
        />
        <StatCard
          title="Total AI Uses"
          value={123}
          icon={<Bot size={18} />}
          trendIcon={<TrendingUp size={28} />}
        />
      </div>

      {/* AI Conversations + Top Selling Dish */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <AIConversationsChart />
        </div>
        <div className="lg:col-span-2">
          <TopSellingDish />
        </div>
      </div>

      {/* Order Status Summary + Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <OrderStatusSummary />
        </div>
        <div className="lg:col-span-3">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
