 export interface Product {
   id: string;
   name: string;
   price: number;
   originalPrice?: number;
   image: string;
   category: 'shoes' | 'clothes' | 'bags' | 'accessories';
   description: string;
   sizes?: string[];
   colors?: string[];
   rating: number;
   reviews: number;
   isNew?: boolean;
   isSale?: boolean;
   inStock: boolean;
 }
 
 export const products: Product[] = [
   // Shoes
   {
     id: 'shoe-1',
     name: 'Midnight Rose Heels',
     price: 12500,
     originalPrice: 15000,
     image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',
     category: 'shoes',
     description: 'Elegant black heels with rose gold accents, perfect for evening events.',
     sizes: ['36', '37', '38', '39', '40', '41'],
     colors: ['Black', 'Rose Gold'],
     rating: 4.8,
     reviews: 124,
     isSale: true,
     inStock: true,
   },
   {
     id: 'shoe-2',
     name: 'Urban Street Sneakers',
     price: 8500,
     image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80',
     category: 'shoes',
     description: 'Comfortable and stylish sneakers for everyday urban adventures.',
     sizes: ['38', '39', '40', '41', '42', '43', '44'],
     colors: ['White', 'Black', 'Pink'],
     rating: 4.6,
     reviews: 89,
     isNew: true,
     inStock: true,
   },
   {
     id: 'shoe-3',
     name: 'Classic Oxford',
     price: 11000,
     image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&q=80',
     category: 'shoes',
     description: 'Timeless oxford shoes crafted from premium leather.',
     sizes: ['40', '41', '42', '43', '44', '45'],
     colors: ['Brown', 'Black'],
     rating: 4.9,
     reviews: 156,
     inStock: true,
   },
   {
     id: 'shoe-4',
     name: 'Pink Stiletto Pumps',
     price: 9800,
     image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500&q=80',
     category: 'shoes',
     description: 'Statement pink stilettos that demand attention.',
     sizes: ['35', '36', '37', '38', '39', '40'],
     colors: ['Pink', 'Hot Pink'],
     rating: 4.7,
     reviews: 67,
     isNew: true,
     inStock: true,
   },
   // Clothes
   {
     id: 'cloth-1',
     name: 'Noir Elegance Dress',
     price: 18500,
     originalPrice: 22000,
     image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80',
     category: 'clothes',
     description: 'A stunning black evening dress with elegant draping.',
     sizes: ['XS', 'S', 'M', 'L', 'XL'],
     colors: ['Black'],
     rating: 4.9,
     reviews: 203,
     isSale: true,
     inStock: true,
   },
   {
     id: 'cloth-2',
     name: 'Rose Petal Blouse',
     price: 5500,
     image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80',
     category: 'clothes',
     description: 'Delicate pink blouse with subtle floral patterns.',
     sizes: ['XS', 'S', 'M', 'L'],
     colors: ['Pink', 'Blush'],
     rating: 4.5,
     reviews: 78,
     inStock: true,
   },
   {
     id: 'cloth-3',
     name: 'Tailored Power Blazer',
     price: 15000,
     image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80',
     category: 'clothes',
     description: 'Sharp, structured blazer for the modern professional.',
     sizes: ['S', 'M', 'L', 'XL'],
     colors: ['Black', 'Navy', 'Charcoal'],
     rating: 4.8,
     reviews: 145,
     isNew: true,
     inStock: true,
   },
   {
     id: 'cloth-4',
     name: 'Silk Evening Gown',
     price: 28000,
     image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80',
     category: 'clothes',
     description: 'Luxurious silk gown for special occasions.',
     sizes: ['XS', 'S', 'M', 'L'],
     colors: ['Black', 'Burgundy', 'Emerald'],
     rating: 5.0,
     reviews: 89,
     inStock: true,
   },
   // Bags
   {
     id: 'bag-1',
     name: 'Legacy Tote',
     price: 22000,
     originalPrice: 28000,
     image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80',
     category: 'bags',
     description: 'Spacious leather tote bag with signature pink lining.',
     colors: ['Black', 'Tan', 'Pink'],
     rating: 4.9,
     reviews: 167,
     isSale: true,
     inStock: true,
   },
   {
     id: 'bag-2',
     name: 'Evening Clutch',
     price: 8500,
     image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&q=80',
     category: 'bags',
     description: 'Elegant clutch with crystal embellishments.',
     colors: ['Black', 'Silver', 'Rose Gold'],
     rating: 4.7,
     reviews: 92,
     isNew: true,
     inStock: true,
   },
   {
     id: 'bag-3',
     name: 'Crossbody Mini',
     price: 12000,
     image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
     category: 'bags',
     description: 'Compact crossbody perfect for hands-free style.',
     colors: ['Pink', 'Black', 'White'],
     rating: 4.6,
     reviews: 134,
     inStock: true,
   },
   {
     id: 'bag-4',
     name: 'Business Portfolio',
     price: 18500,
     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
     category: 'bags',
     description: 'Professional portfolio bag for the modern executive.',
     colors: ['Black', 'Brown'],
     rating: 4.8,
     reviews: 78,
     inStock: true,
   },
   // Accessories
   {
     id: 'acc-1',
     name: 'Rose Gold Watch',
     price: 35000,
     originalPrice: 42000,
     image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
     category: 'accessories',
     description: 'Luxurious rose gold timepiece with diamond accents.',
     rating: 4.9,
     reviews: 234,
     isSale: true,
     inStock: true,
   },
   {
     id: 'acc-2',
     name: 'Statement Sunglasses',
     price: 8900,
     image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
     category: 'accessories',
     description: 'Oversized sunglasses with gradient pink lenses.',
     colors: ['Black', 'Tortoise', 'Pink'],
     rating: 4.6,
     reviews: 112,
     isNew: true,
     inStock: true,
   },
   {
     id: 'acc-3',
     name: 'Pearl Necklace Set',
     price: 15500,
     image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
     category: 'accessories',
     description: 'Classic pearl necklace with matching earrings.',
     rating: 4.8,
     reviews: 89,
     inStock: true,
   },
   {
     id: 'acc-4',
     name: 'Leather Belt',
     price: 4500,
     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a25?w=500&q=80',
     category: 'accessories',
     description: 'Premium leather belt with signature buckle.',
     colors: ['Black', 'Brown', 'Pink'],
     rating: 4.5,
     reviews: 156,
     inStock: true,
   },
 ];
 
 export const getProductsByCategory = (category: Product['category']) => {
   return products.filter(p => p.category === category);
 };
 
 export const getFeaturedProducts = () => {
   return products.filter(p => p.isNew || p.isSale).slice(0, 8);
 };
 
 export const getNewArrivals = () => {
   return products.filter(p => p.isNew);
 };
 
 export const getSaleProducts = () => {
   return products.filter(p => p.isSale);
 };