import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeSwitch } from './layout';
import { useTheme } from './hooks';
import AppRouter from './router/AppRouter';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === 'dark-theme'
          ? 'bg-slate-900 text-slate-50'
          : 'bg-slate-text-slate-50 text-slate-900'
      } min-h-screen flex items-center justify-center`}
    >
      <Router>
        <ThemeSwitch />
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
