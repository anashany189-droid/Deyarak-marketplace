
export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number; // For discounts
  unit: string;
  image: string;
  images?: string[]; // Gallery
  supplier: string;
  rating: number;
  reviewsCount: number;
  description: string;
  specs: Record<string, string>; // e.g., { "Color": "White", "Weight": "50kg" }
  reviews?: Review[];
  inStock: boolean;
}

export interface Supplier {
  id: string;
  name: string;
  rating: number;
  logo: string;
  location: string;
  specialty: string;
  phone: string;
}

export interface ChartData {
  name: string;
  price: number;
  date: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  isThinking?: boolean;
}
