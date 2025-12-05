import { Product, ChartData } from './types';

export const MOCK_PRODUCTS: Product[] = [
  // Steel (Rebar)
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
    id: '101',
    name: 'Beshay Steel Rebar 10mm',
    category: 'Steel',
    price: 41500,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=101',
    supplier: 'Beshay Steel'
  },
  {
    id: '102',
    name: 'Egyptian Steel (Al-Masryeen) 16mm',
    category: 'Steel',
    price: 41800,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=102',
    supplier: 'Egyptian Steel'
  },

  // Cement
  {
    id: '2',
    name: 'Amreyah Portland Cement',
    category: 'Cement',
    price: 2150,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=2',
    supplier: 'Amreyah Cement'
  },
  {
    id: '201',
    name: 'Lafarge Al-Mumtaz Cement',
    category: 'Cement',
    price: 2250,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=201',
    supplier: 'Lafarge Egypt'
  },
  {
    id: '202',
    name: 'Cemex Assiut Cement (Resistant)',
    category: 'Cement',
    price: 2350,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=202',
    supplier: 'Cemex'
  },
  {
    id: '203',
    name: 'Helwan Cement (Tourah)',
    category: 'Cement',
    price: 2100,
    unit: 'Ton',
    image: 'https://picsum.photos/400/300?random=203',
    supplier: 'Tourah Portland Cement'
  },

  // Bricks & Aggregates
  {
    id: '3',
    name: 'Perforated Red Bricks (25x12x6)',
    category: 'Bricks',
    price: 1600,
    unit: '1000 Units',
    image: 'https://picsum.photos/400/300?random=3',
    supplier: 'Arab Contractors'
  },
  {
    id: '301',
    name: 'Solid Cement Bricks',
    category: 'Bricks',
    price: 1900,
    unit: '1000 Units',
    image: 'https://picsum.photos/400/300?random=301',
    supplier: 'Local Factories'
  },
  {
    id: '5',
    name: 'Fine Yellow Sand',
    category: 'Aggregates',
    price: 180,
    unit: 'm³',
    image: 'https://picsum.photos/400/300?random=5',
    supplier: 'Nile Aggregates'
  },
  
  // Finishing & Ceramics
  {
    id: '4',
    name: 'Cleopatra Ceramic Floor - Beige 60x60',
    category: 'Finishing',
    price: 185,
    unit: 'm²',
    image: 'https://picsum.photos/400/300?random=4',
    supplier: 'Cleopatra Ceramics'
  },
  {
    id: '401',
    name: 'Gemma Porcelain Tiles - Marble Look',
    category: 'Finishing',
    price: 450,
    unit: 'm²',
    image: 'https://picsum.photos/400/300?random=401',
    supplier: 'Gemma'
  },
  {
    id: '402',
    name: 'Royal Ceramica Wall Tiles',
    category: 'Finishing',
    price: 160,
    unit: 'm²',
    image: 'https://picsum.photos/400/300?random=402',
    supplier: 'Royal Ceramica'
  },

  // Paints
  {
    id: '6',
    name: 'Jotun Fenomastic My Home Rich Matt',
    category: 'Paints',
    price: 1250,
    unit: 'Bucket (9L)',
    image: 'https://picsum.photos/400/300?random=6',
    supplier: 'Jotun Egypt'
  },
  {
    id: '601',
    name: 'GLC Super Dai 7070',
    category: 'Paints',
    price: 850,
    unit: 'Bucket (9L)',
    image: 'https://picsum.photos/400/300?random=601',
    supplier: 'GLC Paints'
  },
  {
    id: '602',
    name: 'Sipes 700 Latex Paint',
    category: 'Paints',
    price: 780,
    unit: 'Bucket (10L)',
    image: 'https://picsum.photos/400/300?random=602',
    supplier: 'Sipes Egypt'
  },

  // Electrical & Plumbing
  {
    id: '701',
    name: 'Elsewedy Electric Cable 4mm',
    category: 'Electrical',
    price: 2600,
    unit: 'Roll (100m)',
    image: 'https://picsum.photos/400/300?random=701',
    supplier: 'Elsewedy Electric'
  },
  {
    id: '702',
    name: 'BR Polypropylene Pipe 3/4 inch',
    category: 'Plumbing',
    price: 85,
    unit: 'Meter',
    image: 'https://picsum.photos/400/300?random=702',
    supplier: 'Banha (BR)'
  },
  {
    id: '703',
    name: 'Sharif Mixer Tap (Kitchen)',
    category: 'Plumbing',
    price: 1500,
    unit: 'Unit',
    image: 'https://picsum.photos/400/300?random=703',
    supplier: 'El Sharif'
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