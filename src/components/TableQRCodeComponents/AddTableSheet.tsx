/** @format */
"use client";

import React, { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { TableItem } from "@/types/AllTypes";

interface AddTableSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTableAdded: (table: TableItem) => void;
}

type SheetStep = "form" | "loading" | "success";

const generateTableId = () => {
  const hex = Math.random().toString(16).substring(2, 6).toUpperCase();
  return `TB-${hex.slice(0, 2)}-${hex.slice(2)}A`;
};

const AddTableSheet: React.FC<AddTableSheetProps> = ({
  open,
  onOpenChange,
  onTableAdded,
}) => {
  const [step, setStep] = useState<SheetStep>("form");
  const [tableNumber, setTableNumber] = useState("");
  const [description, setDescription] = useState("");
  const [generatedTable, setGeneratedTable] = useState<TableItem | null>(null);
  const [statusToggle, setStatusToggle] = useState(true);

  const handleGenerate = () => {
    if (!tableNumber.trim()) return;
    setStep("loading");

    setTimeout(() => {
      const newTable: TableItem = {
        id: crypto.randomUUID(),
        tableNumber: tableNumber.trim(),
        tableId: generateTableId(),
        description:
          description.trim() || "A refreshing table setup for guests.",
        status: "active",
      };
      setGeneratedTable(newTable);
      setStep("success");
    }, 2000);
  };

  const handleClose = () => {
    if (generatedTable && step === "success") {
      onTableAdded({
        ...generatedTable,
        status: statusToggle ? "active" : "inactive",
      });
    }
    setStep("form");
    setTableNumber("");
    setDescription("");
    setGeneratedTable(null);
    setStatusToggle(true);
    onOpenChange(false);
  };

  const handleDelete = () => {
    setStep("form");
    setTableNumber("");
    setDescription("");
    setGeneratedTable(null);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:max-w-lg bg-root-bg border-l border-[#2C2740] overflow-y-auto"
      >
        {step === "form" && (
          <div className="flex flex-col h-full p-6">
            <SheetHeader className="p-0 mb-6">
              <button
                onClick={handleClose}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-2 cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <SheetTitle className="text-primary text-xl sm:text-2xl font-bold">
                Table & QR Code
              </SheetTitle>
              <SheetDescription className="text-muted-foreground text-sm">
                Add a new physical table into the system.
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
                  placeholder="enter table name eg. T11, T02..."
                  className="bg-card border-[#2C2740] text-primary h-11"
                />
              </div>

              <div>
                <label className="text-primary text-sm font-medium mb-1.5 block">
                  Description
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Perfectly grilled chicken, seasoned with herbs and served with fresh vegetables."
                  className="bg-card border-[#2C2740] text-primary min-h-25"
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
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 h-11"
                onClick={handleGenerate}
                disabled={!tableNumber.trim()}
              >
                Generate QR Code
              </Button>
            </div>
          </div>
        )}

        {step === "loading" && (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-10 h-10 text-custom-pink animate-spin" />
          </div>
        )}

        {step === "success" && generatedTable && (
          <div className="flex flex-col h-full p-6">
            <SheetHeader className="p-0 mb-6">
              <SheetTitle className="text-primary text-lg sm:text-xl font-bold text-center">
                QR Code & Table ID Generated Successfully!
              </SheetTitle>
              <SheetDescription className="text-muted-foreground text-sm text-center">
                Your table has been assigned a unique QR code and ID. Place this
                QR on the table so guests can instantly start chatting with the
                AI.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-muted-foreground text-sm">
                    Table Number :{" "}
                  </span>
                  <span className="text-primary font-semibold">
                    {generatedTable.tableNumber}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">Status</span>
                  <Switch
                    checked={statusToggle}
                    onCheckedChange={setStatusToggle}
                    className="data-[state=checked]:bg-button"
                  />
                </div>
              </div>

              <div>
                <span className="text-muted-foreground text-sm">
                  Table ID :{" "}
                </span>
                <span className="text-primary font-semibold">
                  {generatedTable.tableId}
                </span>
              </div>

              <div>
                <h4 className="text-primary font-semibold text-sm mb-1">
                  Description
                </h4>
                <p className="text-muted-foreground text-sm">
                  {generatedTable.description}
                </p>
              </div>

              <div>
                <span className="text-muted-foreground text-sm">Status : </span>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    statusToggle
                      ? "bg-green-500/20 text-green-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {statusToggle ? "Active" : "Inactive"}
                </span>
              </div>

              {/* QR Code Display */}
              <div className="flex flex-col items-center gap-2 py-4">
                <p className="text-muted-foreground text-xs">
                  ID: {generatedTable.tableId}
                </p>
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center border-4 border-custom-pink p-2">
                  {/* QR Code placeholder using CSS grid pattern */}
                  <div className="w-full h-full bg-linear-to-br from-custom-pink/20 to-button/20 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-8 grid-rows-8 gap-0.5 w-32 h-32">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            i % 3 === 0 || i % 5 === 0
                              ? "bg-custom-pink"
                              : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-11 border-[#2C2740] text-primary"
                  onClick={handleClose}
                >
                  Edit Table
                </Button>
                <Button className="flex-1 h-11 bg-custom-pink hover:bg-custom-pink/90 border-custom-pink">
                  Download QR Code
                </Button>
              </div>
              <Button
                variant="destructive"
                className="w-full h-11"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default AddTableSheet;
