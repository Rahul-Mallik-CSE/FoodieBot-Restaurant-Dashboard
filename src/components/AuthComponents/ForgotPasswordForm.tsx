/** @format */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-root-bg">
      <div className="relative w-full max-w-md mx-4">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-button via-border to-button rounded-2xl opacity-40 blur-sm" />

        <div className="relative bg-card border border-border/30 rounded-2xl p-8 space-y-6">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/foodiebot-icon.png"
              alt="Mealz"
              width={40}
              height={40}
            />
            <span className="text-lg font-bold text-button">Mealz</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Forgot your password?
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and we&apos;ll send you a reset code.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-root-bg border-border/30 h-11"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-button to-custom-pink text-white border-0 font-semibold text-base"
            >
              Send Code
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
