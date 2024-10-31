import { useTheme } from '../hooks';

const CardAction = ({ onAddToCart }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`w-full h-14 px-4 py-1 rounded-lg transition duration-200 
        ${
          theme === 'dark'
            ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
            : 'bg-slate-300 text-slate-800 hover:bg-slate-400'
        }`}
      onClick={onAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default CardAction;
