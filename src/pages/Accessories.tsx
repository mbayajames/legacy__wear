// Accessories.tsx
import { ShopPage } from './ShopPage';

const Accessories = () => {
  return (
    <ShopPage
      category="accessories"
      title="Accessories"
      description="Complete your look with our stunning collection of accessories"
      // Better: use higher quality + auto format + responsive src if possible
      bannerImage="https://images.unsplash.com/photo-1509319117116-742259ee5c53?w=1600&auto=format&fit=crop&q=80"
    />
  );
};

export default Accessories;