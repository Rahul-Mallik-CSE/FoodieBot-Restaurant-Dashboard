/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { DishItem } from "@/types/AllTypes";

interface DishDetailSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dish: DishItem | null;
}

const DishDetailSheet: React.FC<DishDetailSheetProps> = ({
  open,
  onOpenChange,
  dish,
}) => {
  if (!dish) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:max-w-lg bg-root-bg border-l border-[#2C2740] overflow-y-auto"
      >
        <div className="flex flex-col h-full p-6">
          <SheetHeader className="p-0 mb-6">
            <button
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-2 cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <SheetTitle className="text-primary text-xl sm:text-2xl font-bold">
              Dish Details
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 space-y-6">
            {/* Dish Image */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-40 rounded-full overflow-hidden relative bg-[#2C2740]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="text-center">
                <h3 className="text-primary text-lg font-bold">{dish.name}</h3>
                <p className="text-custom-pink font-semibold">
                  ${dish.price.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <DetailRow label="Category" value={dish.category} />
              <DetailRow label="Size Option" value={dish.sizeOption || "N/A"} />
              <DetailRow
                label="Ingredients"
                value={dish.ingredients || "N/A"}
              />
              <DetailRow label="Calories" value={dish.calories || "N/A"} />
              <DetailRow
                label="Allergen Info"
                value={dish.allergenInfo || "N/A"}
              />
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full h-11 border-[#2C2740] text-primary"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-button text-sm font-medium mb-0.5">{label}</p>
    <p className="text-muted-foreground text-sm">{value}</p>
  </div>
);

export default DishDetailSheet;
