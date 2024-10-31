import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-slate-700 text-slate-50 px-6 py-4 flex items-center justify-between shadow-md">
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => navigate('/')}
      >
        e-Courses
      </div>
      <div className="flex items-center space-x-6">
        <ThemeSwitch />
        <button
          className="relative text-slate-50 hover:text-slate-200 transition duration-150"
          onClick={() => navigate('/cart')}
        >
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
