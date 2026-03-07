/** @format */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { MenuCategory } from "@/types/AllTypes";

interface AddCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (category: MenuCategory) => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  open,
  onOpenChange,
  onAdd,
}) => {
  const [categoryName, setCategoryName] = useState("");

  const handleAdd = () => {
    if (!categoryName.trim()) return;
    onAdd({
      id: crypto.randomUUID(),
      name: categoryName.trim(),
    });
    setCategoryName("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="bg-card border border-[#2C2740] sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle className="text-primary text-lg font-bold">
            Add Menu Category
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Create and organize menu categories to help the AI understand and
            group your dishes accurately.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <label className="text-primary text-sm font-medium mb-1.5 block">
              Category
            </label>
            <Input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="enter category name..."
              className="bg-root-bg border-[#2C2740] text-primary h-11"
            />
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 h-11 border-[#2C2740] text-primary"
              onClick={() => {
                setCategoryName("");
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 h-11"
              onClick={handleAdd}
              disabled={!categoryName.trim()}
            >
              Add Category
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
