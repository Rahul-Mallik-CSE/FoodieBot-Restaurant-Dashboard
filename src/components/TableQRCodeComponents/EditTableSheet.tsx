/** @format */
"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { TableItem } from "@/types/AllTypes";

interface EditTableSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  table: TableItem | null;
  onSave: (table: TableItem) => void;
}

const EditTableSheet: React.FC<EditTableSheetProps> = ({
  open,
  onOpenChange,
  table,
  onSave,
}) => {
  const [tableNumber, setTableNumber] = useState(table?.tableNumber || "");

  const [prevTable, setPrevTable] = useState(table);
  if (table !== prevTable) {
    setPrevTable(table);
    setTableNumber(table?.tableNumber || "");
  }

  const handleSave = () => {
    if (!table || !tableNumber.trim()) return;
    onSave({ ...table, tableNumber: tableNumber.trim() });
    onOpenChange(false);
  };

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
              Table & QR Code
            </SheetTitle>
            <SheetDescription className="text-muted-foreground text-sm">
              Edit physical table into the system.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 space-y-5">
            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Table Number
              </label>
              <Input
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <ul className="text-muted-foreground text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li>One QR code is generated for each table</li>
              <li>A unique Table ID is automatically generated</li>
              <li>Each QR code is permanently linked to its Table ID</li>
              <li>A table can have only one active QR code</li>
              <li>QR codes cannot be reused or shared between tables</li>
              <li>
                Once generated, the QR code and Table ID cannot be reassigned
              </li>
            </ul>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              className="flex-1 h-11 border-[#2C2740] text-primary"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 h-11"
              onClick={handleSave}
              disabled={!tableNumber.trim()}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditTableSheet;
