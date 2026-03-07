/** @format */

import React from "react";
import Image from "next/image";

const AuthBanner = () => {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 h-screen overflow-hidden">
      <Image
        src="/auth-banner.jpg"
        alt="Auth banner"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Logo */}
      <div className="absolute top-8 left-8 z-10 flex items-center gap-2">
        <Image src="/foodiebot-icon.png" alt="Mealz" width={32} height={32} />
        <span className="text-lg font-bold text-foreground">Mealz</span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-12 left-0 right-0 z-10 text-center px-8">
        <h2 className="text-3xl font-bold text-foreground leading-tight mb-4">
          Built for Verified
          <br />
          Restaurants, Powered by AI.
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          A secure, transparent platform that helps restaurants manage AI
          conversations, QR tables, and customer insights with ease.
        </p>
        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="size-2 rounded-full bg-button" />
          <div className="w-6 h-2 rounded-full bg-foreground" />
          <div className="size-2 rounded-full bg-button" />
        </div>
      </div>
    </div>
  );
};

export default AuthBanner;
