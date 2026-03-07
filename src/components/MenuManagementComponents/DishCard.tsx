/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DishItem } from "@/types/AllTypes";

interface DishCardProps {
  dish: DishItem;
  onEdit: (dish: DishItem) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onEdit }) => {
  return (
    <div className="bg-card rounded-2xl border border-[#2C2740] overflow-hidden flex flex-col">
      {/* Dish Image */}
      <div className="relative w-full aspect-square bg-[#13111c] flex items-center justify-center p-4">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden relative">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="144px"
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2">
        <h4 className="text-primary text-sm font-semibold truncate">
          {dish.name}
        </h4>
        <p className="text-muted-foreground text-xs">
          ${dish.price.toFixed(2)}
        </p>
        <Button
          onClick={() => onEdit(dish)}
          className="w-full h-8 text-xs gap-1.5"
        >
          <Pencil size={12} />
          Edit
        </Button>
      </div>
    </div>
  );
};

export default DishCard;
