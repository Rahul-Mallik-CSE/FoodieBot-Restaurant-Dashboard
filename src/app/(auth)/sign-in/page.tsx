/** @format */

"use client";

import React from "react";
import AuthBanner from "@/components/AuthComponents/AuthBanner";
import SignInForm from "@/components/AuthComponents/SignInForm";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen bg-root-bg">
      <AuthBanner />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
