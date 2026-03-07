/** @format */
"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrdersTable from "@/components/OrdersBillingsComponents/OrdersTable";
import OrderDetailSheet from "@/components/OrdersBillingsComponents/OrderDetailSheet";
import type {
  OrderItem,
  OrderDetail,
  OrderDishItem,
  OrderPaymentStatus,
  OrderStatus,
} from "@/types/AllTypes";

const sampleOrders: OrderItem[] = Array.from({ length: 25 }, (_, i) => {
  const payments: OrderPaymentStatus[] = ["Paid", "Unpaid", "Pending"];
  const statuses: OrderStatus[] = [
    "Completed",
    "Processing",
    "Pending",
    "Cancelled",
  ];
  return {
    orderId: `#CH ${545 + i}`,
    customer: "Rahim Hossain",
    date: "26 Jan, 2026",
    amount: "$69.50",
    payment: payments[i % 3],
    status: statuses[i % 4],
    table: `T${String(i + 1).padStart(2, "0")}`,
  };
});

const sampleItems: OrderDishItem[] = [
  { name: "Chicken burger - 2x", quantity: 12, price: 69.5 },
  { name: "Chicken burger - 2x", quantity: 12, price: 69.5 },
  { name: "Chicken burger - 2x", quantity: 12, price: 69.5 },
  { name: "Chicken burger - 2x", quantity: 12, price: 69.5 },
];

const OrdersAndBilingsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [detailSheetOpen, setDetailSheetOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderDetail | null>(null);

  const filteredOrders = sampleOrders.filter(
    (o) =>
      o.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleView = (order: OrderItem) => {
    const detail: OrderDetail = {
      orderId: order.orderId,
      customer: order.customer,
      table: order.table,
      date: order.date,
      time: "12:30 PM",
      items: sampleItems,
      subtotal: 119.0,
      tax: 0.0,
      total: 119.0,
      payment: order.payment,
      status: order.status,
      contactNumber: "+62 031 031",
      restaurantName: "Mealz Restaurant",
      address: "New York, NY 10014,",
    };
    setSelectedOrder(detail);
    setDetailSheetOpen(true);
  };

  return (
    <div className="w-full p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-primary text-xl sm:text-2xl font-bold">
          Orders & Billings
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
            variant="outline"
            className="h-9 gap-1.5 text-sm border-[#2C2740]"
          >
            <SlidersHorizontal size={16} />
            Filter
          </Button>
        </div>
      </div>

      {/* Orders Table */}
      <OrdersTable data={filteredOrders} onView={handleView} />

      {/* Order Detail Sheet */}
      <OrderDetailSheet
        open={detailSheetOpen}
        onOpenChange={(open) => {
          setDetailSheetOpen(open);
          if (!open) setSelectedOrder(null);
        }}
        order={selectedOrder}
      />
    </div>
  );
};

export default OrdersAndBilingsPage;
