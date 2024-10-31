import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './router';
import { Navbar } from './layout';
import { useTheme } from './hooks';

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <Navbar />
      <div
        className={`${
          theme === 'dark-theme'
            ? 'bg-slate-900 text-slate-50'
            : 'bg-slate-text-slate-50 text-slate-900'
        } min-h-screen flex items-center justify-center`}
      >
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
