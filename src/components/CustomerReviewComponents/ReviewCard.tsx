/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import type { ReviewItem } from "@/types/AllTypes";

interface ReviewCardProps {
  review: ReviewItem;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-card border border-border/30 rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={review.avatar}
            alt={review.name}
            width={40}
            height={40}
            className="rounded-full object-cover size-10"
          />
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {review.name}
            </h4>
            <p className="text-xs text-muted-foreground">
              {review.date} · {review.service}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-amber-400/10 rounded-full px-3 py-1">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-foreground">
            {review.rating}/5
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {review.review}
      </p>
    </div>
  );
};

export default ReviewCard;
