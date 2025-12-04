import { Product, ChartData } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ezz Steel Rebar 12mm',
    category: 'Steel',
    price: 42000,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=1',
    supplier: 'Ezz Steel'
  },
  {
    id: '2',
    name: 'Amreyah Portland Cement',
    category: 'Cement',
    price: 2100,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=2',
    supplier: 'Amreyah Cement'
  },
  {
    id: '3',
    name: 'Red Bricks (Standard)',
    category: 'Bricks',
    price: 1500,
    unit: '1000 Units',
    image: 'https://picsum.photos/400/300?random=3',
    supplier: 'Arab Contractors'
  },
  {
    id: '4',
    name: 'Ceramic Floor Tiles - Beige',
    category: 'Finishing',
    price: 180,
    unit: 'm²',
    image: 'https://picsum.photos/400/300?random=4',
    supplier: 'Cleopatra Ceramics'
  },
  {
    id: '5',
    name: 'White Sand',
    category: 'Aggregates',
    price: 150,
    unit: 'm³',
    image: 'https://picsum.photos/400/300?random=5',
    supplier: 'Nile Aggregates'
  },
  {
    id: '6',
    name: 'Dulux Interior Paint',
    category: 'Paints',
    price: 850,
    unit: 'Bucket (10L)',
    image: 'https://picsum.photos/400/300?random=6',
    supplier: 'Dulux Egypt'
  }
];

export const PRICE_HISTORY_DATA: ChartData[] = [
  { name: 'Jan', price: 38000, date: '2024-01' },
  { name: 'Feb', price: 39500, date: '2024-02' },
  { name: 'Mar', price: 45000, date: '2024-03' },
  { name: 'Apr', price: 43000, date: '2024-04' },
  { name: 'May', price: 42500, date: '2024-05' },
  { name: 'Jun', price: 42000, date: '2024-06' },
];