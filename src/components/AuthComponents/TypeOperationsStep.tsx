/** @format */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TypeOperationsFormData } from "@/types/AllTypes";

interface TypeOperationsStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

const restaurantTypes = [
  "Dine-in Restaurant",
  "Café",
  "Fast Food",
  "Casual Dining",
];
const serviceTypes = ["Dine-in Only", "Dine-in & Takeaway"];
const customerTypes = ["Families", "Office Workers", "Students", "Mixed"];
const priceRanges = ["Budget", "Mid-range", "Premium"];

const TypeOperationsStep: React.FC<TypeOperationsStepProps> = ({
  onNext,
  onPrevious,
}) => {
  const [formData, setFormData] = useState<TypeOperationsFormData>({
    restaurantType: "",
    serviceType: "",
    primaryCustomerType: "",
    averagePriceRange: "",
  });

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex items-start justify-center p-8 lg:p-16">
        <div className="w-full max-w-2xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Restaurant Setup & Context
            </h1>
            <p className="text-sm text-muted-foreground">
              Contextual information to personalize your dashboard.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Restaurant Type
              </label>
              <Select
                value={formData.restaurantType}
                onValueChange={(val) =>
                  setFormData({ ...formData, restaurantType: val })
                }
              >
                <SelectTrigger className="w-full bg-card border-border/30 h-11">
                  <SelectValue placeholder="select restaurant type" />
                </SelectTrigger>
                <SelectContent>
                  {restaurantTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Service Type
              </label>
              <Select
                value={formData.serviceType}
                onValueChange={(val) =>
                  setFormData({ ...formData, serviceType: val })
                }
              >
                <SelectTrigger className="w-full bg-card border-border/30 h-11">
                  <SelectValue placeholder="select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Primary Customer Type
                </label>
                <Select
                  value={formData.primaryCustomerType}
                  onValueChange={(val) =>
                    setFormData({ ...formData, primaryCustomerType: val })
                  }
                >
                  <SelectTrigger className="w-full bg-card border-border/30 h-11">
                    <SelectValue placeholder="select customer type" />
                  </SelectTrigger>
                  <SelectContent>
                    {customerTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Average Price Range
                </label>
                <Select
                  value={formData.averagePriceRange}
                  onValueChange={(val) =>
                    setFormData({ ...formData, averagePriceRange: val })
                  }
                >
                  <SelectTrigger className="w-full bg-card border-border/30 h-11">
                    <SelectValue placeholder="select average price range.." />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 p-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="border-border/30 gap-2"
        >
          &larr; Previous
        </Button>
        <Button
          onClick={onNext}
          className="bg-button text-white border-button hover:bg-button/90"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default TypeOperationsStep;
