import { useState } from 'react';
import { toast } from 'react-toastify';

import { useCart, useTheme } from '../hooks';

const CardAction = ({ item }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemWithQuantity = { ...item, quantity };
    addToCart(itemWithQuantity);
    setQuantity(1);
    toast.success('Product added to cart!');
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className={`w-full h-14 px-4 py-1 rounded-lg transition duration-200 
          ${
            theme === 'dark'
              ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
              : 'bg-slate-300 text-slate-800 hover:bg-slate-400'
          }`}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CardAction;
