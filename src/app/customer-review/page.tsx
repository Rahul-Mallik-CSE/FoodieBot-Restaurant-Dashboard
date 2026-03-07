/** @format */
"use client";

import React, { useState } from "react";
import ReviewStatsCard from "@/components/CustomerReviewComponents/ReviewStatsCard";
import RatingDistribution from "@/components/CustomerReviewComponents/RatingDistribution";
import ReviewCard from "@/components/CustomerReviewComponents/ReviewCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ReviewItem, RatingDistributionItem } from "@/types/AllTypes";

const ratingDistribution: RatingDistributionItem[] = [
  { stars: 5, count: "2.3k", percentage: 85, color: "#22c55e" },
  { stars: 4, count: "1.5k", percentage: 65, color: "#3b82f6" },
  { stars: 3, count: "1.5k", percentage: 55, color: "#f97316" },
  { stars: 2, count: "1.5k", percentage: 40, color: "#38bdf8" },
  { stars: 1, count: "1.5k", percentage: 30, color: "#ef4444" },
];

const reviews: ReviewItem[] = [
  {
    id: "1",
    name: "Annette Black",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "2 days ago",
    service: "Excellences Service!",
    rating: 4.9,
    review:
      "The quality of work was exceptional, and they left the site clean and tidy. I was impressed by their attention to detail and commitment to safety standards. Highly recommend their services!",
  },
  {
    id: "2",
    name: "Cameron Williamson",
    avatar: "https://i.pravatar.cc/150?img=2",
    date: "2 days ago",
    service: "Excellences Service!",
    rating: 4.9,
    review:
      "The quality of work was exceptional, and they left the site clean and tidy. I was impressed by their attention to detail and commitment to safety standards. Highly recommend their services!",
  },
  {
    id: "3",
    name: "Ronald Richards",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "2 days ago",
    service: "Excellences Service!",
    rating: 4.9,
    review:
      "The quality of work was exceptional, and they left the site clean and tidy. I was impressed by their attention to detail and commitment to safety standards. Highly recommend their services!",
  },
  {
    id: "4",
    name: "Jane Cooper",
    avatar: "https://i.pravatar.cc/150?img=4",
    date: "2 days ago",
    service: "Excellences Service!",
    rating: 4.9,
    review:
      "The quality of work was exceptional, and they left the site clean and tidy. I was impressed by their attention to detail and commitment to safety standards. Highly recommend their services!",
  },
];

const CustomerAndReviewPage = () => {
  const [filter, setFilter] = useState("this-month");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Customer Review</h1>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40 bg-card border-border/30">
            <SelectValue placeholder="This Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-card border border-border/30 rounded-xl p-6">
        <ReviewStatsCard
          title="Total Review"
          value="10.26k"
          growth="+0.74%"
          subtitle="Growth in reviews on this month"
        />
        <div className="border-l border-border/30 pl-6">
          <ReviewStatsCard
            title="Average Rating"
            value="4.0"
            growth="+0.74%"
            subtitle="Average rating on this month"
          />
        </div>
        <div className="border-l border-border/30 pl-6">
          <RatingDistribution data={ratingDistribution} />
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerAndReviewPage;
