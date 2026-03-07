/** @format */
"use client";

import React from "react";
import Image from "next/image";
import type { TopSellingDishItem } from "@/types/AllTypes";

const dishes: TopSellingDishItem[] = [
  { id: "1", name: "Chicken Burger", image: "/dishes/dish1.png", count: 21 },
  {
    id: "2",
    name: "Grilled Vegetable Plate",
    image: "/dishes/dish2.png",
    count: 18,
  },
  { id: "3", name: "Margherita Pizza", image: "/dishes/dish3.png", count: 14 },
  { id: "4", name: "French Fries", image: "/dishes/dish4.png", count: 240 },
  { id: "5", name: "Chicken Wings", image: "/dishes/dish5.png", count: 8 },
];

const rankColors = [
  "bg-custom-pink",
  "bg-button",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
];

const TopSellingDish: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-4 sm:p-6 border border-[#2C2740] flex flex-col h-full">
      <h3 className="text-primary text-sm sm:text-base font-semibold mb-4">
        Top Selling Dish
      </h3>
      <div className="flex flex-col gap-3 flex-1">
        {dishes.map((dish, index) => (
          <div
            key={dish.id}
            className="flex items-center gap-3 bg-[#13111c] rounded-xl p-2 hover:bg-[#1a1828] transition-colors"
          >
            <div
              className={`w-1 h-8 rounded-full ${rankColors[index] || "bg-muted"}`}
            />
            <div className="w-9 h-9 rounded-full overflow-hidden bg-[#2C2740] shrink-0 relative">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="text-primary text-xs sm:text-sm font-medium flex-1 truncate">
              {dish.name}
            </span>
            <span className="text-muted-foreground text-xs sm:text-sm font-semibold">
              {dish.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingDish;
