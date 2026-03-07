/** @format */
"use client";

import React from "react";
import { Star } from "lucide-react";
import type { RatingDistributionItem } from "@/types/AllTypes";

interface RatingDistributionProps {
  data: RatingDistributionItem[];
}

const RatingDistribution: React.FC<RatingDistributionProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      {data.map((item) => (
        <div key={item.stars} className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 w-8 justify-end">
            <Star className="size-3 fill-amber-400 text-amber-400" />
            <span className="text-muted-foreground">{item.stars}</span>
          </div>
          <div className="flex-1 h-2.5 bg-card rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
            />
          </div>
          <span className="text-muted-foreground text-xs w-10 text-right">
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingDistribution;
