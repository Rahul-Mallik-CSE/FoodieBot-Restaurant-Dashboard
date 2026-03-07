/** @format */
"use client";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DishCard from "@/components/MenuManagementComponents/DishCard";
import AddCategoryModal from "@/components/MenuManagementComponents/AddCategoryModal";
import AddEditDishSheet from "@/components/MenuManagementComponents/AddEditDishSheet";
import DishDetailSheet from "@/components/MenuManagementComponents/DishDetailSheet";
import type { DishItem, MenuCategory } from "@/types/AllTypes";

const initialCategories: MenuCategory[] = [
  { id: "1", name: "Appetizers" },
  { id: "2", name: "Soups & Salads" },
  { id: "3", name: "Main Courses" },
  { id: "4", name: "Desserts" },
  { id: "5", name: "Signature Dishes" },
  { id: "6", name: "Beverages" },
  { id: "7", name: "Sides" },
];

const initialDishes: DishItem[] = [
  {
    id: "1",
    name: "Salad with lettuce",
    description: "Fresh garden salad with crispy lettuce and vegetables.",
    price: 8.99,
    category: "Appetizers",
    sizeOption: "Regular",
    ingredients: "Lettuce, tomato, cucumber, olive oil",
    calories: "150cal",
    allergenInfo: "None",
    image: "/dishes/dish1.png",
  },
  {
    id: "2",
    name: "Fruits with strawberry",
    description: "Mixed fruits bowl with fresh strawberries.",
    price: 6.99,
    category: "Appetizers",
    sizeOption: "Regular",
    ingredients: "Strawberry, blueberry, banana, honey",
    calories: "120cal",
    allergenInfo: "None",
    image: "/dishes/dish2.png",
  },
  {
    id: "3",
    name: "Salad with lettuce",
    description: "Premium garden salad with dressing.",
    price: 8.99,
    category: "Appetizers",
    sizeOption: "Large",
    ingredients: "Lettuce, avocado, nuts, dressing",
    calories: "220cal",
    allergenInfo: "Contains nuts",
    image: "/dishes/dish3.png",
  },
  {
    id: "4",
    name: "Salad with lettuce",
    description: "Caesar salad with grilled chicken.",
    price: 8.99,
    category: "Appetizers",
    sizeOption: "Regular",
    ingredients: "Lettuce, chicken, parmesan, croutons",
    calories: "350cal",
    allergenInfo: "Contains gluten, dairy",
    image: "/dishes/dish4.png",
  },
  {
    id: "5",
    name: "Fruits with strawberry",
    description: "Tropical fruit bowl.",
    price: 6.99,
    category: "Appetizers",
    sizeOption: "Regular",
    ingredients: "Mango, pineapple, strawberry",
    calories: "130cal",
    allergenInfo: "None",
    image: "/dishes/dish5.png",
  },
  {
    id: "6",
    name: "Salad with lettuce",
    description: "Greek salad with feta cheese.",
    price: 8.99,
    category: "Soups & Salads",
    sizeOption: "Regular",
    ingredients: "Lettuce, feta, olives, cucumber",
    calories: "280cal",
    allergenInfo: "Contains dairy",
    image: "/dishes/dish1.png",
  },
  {
    id: "7",
    name: "Fruits with strawberry",
    description: "Berry medley bowl.",
    price: 6.99,
    category: "Soups & Salads",
    sizeOption: "Regular",
    ingredients: "Strawberry, raspberry, blueberry",
    calories: "110cal",
    allergenInfo: "None",
    image: "/dishes/dish2.png",
  },
];

const MenuManagementPage = () => {
  const [categories, setCategories] =
    useState<MenuCategory[]>(initialCategories);
  const [dishes, setDishes] = useState<DishItem[]>(initialDishes);
  const [activeCategory, setActiveCategory] = useState("Appetizers");
  const [searchQuery, setSearchQuery] = useState("");
  const [addCategoryOpen, setAddCategoryOpen] = useState(false);
  const [dishSheetOpen, setDishSheetOpen] = useState(false);
  const [detailSheetOpen, setDetailSheetOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);

  const filteredDishes = dishes.filter(
    (d) =>
      d.category === activeCategory &&
      d.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleAddCategory = (category: MenuCategory) => {
    setCategories((prev) => [...prev, category]);
  };

  const handleDishSave = (dish: DishItem) => {
    setDishes((prev) => {
      const exists = prev.find((d) => d.id === dish.id);
      if (exists) {
        return prev.map((d) => (d.id === dish.id ? dish : d));
      }
      return [...prev, { ...dish, category: activeCategory }];
    });
    setSelectedDish(null);
  };

  const handleEditDish = (dish: DishItem) => {
    setSelectedDish(dish);
    setDetailSheetOpen(true);
  };

  const handleAddNewDish = () => {
    setSelectedDish(null);
    setDishSheetOpen(true);
  };

  return (
    <div className="w-full p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-primary text-xl sm:text-2xl font-bold">
          Menu Management
        </h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-card border border-[#2C2740] rounded-lg pl-9 pr-3 py-2 text-sm text-primary placeholder:text-muted-foreground outline-none focus:border-button"
            />
          </div>
          <Button
            onClick={() => setAddCategoryOpen(true)}
            className="h-9 gap-1.5 text-sm whitespace-nowrap"
          >
            <Plus size={16} />
            Add Categories
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory}>
        <TabsList
          variant="line"
          className="mb-6 flex-wrap gap-0 border-b border-[#2C2740] bg-transparent w-full justify-start"
        >
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.name}
              className="text-muted-foreground data-[state=active]:text-custom-pink data-[state=active]:border-b-2 data-[state=active]:border-custom-pink rounded-none px-4 py-2 text-sm"
            >
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.name}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Add New Dish Card */}
              <button
                onClick={handleAddNewDish}
                className="bg-card rounded-2xl border-2 border-dashed border-[#2C2740] hover:border-button transition-colors flex flex-col items-center justify-center gap-2 min-h-60 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#2C2740] flex items-center justify-center">
                  <Plus size={24} className="text-muted-foreground" />
                </div>
                <span className="text-muted-foreground text-sm">
                  Add new dish
                </span>
              </button>

              {/* Dish Cards */}
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} onEdit={handleEditDish} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Modals & Sheets */}
      <AddCategoryModal
        open={addCategoryOpen}
        onOpenChange={setAddCategoryOpen}
        onAdd={handleAddCategory}
      />
      <AddEditDishSheet
        open={dishSheetOpen}
        onOpenChange={setDishSheetOpen}
        dish={selectedDish}
        categories={categories}
        onSave={handleDishSave}
      />
      <DishDetailSheet
        open={detailSheetOpen}
        onOpenChange={(open) => {
          setDetailSheetOpen(open);
          if (!open) setSelectedDish(null);
        }}
        dish={selectedDish}
      />
    </div>
  );
};

export default MenuManagementPage;
