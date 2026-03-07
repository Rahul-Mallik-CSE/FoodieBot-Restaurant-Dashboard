/** @format */
"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, X, FileImage } from "lucide-react";
import Image from "next/image";
import type { BasicInfoFormData } from "@/types/AllTypes";

interface BasicInfoStepProps {
  onNext: () => void;
}

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ onNext }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<BasicInfoFormData>({
    restaurantName: "",
    description: "",
    contactNumber: "",
    restaurantAddress: "",
    images: [],
  });
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, images: [...formData.images, ...files] });

    // Create previews
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
    setPreviews(previews.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex items-start justify-center p-8 lg:p-16">
        <div className="w-full max-w-2xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Restaurant Details
            </h1>
            <p className="text-sm text-muted-foreground">
              Basic information used across the dashboard and invoices.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Restaurant Name
              </label>
              <Input
                placeholder="enter dish name..."
                value={formData.restaurantName}
                onChange={(e) =>
                  setFormData({ ...formData, restaurantName: e.target.value })
                }
                className="bg-card border-border/30 h-11"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Description
              </label>
              <Textarea
                placeholder="enter dish name..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="bg-card border-border/30 min-h-20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Contact Number
                </label>
                <Input
                  placeholder="enter dish name..."
                  value={formData.contactNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactNumber: e.target.value,
                    })
                  }
                  className="bg-card border-border/30 h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Restaurant Address
                </label>
                <Input
                  placeholder="Select Country"
                  value={formData.restaurantAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      restaurantAddress: e.target.value,
                    })
                  }
                  className="bg-card border-border/30 h-11"
                />
              </div>
            </div>

            {/* Upload Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Upload Restaurant Image
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center cursor-pointer hover:border-button/50 transition-colors"
              >
                <Upload className="size-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-foreground font-medium">
                  Choose a file or drag & drop it here.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Audio and MP4 formats are supported across the platform.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-3 border-border/30"
                >
                  Browse File
                </Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />

              {/* Previews */}
              {previews.length > 0 && (
                <div className="flex gap-3 mt-3">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <div className="size-16 rounded-lg overflow-hidden border border-border/30">
                        <Image
                          src={preview}
                          alt={`Upload ${index + 1}`}
                          width={64}
                          height={64}
                          className="object-cover size-full"
                        />
                      </div>
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-1 -right-1 size-5 bg-destructive rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="size-3 text-white" />
                      </button>
                    </div>
                  ))}
                  {previews.length > 0 && (
                    <div className="flex-1 bg-card border border-border/30 rounded-lg p-3 flex items-center gap-3">
                      <div className="size-8 bg-button/20 rounded flex items-center justify-center">
                        <FileImage className="size-4 text-button" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-foreground font-medium truncate">
                          {formData.images[0]?.name || "uploaded-image"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formData.images[0]
                            ? `${(formData.images[0].size / 1024).toFixed(0)} KB`
                            : "0 KB"}{" "}
                          · <span className="text-emerald-400">Complete</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 p-6 flex items-center justify-between">
        <Button variant="outline" disabled className="border-border/30 gap-2">
          &larr; Previous
        </Button>
        <Button
          onClick={onNext}
          className="bg-button text-white border-button hover:bg-button/90"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoStep;
