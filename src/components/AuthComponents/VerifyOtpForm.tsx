/** @format */
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-root-bg">
      <div className="relative w-full max-w-md mx-4">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-button via-border to-button rounded-2xl opacity-40 blur-sm" />

        <div className="relative bg-card border border-border/30 rounded-2xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Verify your Code
            </h1>
            <p className="text-sm text-muted-foreground">
              We&apos;ve sent a reset link to your as
              <span className="text-custom-pink">....m@gmail.com</span> email.
              Please check your inbox
            </p>
          </div>

          {/* OTP Inputs */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="size-12 text-center text-lg font-semibold bg-root-bg border border-border/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-button transition-all"
                />
              ))}
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-button to-custom-pink text-white border-0 font-semibold text-base"
            >
              Send Code
            </Button>
          </form>

          {/* Resend */}
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t received the code?{" "}
            <Link
              href="#"
              className="text-custom-pink hover:underline font-medium"
            >
              Resend
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
