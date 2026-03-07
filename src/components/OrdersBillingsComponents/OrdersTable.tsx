/** @format */
"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  OrderItem,
  OrderPaymentStatus,
  OrderStatus,
} from "@/types/AllTypes";

interface OrdersTableProps {
  data: OrderItem[];
  onView: (order: OrderItem) => void;
  itemsPerPage?: number;
}

const paymentColors: Record<OrderPaymentStatus, string> = {
  Paid: "bg-green-500/20 text-green-400",
  Unpaid: "bg-red-500/20 text-red-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
};

const statusColors: Record<OrderStatus, string> = {
  Completed: "bg-green-500/20 text-green-400",
  Processing: "bg-blue-500/20 text-blue-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Cancelled: "bg-red-500/20 text-red-400",
};

const OrdersTable: React.FC<OrdersTableProps> = ({
  data,
  onView,
  itemsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full space-y-4">
      <div className="rounded-xl overflow-hidden border border-[#2C2740]">
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-card hover:bg-card border-[#2C2740]">
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap">
                  Order ID
                </TableHead>
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap">
                  Customer
                </TableHead>
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap">
                  Date
                </TableHead>
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap">
                  Amount
                </TableHead>
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap">
                  Payment
                </TableHead>
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap">
                  Status
                </TableHead>
                <TableHead className="font-semibold text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((order, index) => (
                <TableRow
                  key={index}
                  className="border-[#2C2740]/50 hover:bg-card/50 transition-colors"
                >
                  <TableCell className="text-primary py-3 text-xs sm:text-sm font-medium whitespace-nowrap">
                    {order.orderId}
                  </TableCell>
                  <TableCell className="text-muted-foreground py-3 text-xs sm:text-sm whitespace-nowrap">
                    {order.customer}
                  </TableCell>
                  <TableCell className="text-muted-foreground py-3 text-xs sm:text-sm whitespace-nowrap">
                    {order.date}
                  </TableCell>
                  <TableCell className="text-primary py-3 text-xs sm:text-sm font-medium whitespace-nowrap">
                    {order.amount}
                  </TableCell>
                  <TableCell className="py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${paymentColors[order.payment]}`}
                    >
                      {order.payment}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-3">
                    <button
                      onClick={() => onView(order)}
                      className="p-1.5 hover:bg-[#2C2740] rounded-full transition-colors inline-flex items-center justify-center cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-xs sm:text-sm">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}
          </p>
          <Pagination>
            <PaginationContent className="flex-wrap gap-1">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={cn(
                    "text-xs sm:text-sm h-8 px-2 text-muted-foreground",
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer",
                  )}
                />
              </PaginationItem>

              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "..." ? (
                    <PaginationEllipsis className="h-8 text-muted-foreground" />
                  ) : (
                    <PaginationLink
                      onClick={() => handlePageChange(page as number)}
                      isActive={currentPage === page}
                      className={cn(
                        "cursor-pointer text-xs h-8 w-8 text-muted-foreground",
                        currentPage === page &&
                          "bg-button text-white hover:bg-button/90 hover:text-white border-button",
                      )}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={cn(
                    "text-xs sm:text-sm h-8 px-2 text-muted-foreground",
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer",
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
