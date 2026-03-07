/** @format */

// ─── Dashboard Types ───
export interface DashboardStat {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
}

export interface AIConversationData {
  day: string;
  thisWeek: number;
  lastWeek: number;
}

export interface TopSellingDishItem {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface OrderStatusData {
  name: string;
  value: number;
  color: string;
}

export interface RecentOrderItem {
  orderId: string;
  customer: string;
  date: string;
  amount: string;
  payment: "Paid" | "Unpaid" | "Pending";
}

// ─── Table & QR Code Types ───
export type TableStatus = "active" | "booked" | "inactive";

export interface TableItem {
  id: string;
  tableNumber: string;
  tableId: string;
  description: string;
  status: TableStatus;
  qrCodeUrl?: string;
}

// ─── Menu Management Types ───
export interface MenuCategory {
  id: string;
  name: string;
}

export interface DishItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizeOption: string;
  ingredients: string;
  calories: string;
  allergenInfo: string;
  image: string;
}

// ─── Orders & Billings Types ───
export type OrderPaymentStatus = "Paid" | "Unpaid" | "Pending";
export type OrderStatus = "Completed" | "Processing" | "Pending" | "Cancelled";

export interface OrderItem {
  orderId: string;
  customer: string;
  date: string;
  amount: string;
  payment: OrderPaymentStatus;
  status: OrderStatus;
  table: string;
}

export interface OrderDishItem {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderDetail {
  orderId: string;
  customer: string;
  table: string;
  date: string;
  time: string;
  items: OrderDishItem[];
  subtotal: number;
  tax: number;
  total: number;
  payment: OrderPaymentStatus;
  status: OrderStatus;
  contactNumber: string;
  restaurantName: string;
  address: string;
}

// ─── Customer Review Types ───
export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  date: string;
  service: string;
  rating: number;
  review: string;
}

export interface RatingDistributionItem {
  stars: number;
  count: string;
  percentage: number;
  color: string;
}

export interface ReviewStats {
  totalReviews: string;
  totalGrowth: string;
  averageRating: number;
  ratingGrowth: string;
  ratingDistribution: RatingDistributionItem[];
}

// ─── Settings Types ───
export interface PersonalInfo {
  ownerName: string;
  email: string;
  password: string;
  contactNumber: string;
}

export interface RestaurantDetails {
  restaurantName: string;
  description: string;
  address: string;
}

export interface BillingHistoryItem {
  invoiceId: string;
  date: string;
  plan: string;
  price: string;
}

// ─── Profile Setup Types ───
export type ProfileSetupStep = 1 | 2 | 3;

export interface BasicInfoFormData {
  restaurantName: string;
  description: string;
  contactNumber: string;
  restaurantAddress: string;
  images: File[];
}

export interface TypeOperationsFormData {
  restaurantType: string;
  serviceType: string;
  primaryCustomerType: string;
  averagePriceRange: string;
}

export interface BillingCurrencyFormData {
  currency: string;
  preferredLanguage: string;
  acknowledged: boolean;
}
