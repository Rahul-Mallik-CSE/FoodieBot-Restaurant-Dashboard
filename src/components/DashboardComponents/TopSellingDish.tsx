/** @format */
"use client";

import React from "react";
import Image from "next/image";
import type { TopSellingDishItem } from "@/types/AllTypes";

const dishes: TopSellingDishItem[] = [
  { id: "1", name: "Chicken Burger", image: "/food.png", count: 21 },
  {
    id: "2",
    name: "Grilled Vegetable Plate",
    image: "/food.png",
    count: 126,
  },
  { id: "3", name: "Margherita Pizza", image: "/food.png", count: 95 },
  { id: "4", name: "French Fries", image: "/food.png", count: 265 },
  { id: "5", name: "Chicken Wings", image: "/food.png", count: 365 },
];

const TopSellingDish: React.FC = () => {
  const maxCount = Math.max(...dishes.map((d) => d.count));

  return (
    <div className="bg-card rounded-2xl p-4 sm:p-6 border border-[#2C2740] flex flex-col h-full">
      <h3 className="text-primary text-sm sm:text-base font-semibold mb-4">
        Top Selling Dish
      </h3>
      <div className="flex flex-col gap-3 flex-1">
        {dishes.map((dish) => {
          const barWidth = Math.round((dish.count / maxCount) * 100);
          return (
            <div
              key={dish.id}
              className="flex items-center gap-3 bg-[#13111c] rounded-xl p-3 hover:bg-[#1a1828] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#2C2740] shrink-0 relative">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0 gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-primary text-sm sm:text-base font-semibold truncate">
                    {dish.name}
                  </span>
                  <span className="text-primary text-xs sm:text-sm font-bold shrink-0">
                    {dish.count} <span className="text-[#fc33a2]">Sold</span>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#2C2740] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#fc33a2]"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellingDish;
