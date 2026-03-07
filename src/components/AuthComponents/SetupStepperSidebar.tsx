/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import type { ProfileSetupStep } from "@/types/AllTypes";

interface SetupStepperSidebarProps {
  currentStep: ProfileSetupStep;
}

const steps = [
  { step: 1 as ProfileSetupStep, label: "Basic Information" },
  { step: 2 as ProfileSetupStep, label: "Type & Operations" },
  { step: 3 as ProfileSetupStep, label: "Billing & Currency" },
];

const SetupStepperSidebar: React.FC<SetupStepperSidebarProps> = ({
  currentStep,
}) => {
  return (
    <div className="w-72 min-h-screen bg-card border-r border-border/30 flex flex-col items-center py-8 px-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-16">
        <Image src="/foodiebot-icon.png" alt="Mealz" width={32} height={32} />
        <span className="text-lg font-bold text-button">Mealz</span>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-0">
        {steps.map((item, index) => {
          const isCompleted = currentStep > item.step;
          const isCurrent = currentStep === item.step;

          return (
            <div key={item.step} className="flex items-start gap-4">
              {/* Step Indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`size-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCompleted
                      ? "bg-button border-button"
                      : isCurrent
                        ? "border-button bg-transparent"
                        : "border-muted-foreground/30 bg-transparent"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="size-5 text-white" />
                  ) : (
                    <span
                      className={`text-sm font-semibold ${
                        isCurrent ? "text-button" : "text-muted-foreground"
                      }`}
                    >
                      {item.step}
                    </span>
                  )}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-16 mt-1 ${
                      isCompleted ? "bg-button" : "bg-muted-foreground/30"
                    }`}
                  />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-sm font-medium mt-2.5 ${
                  isCompleted || isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetupStepperSidebar;
