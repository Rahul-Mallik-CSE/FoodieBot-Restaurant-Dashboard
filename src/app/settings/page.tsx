/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { Crown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountTab from "@/components/SettingsComponents/AccountTab";
import RestaurantDetailsTab from "@/components/SettingsComponents/RestaurantDetailsTab";
import BillingTab from "@/components/SettingsComponents/BillingTab";

const SettingsPage = () => {
  return (
    <div className="pb-8">
      {/* Cover Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src="/setting-cover.jpg"
          alt="Restaurant cover"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Section */}
      <div className="px-6 -mt-12 relative z-10">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-4">
            <div className="size-24 rounded-full border-4 border-root-bg overflow-hidden bg-card">
              <Image
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover size-full"
              />
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-bold text-foreground">Settings</h1>
              <p className="text-sm text-muted-foreground">name@gmail.com</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-button to-custom-pink text-white border-0 gap-2">
            <Crown className="size-4" />
            Pro
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-6">
        <Tabs defaultValue="account">
          <TabsList
            variant="line"
            className="border-b border-border/30 w-full justify-start gap-0"
          >
            <TabsTrigger
              value="account"
              className="data-[state=active]:text-custom-pink data-[state=active]:after:bg-custom-pink gap-2 px-4 pb-3"
            >
              <User className="size-4" />
              Account
            </TabsTrigger>
            <TabsTrigger
              value="restaurant"
              className="data-[state=active]:text-custom-pink data-[state=active]:after:bg-custom-pink gap-2 px-4 pb-3"
            >
              <User className="size-4" />
              Restaurant Details
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="data-[state=active]:text-custom-pink data-[state=active]:after:bg-custom-pink gap-2 px-4 pb-3"
            >
              <User className="size-4" />
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-8">
            <AccountTab />
          </TabsContent>
          <TabsContent value="restaurant" className="mt-8">
            <RestaurantDetailsTab />
          </TabsContent>
          <TabsContent value="billing" className="mt-8">
            <BillingTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
