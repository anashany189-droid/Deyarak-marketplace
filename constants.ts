
import { Product, Supplier, ChartData } from './types';

// Helper to generate generic construction placeholders with slight variations
// We are now using specific Unsplash IDs to ensure the image matches the context (Ceramic, Steel, etc.)

export const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: 's1',
    name: 'El Salab (Mostafa El Salab)',
    rating: 4.8,
    location: 'Nasr City, Cairo',
    specialty: 'Ceramics & Sanitary Ware',
    logo: 'https://ui-avatars.com/api/?name=El+Salab&background=f97316&color=fff',
    phone: '19600'
  },
  {
    id: 's2',
    name: 'Mahgoub for Ceramic',
    rating: 4.7,
    location: 'Maadi, Cairo',
    specialty: 'Porcelain & Ceramics',
    logo: 'https://ui-avatars.com/api/?name=Mahgoub&background=1e293b&color=fff',
    phone: '19000'
  },
  {
    id: 's3',
    name: 'Sedhom for Paints',
    rating: 4.5,
    location: 'Haram, Giza',
    specialty: 'Paints & Finishing',
    logo: 'https://ui-avatars.com/api/?name=Sedhom&background=2563eb&color=fff',
    phone: '01000000000'
  },
  {
    id: 's4',
    name: 'El Mazloum',
    rating: 4.6,
    location: 'Alexandria',
    specialty: 'Ceramics & Decor',
    logo: 'https://ui-avatars.com/api/?name=El+Mazloum&background=dc2626&color=fff',
    phone: '16000'
  },
  {
    id: 's5',
    name: 'Elsewedy Electric Store',
    rating: 4.9,
    location: 'Fifth Settlement, Cairo',
    specialty: 'Electrical Supplies',
    logo: 'https://ui-avatars.com/api/?name=Elsewedy&background=ef4444&color=fff',
    phone: '19900'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  // --- PAINTS (GLC, JOTUN, SIPES) ---
  {
    id: 'p-paint-1',
    name: 'GLC Super Dai 7070 - White (9L)',
    category: 'Paints',
    price: 850,
    oldPrice: 920,
    unit: 'Bucket',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop', // White Paint Bucket
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop'
    ],
    supplier: 'Sedhom for Paints',
    rating: 4.8,
    reviewsCount: 342,
    inStock: true,
    description: 'High quality acrylic emulsion paint for interior use. Excellent whiteness and hiding power. Commonly used for apartments in Egypt.',
    specs: {
      "Brand": "GLC",
      "Type": "Interior Emulsion",
      "Finish": "Matt",
      "Color": "White",
      "Size": "9 Liters (Galon)"
    },
    reviews: [
      { id: 'r1', user: 'Ahmed Mohsen', rating: 5, comment: 'Best value for money in the market.', date: '2024-02-10' },
      { id: 'r2', user: 'Mohamed Ali', rating: 4, comment: 'Good coverage but needs 3 faces.', date: '2024-01-15' }
    ]
  },
  {
    id: 'p-paint-2',
    name: 'Jotun Fenomastic My Home Rich Matt (9L)',
    category: 'Paints',
    price: 1850,
    unit: 'Bucket',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop', // Paint Can
    supplier: 'Jotun Official Store',
    rating: 4.9,
    reviewsCount: 120,
    inStock: true,
    description: 'Premium quality paint giving reliable color accuracy and a smooth matt finish. Washable and durable.',
    specs: {
      "Brand": "Jotun",
      "Model": "Fenomastic My Home",
      "Finish": "Rich Matt",
      "Color": "Computer Tintable",
      "Size": "9 Liters"
    }
  },
  {
    id: 'p-putty-1',
    name: 'Sipes Acrylic Putty 700 (15kg)',
    category: 'Paints',
    price: 320,
    unit: 'Bag',
    image: 'https://images.unsplash.com/photo-1632759132036-7014b29b9f93?q=80&w=600&auto=format&fit=crop', // White paste/putty texture
    supplier: 'Sipes Egypt',
    rating: 4.6,
    reviewsCount: 89,
    inStock: true,
    description: 'Ready to use acrylic putty for interior walls. Easy to sand and provides a smooth surface for painting.',
    specs: {
      "Brand": "Sipes",
      "Weight": "15 kg",
      "Type": "Acrylic Putty",
      "Usage": "Interior Walls"
    }
  },

  // --- FINISHING TOOLS (New Category) ---
  {
    id: 'p-tool-1',
    name: 'Professional Paint Roller Set (25cm)',
    category: 'Tools',
    price: 150,
    unit: 'Set',
    image: 'https://images.unsplash.com/photo-1585644198332-6878e19e072c?q=80&w=600&auto=format&fit=crop', // Paint Roller
    supplier: 'Sedhom for Paints',
    rating: 4.7,
    reviewsCount: 45,
    inStock: true,
    description: 'Complete paint roller set with tray and handle. High density wool for smooth finish on walls.',
    specs: {
      "Type": "Roller",
      "Size": "25 cm",
      "Material": "Polyester",
      "Includes": "Tray, Handle, Refill"
    }
  },
  {
    id: 'p-tool-2',
    name: 'Paint Brush 3 Inch - Wood Handle',
    category: 'Tools',
    price: 45,
    unit: 'Piece',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=600&auto=format&fit=crop', // Paint Brushes
    supplier: 'Sedhom for Paints',
    rating: 4.5,
    reviewsCount: 110,
    inStock: true,
    description: 'High quality bristles suitable for all types of paints and varnishes. Durable wooden handle.',
    specs: {
      "Size": "3 Inch",
      "Handle": "Wood",
      "Bristle": "Synthetic Mix"
    }
  },
   {
    id: 'p-tool-3',
    name: 'Stainless Steel Trowel (Mahara) 28cm',
    category: 'Tools',
    price: 180,
    unit: 'Piece',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop', // Trowel context
    supplier: 'Modern Tools',
    rating: 4.8,
    reviewsCount: 22,
    inStock: true,
    description: 'Professional plastering trowel. Stainless steel blade with soft grip handle. Essential for putty and plaster application.',
    specs: {
      "Material": "Stainless Steel",
      "Size": "28 cm",
      "Type": "Smoothing Trowel"
    }
  },


  // --- CERAMICS & FINISHING ---
  {
    id: 'p-ceramic-1',
    name: 'Cleopatra Floor Ceramic - Beige Marble 60x60',
    category: 'Finishing',
    price: 165,
    oldPrice: 190,
    unit: 'm²',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600&auto=format&fit=crop', // Marble Tiles
    images: ['https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600&auto=format&fit=crop'],
    supplier: 'El Salab',
    rating: 4.5,
    reviewsCount: 56,
    inStock: true,
    description: 'Laser-cut first sorting ceramic tiles. Beige marble design suitable for reception and living rooms.',
    specs: {
      "Brand": "Cleopatra",
      "Size": "60x60 cm",
      "Type": "Laser Cut",
      "Sorting": "First Sort",
      "Texture": "Glossy"
    }
  },
  {
    id: 'p-ceramic-2',
    name: 'Gemma Porcelain Tiles - Grey Stone 60x120',
    category: 'Finishing',
    price: 550,
    unit: 'm²',
    image: 'https://images.unsplash.com/photo-1560130958-30c503a56825?q=80&w=600&auto=format&fit=crop', // Grey Stone Tile
    supplier: 'Mahgoub',
    rating: 4.9,
    reviewsCount: 23,
    inStock: true,
    description: 'High-end heavy duty porcelain. Suitable for high traffic areas, receptions, and commercial use.',
    specs: {
      "Brand": "Gemma",
      "Material": "Porcelain",
      "Size": "60x120 cm",
      "Sorting": "First Sort",
      "Finish": "Matt Stone"
    }
  },

  // --- ELECTRICAL (Kahraba) ---
  {
    id: 'p-elec-1',
    name: 'Elsewedy Cable 3mm - Red (100m Roll)',
    category: 'Electrical',
    price: 2850,
    unit: 'Roll',
    image: 'https://images.unsplash.com/photo-1549925695-8848d6139988?q=80&w=600&auto=format&fit=crop', // Electrical Cable Spools
    supplier: 'Elsewedy Electric Store',
    rating: 5.0,
    reviewsCount: 512,
    inStock: true,
    description: 'Original Elsewedy insulated copper wire. Standard for lighting and outlets in Egyptian apartments.',
    specs: {
      "Brand": "Elsewedy Electric",
      "Thickness": "3 mm",
      "Length": "100 Meters",
      "Core": "Copper",
      "Insulation": "PVC"
    }
  },
  {
    id: 'p-elec-2',
    name: 'Venus LED Bulb 9 Watt - Warm White',
    category: 'Electrical',
    price: 65,
    oldPrice: 80,
    unit: 'Unit',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop', // LED Bulb
    supplier: 'Venus',
    rating: 4.7,
    reviewsCount: 1020,
    inStock: true,
    description: 'Energy saving LED bulb with 3 years warranty. Standard E27 screw base.',
    specs: {
      "Brand": "Venus",
      "Power": "9 Watt",
      "Color": "Warm White (3000K)",
      "Warranty": "3 Years"
    }
  },
  {
    id: 'p-elec-3',
    name: 'Schneider Electric Mini Pragma Enclosure',
    category: 'Electrical',
    price: 1200,
    unit: 'Unit',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=600&auto=format&fit=crop', // Electric Panel
    supplier: 'Schneider Distribution',
    rating: 4.8,
    reviewsCount: 45,
    inStock: true,
    description: 'Flush mounted distribution enclosure. Essential for apartment breaker panels.',
    specs: {
      "Brand": "Schneider",
      "Type": "Flush Mounted",
      "Capacity": "24 Modules",
      "Material": "Plastic"
    }
  },

  // --- PLUMBING (Sabaka) ---
  {
    id: 'p-plumb-1',
    name: 'BR (Banha) Pipe 3/4 inch - 4 Meters',
    category: 'Plumbing',
    price: 120,
    unit: 'Piece',
    image: 'https://images.unsplash.com/photo-1605623086915-4673322479e3?q=80&w=600&auto=format&fit=crop', // Green/Plastic Pipes
    supplier: 'Banha (BR) Official',
    rating: 4.9,
    reviewsCount: 300,
    inStock: true,
    description: 'Polypropylene (PPR) pipes for hot and cold water. Anti-bacterial and high durability.',
    specs: {
      "Brand": "BR (Banha)",
      "Diameter": "3/4 Inch",
      "Length": "4 Meters",
      "Material": "Polypropylene",
      "Pressure": "PN20"
    }
  },
  {
    id: 'p-plumb-2',
    name: 'El Sharif Kitchen Mixer - Wall Mounted',
    category: 'Plumbing',
    price: 1850,
    unit: 'Unit',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', // Chrome Faucet
    supplier: 'El Sharif Mixers',
    rating: 4.6,
    reviewsCount: 88,
    inStock: true,
    description: 'Brass body with high quality chrome finish. 10 years warranty against manufacturing defects.',
    specs: {
      "Brand": "El Sharif",
      "Type": "Wall Mounted",
      "Material": "Brass",
      "Warranty": "10 Years"
    }
  },
  {
    id: 'p-plumb-3',
    name: 'Duravit Meridian Toilet Close Coupled',
    category: 'Plumbing',
    price: 4500,
    unit: 'Unit',
    image: 'https://images.unsplash.com/photo-1596255106511-9213134989ae?q=80&w=600&auto=format&fit=crop', // Toilet
    supplier: 'El Salab',
    rating: 4.8,
    reviewsCount: 67,
    inStock: true,
    description: 'Complete toilet set including seat cover and tank mechanism.',
    specs: {
      "Brand": "Duravit",
      "Model": "Meridian",
      "Color": "White",
      "Type": "Close Coupled"
    }
  },

  // --- STEEL & CEMENT ---
  {
    id: 'p-steel-1',
    name: 'Ezz Steel Rebar 12mm',
    category: 'Steel',
    price: 48000,
    unit: 'Ton',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600&auto=format&fit=crop', // Rebar
    supplier: 'Ezz Steel',
    rating: 5.0,
    reviewsCount: 1500,
    inStock: true,
    description: 'High tensile steel rebars for concrete reinforcement. Grade B500DWR.',
    specs: {
      "Brand": "Ezz Steel",
      "Diameter": "12 mm",
      "Grade": "B500DWR",
      "Standard": "ES 262/2015"
    }
  },
  {
    id: 'p-cement-1',
    name: 'Lafarge Al-Mumtaz Cement (50kg)',
    category: 'Cement',
    price: 120,
    unit: 'Bag',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=600&auto=format&fit=crop', // Cement Bag context
    supplier: 'Lafarge Egypt',
    rating: 4.7,
    reviewsCount: 890,
    inStock: true,
    description: 'Portland Limestone Cement suitable for plastering, bricklaying, and tiling.',
    specs: {
      "Brand": "Lafarge",
      "Weight": "50 kg",
      "Type": "CEM II/B-L 32.5N",
      "Usage": "Finishing Works"
    }
  }
];

export const PRICE_HISTORY_DATA: ChartData[] = [
  { name: 'Jan', price: 38000, date: '2024-01' },
  { name: 'Feb', price: 39500, date: '2024-02' },
  { name: 'Mar', price: 45000, date: '2024-03' },
  { name: 'Apr', price: 46000, date: '2024-04' },
  { name: 'May', price: 48000, date: '2024-05' },
  { name: 'Jun', price: 48500, date: '2024-06' },
];
