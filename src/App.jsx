import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppRouter } from './router';
import { Navbar } from './layout';
import { useTheme } from './hooks';

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <ToastContainer
        style={{
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
        }}
      />
      <Navbar />
      <div
        className={`${
          theme === 'dark'
            ? 'bg-slate-900 text-slate-50'
            : 'bg-slate-50 text-slate-900'
        } min-h-screen flex items-center justify-center`}
      >
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
