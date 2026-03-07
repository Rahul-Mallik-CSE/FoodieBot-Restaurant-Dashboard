/** @format */

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SetupStepperSidebar from "@/components/AuthComponents/SetupStepperSidebar";
import BasicInfoStep from "@/components/AuthComponents/BasicInfoStep";
import TypeOperationsStep from "@/components/AuthComponents/TypeOperationsStep";
import BillingCurrencyStep from "@/components/AuthComponents/BillingCurrencyStep";
import type { ProfileSetupStep } from "@/types/AllTypes";

const ProfileSetupPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<ProfileSetupStep>(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as ProfileSetupStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as ProfileSetupStep);
    }
  };

  const handleComplete = () => {
    // Handle profile setup completion
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-root-bg">
      <SetupStepperSidebar currentStep={currentStep} />
      {currentStep === 1 && <BasicInfoStep onNext={handleNext} />}
      {currentStep === 2 && (
        <TypeOperationsStep onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 3 && (
        <BillingCurrencyStep
          onPrevious={handlePrevious}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default ProfileSetupPage;
