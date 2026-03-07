/** @format */
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { BillingHistoryItem } from "@/types/AllTypes";

const billingData: BillingHistoryItem[] = [
  { invoiceId: "#CH 565", date: "26 Jan 2026", plan: "Starter", price: "$265" },
  { invoiceId: "#CH 565", date: "26 Jan 2026", plan: "Starter", price: "$265" },
  { invoiceId: "#CH 565", date: "26 Jan 2026", plan: "Starter", price: "$265" },
  { invoiceId: "#CH 565", date: "26 Jan 2026", plan: "Starter", price: "$265" },
  { invoiceId: "#CH 565", date: "26 Jan 2026", plan: "Starter", price: "$265" },
];

const BillingTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Billing History</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-border/30 pl-9 w-56 h-10"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-border/30 text-foreground h-10 gap-2"
          >
            <SlidersHorizontal className="size-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-border/30 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 bg-card">
              <th className="p-4 text-left w-10">
                <Checkbox className="border-muted-foreground" />
              </th>
              <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                Invoice Id
              </th>
              <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                Date
              </th>
              <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                Plan
              </th>
              <th className="p-4 text-center text-sm font-medium text-muted-foreground">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {billingData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-border/30 last:border-0 hover:bg-card/50 transition-colors"
              >
                <td className="p-4">
                  <Checkbox className="border-muted-foreground" />
                </td>
                <td className="p-4 text-sm text-foreground">
                  {item.invoiceId}
                </td>
                <td className="p-4 text-sm text-center text-muted-foreground">
                  {item.date}
                </td>
                <td className="p-4 text-sm text-center text-muted-foreground">
                  {item.plan}
                </td>
                <td className="p-4 text-sm text-center text-foreground">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingTab;
