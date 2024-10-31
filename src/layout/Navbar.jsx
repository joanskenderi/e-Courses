import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const navigate = useNavigate();

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
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
