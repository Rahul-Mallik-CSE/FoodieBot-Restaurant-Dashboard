/** @format */
"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trendIcon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trendIcon,
}) => {
  return (
    <div className="bg-card rounded-2xl p-4 flex flex-col gap-3 border border-[#2C2740] min-w-0">
      <div className="flex items-center gap-2">
        <div className="text-custom-pink">{icon}</div>
        <span className="text-muted-foreground text-xs sm:text-sm truncate">
          {title}
        </span>
      </div>
      <div className="flex items-center justify-between">
        {trendIcon && <div className="text-custom-pink">{trendIcon}</div>}
        <span className="text-primary text-2xl sm:text-3xl font-bold ml-auto">
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
