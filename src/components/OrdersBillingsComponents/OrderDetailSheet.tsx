/** @format */
"use client";

import React, { useState } from "react";
import { ArrowLeft, Loader2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { OrderDetail, OrderStatus } from "@/types/AllTypes";

interface OrderDetailSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: OrderDetail | null;
}

type SheetView = "details" | "loading" | "invoice";

const statusColors: Record<OrderStatus, string> = {
  Completed: "bg-green-500/20 text-green-400",
  Processing: "bg-blue-500/20 text-blue-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Cancelled: "bg-red-500/20 text-red-400",
};

const OrderDetailSheet: React.FC<OrderDetailSheetProps> = ({
  open,
  onOpenChange,
  order,
}) => {
  const [view, setView] = useState<SheetView>("details");

  if (!order) return null;

  const handleGenerateInvoice = () => {
    setView("loading");
    setTimeout(() => {
      setView("invoice");
    }, 2000);
  };

  const handleClose = () => {
    setView("details");
    onOpenChange(false);
  };

  const invoiceNumber = `IN ${265}`;

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:max-w-lg bg-root-bg border-l border-[#2C2740] overflow-y-auto"
      >
        {/* Order Details View */}
        {view === "details" && (
          <div className="flex flex-col h-full p-6">
            <SheetHeader className="p-0 mb-6">
              <button
                onClick={handleClose}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-2 cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <SheetTitle className="text-primary text-xl sm:text-2xl font-bold">
                Order Details View
              </SheetTitle>
              <SheetDescription className="text-muted-foreground text-sm">
                View full order information and generate invoice.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 space-y-4">
              {/* Order Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Order ID:
                  </span>
                  <span className="text-primary font-semibold text-sm">
                    {order.orderId}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Customer:
                  </span>
                  <span className="text-primary text-sm">{order.customer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Table:</span>
                  <span className="text-primary text-sm">{order.table}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Date:</span>
                  <span className="text-primary text-sm">{order.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Status:</span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="border-t border-[#2C2740] my-4" />

              {/* Order Items List */}
              <div>
                <h4 className="text-primary font-semibold text-sm mb-3">
                  Order Item List
                </h4>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-[#2C2740]/50"
                    >
                      <div className="flex-1">
                        <span className="text-primary text-sm">
                          {item.name}
                        </span>
                        <span className="text-muted-foreground text-xs ml-2">
                          x{item.quantity}
                        </span>
                      </div>
                      <span className="text-primary text-sm font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#2C2740] my-4" />

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Subtotal:
                  </span>
                  <span className="text-primary text-sm">
                    ${order.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Tax:</span>
                  <span className="text-primary text-sm">
                    ${order.tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span className="text-primary text-sm">Total:</span>
                  <span className="text-primary text-sm">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-card rounded-xl p-3 border border-[#2C2740] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Payment:
                  </span>
                  <span className="text-primary text-sm font-medium">
                    {order.payment}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Customer Name:
                  </span>
                  <span className="text-primary text-sm">{order.customer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    Contact:
                  </span>
                  <span className="text-primary text-sm">
                    {order.contactNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-1 h-11 bg-button" onClick={handleClose}>
                Complete Order
              </Button>
              <Button
                className="flex-1 h-11 bg-custom-pink hover:bg-custom-pink/90 border-custom-pink"
                onClick={handleGenerateInvoice}
              >
                Generate Invoice
              </Button>
            </div>
          </div>
        )}

        {/* Loading View */}
        {view === "loading" && (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-10 h-10 text-custom-pink animate-spin" />
          </div>
        )}

        {/* Invoice View */}
        {view === "invoice" && (
          <div className="flex flex-col h-full p-6">
            <SheetHeader className="p-0 mb-6">
              <button
                onClick={handleClose}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-2 cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <SheetTitle className="text-primary text-xl sm:text-2xl font-bold">
                Invoice Generated Successful
              </SheetTitle>
              <SheetDescription className="text-muted-foreground text-sm">
                View full order information and generate invoice.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto">
              {/* Invoice Card */}
              <div className="bg-white rounded-2xl p-5 text-gray-900">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Invoice #{invoiceNumber}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.payment}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Order ID:</span>
                    <p className="font-semibold">{order.orderId}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">Date:</span>
                    <p className="font-semibold">{order.date}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Customer Name:</span>
                    <p className="font-semibold">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">Contact Number:</span>
                    <p className="font-semibold">{order.contactNumber}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Restaurant Name:</span>
                    <p className="font-semibold">{order.restaurantName}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">Address:</span>
                    <p className="font-semibold">{order.address}</p>
                  </div>
                </div>

                {/* Items Table */}
                <div className="border rounded-lg overflow-hidden mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-2 font-semibold text-gray-700">
                          Dish Name
                        </th>
                        <th className="text-center p-2 font-semibold text-gray-700">
                          Quantity
                        </th>
                        <th className="text-right p-2 font-semibold text-gray-700">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-2 text-gray-700">
                            {item.name} - {item.quantity}x
                          </td>
                          <td className="p-2 text-center text-gray-700">
                            {item.quantity}
                          </td>
                          <td className="p-2 text-right font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t">
                        <td className="p-2 text-gray-500" colSpan={2}>
                          Tax
                        </td>
                        <td className="p-2 text-right text-gray-700">
                          ${order.tax.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between font-bold text-lg border-t pt-3">
                  <span>Total Bill</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-1 h-11 bg-custom-pink hover:bg-custom-pink/90 border-custom-pink gap-2">
                <Printer size={16} />
                Print Invoice
              </Button>
              <Button className="flex-1 h-11 bg-green-600 hover:bg-green-700 border-green-600">
                Paid
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default OrderDetailSheet;
