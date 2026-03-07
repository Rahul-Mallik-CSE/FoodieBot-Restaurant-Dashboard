/** @format */
"use client";

import React, { useState, useMemo } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { DishItem, MenuCategory } from "@/types/AllTypes";

interface AddEditDishSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dish: DishItem | null;
  categories: MenuCategory[];
  onSave: (dish: DishItem) => void;
}

const AddEditDishSheet: React.FC<AddEditDishSheetProps> = ({
  open,
  onOpenChange,
  dish,
  categories,
  onSave,
}) => {
  const isEdit = !!dish;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    sizeOption: "",
    ingredients: "",
    calories: "",
    allergenInfo: "",
    image: "/dishes/dish1.png",
  });

  const initialData = useMemo(() => {
    if (dish) {
      return {
        name: dish.name,
        description: dish.description,
        price: dish.price.toString(),
        category: dish.category,
        sizeOption: dish.sizeOption,
        ingredients: dish.ingredients,
        calories: dish.calories,
        allergenInfo: dish.allergenInfo,
        image: dish.image,
      };
    }
    return {
      name: "",
      description: "",
      price: "",
      category: categories[0]?.name || "",
      sizeOption: "",
      ingredients: "",
      calories: "",
      allergenInfo: "",
      image: "/dishes/dish1.png",
    };
  }, [dish, categories]);

  // Sync form data when dish changes
  const [prevDish, setPrevDish] = useState(dish);
  if (dish !== prevDish) {
    setPrevDish(dish);
    setFormData(initialData);
  }

  const handleSave = () => {
    if (!formData.name.trim()) return;
    onSave({
      id: dish?.id || crypto.randomUUID(),
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price) || 0,
      category: formData.category,
      sizeOption: formData.sizeOption.trim(),
      ingredients: formData.ingredients.trim(),
      calories: formData.calories.trim(),
      allergenInfo: formData.allergenInfo.trim(),
      image: formData.image,
    });
    onOpenChange(false);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:max-w-lg bg-root-bg border-l border-[#2C2740] overflow-y-auto"
      >
        <div className="flex flex-col h-full p-6">
          <SheetHeader className="p-0 mb-6">
            <button
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-2 cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <SheetTitle className="text-primary text-xl sm:text-2xl font-bold">
              Menu Management
            </SheetTitle>
            <SheetDescription className="text-muted-foreground text-sm">
              {isEdit
                ? "Edit dish details and update information."
                : "Add a new dish to your restaurant menu."}
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 space-y-4 overflow-y-auto">
            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Dish Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Enter dish name"
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Describe the dish..."
                className="bg-card border-[#2C2740] text-primary min-h-20"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Price
              </label>
              <Input
                value={formData.price}
                onChange={(e) => updateField("price", e.target.value)}
                placeholder="0.00"
                type="number"
                step="0.01"
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Category
              </label>
              <Select
                value={formData.category}
                onValueChange={(val) => updateField("category", val)}
              >
                <SelectTrigger className="w-full bg-card border-[#2C2740] text-primary h-11">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-card border-[#2C2740]">
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Size Option
              </label>
              <Input
                value={formData.sizeOption}
                onChange={(e) => updateField("sizeOption", e.target.value)}
                placeholder="e.g., Regular, Large"
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Ingredients
              </label>
              <Input
                value={formData.ingredients}
                onChange={(e) => updateField("ingredients", e.target.value)}
                placeholder="Chicken, lettuce, tomato, cheese"
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Calories
              </label>
              <Input
                value={formData.calories}
                onChange={(e) => updateField("calories", e.target.value)}
                placeholder="450cal"
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Allergen Info
              </label>
              <Input
                value={formData.allergenInfo}
                onChange={(e) => updateField("allergenInfo", e.target.value)}
                placeholder="Contains gluten, dairy"
                className="bg-card border-[#2C2740] text-primary h-11"
              />
            </div>

            <div>
              <label className="text-primary text-sm font-medium mb-1.5 block">
                Upload Image
              </label>
              <div className="border-2 border-dashed border-[#2C2740] rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-button transition-colors">
                <Upload size={24} className="text-muted-foreground" />
                <p className="text-muted-foreground text-xs">
                  Choose a file or drag & drop it here.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-[#2C2740]">
            <Button
              variant="outline"
              className="flex-1 h-11 border-[#2C2740] text-primary"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 h-11"
              onClick={handleSave}
              disabled={!formData.name.trim()}
            >
              {isEdit ? "Save Dish" : "Save Dish"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddEditDishSheet;
