/** @format */
"use client";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import TableCard from "@/components/TableQRCodeComponents/TableCard";
import AddTableSheet from "@/components/TableQRCodeComponents/AddTableSheet";
import EditTableSheet from "@/components/TableQRCodeComponents/EditTableSheet";
import type { TableItem, TableStatus } from "@/types/AllTypes";

const initialTables: TableItem[] = Array.from({ length: 24 }, (_, i) => {
  const statuses: TableStatus[] = ["active", "booked", "inactive"];
  const hex = Math.random().toString(16).substring(2, 6).toUpperCase();
  return {
    id: `table-${i}`,
    tableNumber: "T01",
    tableId: `TB-${hex.slice(0, 2)}-${hex.slice(2)}A`,
    description: "A comfortable table for guests.",
    status: statuses[i % 3],
  };
});

const TableAndQRCodePage = () => {
  const [tables, setTables] = useState<TableItem[]>(initialTables);
  const [searchQuery, setSearchQuery] = useState("");
  const [addSheetOpen, setAddSheetOpen] = useState(false);
  const [editSheetOpen, setEditSheetOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<TableItem | null>(null);

  const filteredTables = tables.filter(
    (t) =>
      t.tableNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tableId.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleTableAdded = (newTable: TableItem) => {
    setTables((prev) => [...prev, newTable]);
  };

  const handleTableClick = (table: TableItem) => {
    setSelectedTable(table);
    setEditSheetOpen(true);
  };

  const handleTableSave = (updatedTable: TableItem) => {
    setTables((prev) =>
      prev.map((t) => (t.id === updatedTable.id ? updatedTable : t)),
    );
  };

  return (
    <div className="w-full p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-primary text-xl sm:text-2xl font-bold">
          Table & QR Code
        </h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-card border border-[#2C2740] rounded-lg pl-9 pr-3 py-2 text-sm text-primary placeholder:text-muted-foreground outline-none focus:border-button"
            />
          </div>
          <Button
            onClick={() => setAddSheetOpen(true)}
            className="h-9 gap-1.5 text-sm"
          >
            <Plus size={16} />
            Add Table
          </Button>
        </div>
      </div>

      {/* Table Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
        {filteredTables.map((table) => (
          <TableCard key={table.id} table={table} onClick={handleTableClick} />
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-8 ">
        <div className="border border-gray-600 bg-black flex items-center justify-center px-6 py-2 gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-button" />
            <span className="text-muted-foreground text-sm">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-custom-pink" />
            <span className="text-muted-foreground text-sm">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3a3750]" />
            <span className="text-muted-foreground text-sm">Inactive</span>
          </div>
        </div>
      </div>

      {/* Sheets */}
      <AddTableSheet
        open={addSheetOpen}
        onOpenChange={setAddSheetOpen}
        onTableAdded={handleTableAdded}
      />
      <EditTableSheet
        open={editSheetOpen}
        onOpenChange={setEditSheetOpen}
        table={selectedTable}
        onSave={handleTableSave}
      />
    </div>
  );
};

export default TableAndQRCodePage;
