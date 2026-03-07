/** @format */
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import type { RestaurantDetails } from "@/types/AllTypes";

const RestaurantDetailsTab = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<RestaurantDetails>({
    restaurantName: "Red Lobster Seafood Restaurants",
    description:
      "A welcoming restaurant serving fresh, carefully prepared dishes made with quality ingredients and a focus on great taste.",
    address:
      "245 Sunset Avenue, Downtown, Los Angeles, CA 90028, United States",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Restaurant Details
          </h2>
          <p className="text-sm text-muted-foreground">
            This information helps us identify and contact you when needed.
          </p>
        </div>
        <Button
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="bg-gradient-to-r from-button to-custom-pink text-white border-0"
        >
          <Pencil className="size-4 mr-1" />
          Edit Details
        </Button>
      </div>

      {/* Form */}
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Restaurant Name
          </label>
          <Input
            value={formData.restaurantName}
            onChange={(e) =>
              setFormData({ ...formData, restaurantName: e.target.value })
            }
            disabled={!isEditing}
            className="bg-card border-border/30 h-11"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Description
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            disabled={!isEditing}
            className="bg-card border-border/30 min-h-24"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Restaurant Address
          </label>
          <Input
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            disabled={!isEditing}
            className="bg-card border-border/30 h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsTab;
