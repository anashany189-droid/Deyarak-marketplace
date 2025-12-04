export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  supplier: string;
}

export interface Supplier {
  id: string;
  name: string;
  rating: number;
  location: string;
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