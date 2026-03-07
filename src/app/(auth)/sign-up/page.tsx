/** @format */

"use client";

import React from "react";
import AuthBanner from "@/components/AuthComponents/AuthBanner";
import SignUpForm from "@/components/AuthComponents/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen bg-root-bg">
      <AuthBanner />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
