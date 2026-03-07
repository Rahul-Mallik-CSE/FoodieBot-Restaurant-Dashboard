/** @format */
"use client";

import React from "react";
import type { TableItem, TableStatus } from "@/types/AllTypes";
import { cn } from "@/lib/utils";

interface TableCardProps {
  table: TableItem;
  onClick: (table: TableItem) => void;
}

const statusColors: Record<
  TableStatus,
  { bg: string; border: string; chair: string }
> = {
  active: {
    bg: "bg-button",
    border: "border-button",
    chair: "bg-button/60",
  },
  booked: {
    bg: "bg-custom-pink",
    border: "border-custom-pink",
    chair: "bg-custom-pink/60",
  },
  inactive: {
    bg: "bg-[#3a3750]",
    border: "border-[#3a3750]",
    chair: "bg-[#3a3750]/60",
  },
};

const TableCard: React.FC<TableCardProps> = ({ table, onClick }) => {
  const colors = statusColors[table.status];

  return (
    <button
      onClick={() => onClick(table)}
      className="flex flex-col items-center gap-1 group transition-transform hover:scale-105 cursor-pointer"
    >
      {/* Table with chairs representation */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        {/* Top chair */}
        <div
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 rounded-t-lg",
            colors.chair,
          )}
        />
        {/* Bottom chair */}
        <div
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-3 rounded-b-lg",
            colors.chair,
          )}
        />
        {/* Left chair */}
        <div
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 w-3 h-8 rounded-l-lg",
            colors.chair,
          )}
        />
        {/* Right chair */}
        <div
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-8 rounded-r-lg",
            colors.chair,
          )}
        />

        {/* Main table body */}
        <div
          className={cn(
            "absolute inset-4 rounded-xl border-2 flex flex-col items-center justify-center gap-0.5",
            colors.bg,
            colors.border,
          )}
        >
          <span className="text-white text-sm sm:text-base font-bold">
            {table.tableNumber}
          </span>
          <span className="text-white/70 text-[8px] sm:text-[9px] leading-tight">
            ID: {table.tableId}
          </span>
        </div>
      </div>
    </button>
  );
};

export default TableCard;
