/** @format */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { BillingCurrencyFormData } from "@/types/AllTypes";

interface BillingCurrencyStepProps {
  onPrevious: () => void;
  onComplete: () => void;
}

const currencies = ["USD", "EUR", "GBP", "BDT", "INR", "AUD", "CAD"];
const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Bengali",
  "Hindi",
  "Arabic",
];

const BillingCurrencyStep: React.FC<BillingCurrencyStepProps> = ({
  onPrevious,
  onComplete,
}) => {
  const [formData, setFormData] = useState<BillingCurrencyFormData>({
    currency: "",
    preferredLanguage: "",
    acknowledged: false,
  });

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex items-start justify-center p-8 lg:p-16">
        <div className="w-full max-w-2xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Billing & AI Setup
            </h1>
            <p className="text-sm text-muted-foreground">
              Final settings before accessing the dashboard.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Currency
              </label>
              <Select
                value={formData.currency}
                onValueChange={(val) =>
                  setFormData({ ...formData, currency: val })
                }
              >
                <SelectTrigger className="w-full bg-card border-border/30 h-11">
                  <SelectValue placeholder="select currency.." />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr} value={curr}>
                      {curr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Preferred Language
              </label>
              <Select
                value={formData.preferredLanguage}
                onValueChange={(val) =>
                  setFormData({ ...formData, preferredLanguage: val })
                }
              >
                <SelectTrigger className="w-full bg-card border-border/30 h-11">
                  <SelectValue placeholder="select language.." />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={formData.acknowledged}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, acknowledged: checked as boolean })
            }
            className="border-button data-[state=checked]:bg-button data-[state=checked]:border-button"
          />
          <label className="text-sm text-button font-medium">
            I acknowledge and agree
          </label>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={onPrevious}
            className="border-border/30 gap-2"
          >
            &larr; Previous
          </Button>
          <Button
            onClick={onComplete}
            disabled={!formData.acknowledged}
            className="bg-button text-white border-button hover:bg-button/90"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingCurrencyStep;
