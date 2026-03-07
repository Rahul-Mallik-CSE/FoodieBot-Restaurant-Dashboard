/** @format */
"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

interface ReviewStatsCardProps {
  title: string;
  value: string;
  growth: string;
  subtitle: string;
}

const ReviewStatsCard: React.FC<ReviewStatsCardProps> = ({
  title,
  value,
  growth,
  subtitle,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold text-foreground">{value}</h2>
        <div className="flex items-center gap-1 text-emerald-400 text-sm">
          <TrendingUp className="size-4" />
          <span>{growth}</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default ReviewStatsCard;
