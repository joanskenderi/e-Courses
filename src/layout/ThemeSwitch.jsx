import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from '../hooks';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => toggleTheme()}
      className={`${
        theme === 'dark'
          ? 'bg-slate-800 text-slate-50'
          : 'bg-slate-200 text-slate-800'
      } px-4 py-2 rounded-md shadow-md`}
    >
      {theme === 'dark' ? (
        <FaMoon size={16} color="blue" />
      ) : (
        <FaSun size={16} color="gray" />
      )}
    </button>
  );
};

export default ThemeSwitch;
