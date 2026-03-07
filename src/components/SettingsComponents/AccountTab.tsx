/** @format */
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Pencil } from "lucide-react";
import type { PersonalInfo } from "@/types/AllTypes";

const AccountTab = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<PersonalInfo>({
    ownerName: "Rahim Hossain",
    email: "name@gmail.com",
    password: "password123",
    contactNumber: "+26 265 256",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Personal Information
          </h2>
          <p className="text-sm text-muted-foreground">
            This information helps us identify and contact you when needed.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-border/30 text-foreground"
          >
            Password Change
          </Button>
          <Button
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gradient-to-r from-button to-custom-pink text-white border-0"
          >
            <Pencil className="size-4 mr-1" />
            Edit
          </Button>
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Owner Name
          </label>
          <Input
            value={formData.ownerName}
            onChange={(e) =>
              setFormData({ ...formData, ownerName: e.target.value })
            }
            disabled={!isEditing}
            className="bg-card border-border/30 h-11"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Email Address
          </label>
          <Input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            disabled={!isEditing}
            className="bg-card border-border/30 h-11"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              disabled={!isEditing}
              className="bg-card border-border/30 h-11 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <Eye className="size-4" />
              ) : (
                <EyeOff className="size-4" />
              )}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Contact Number
          </label>
          <Input
            value={formData.contactNumber}
            onChange={(e) =>
              setFormData({ ...formData, contactNumber: e.target.value })
            }
            disabled={!isEditing}
            className="bg-card border-border/30 h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
