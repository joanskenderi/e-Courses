import { Route, Routes } from 'react-router-dom';

import { CartSummary, Home, ItemDetail, NotFound } from '../pages';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/cart', element: <CartSummary /> },
  { path: '/item/:id', element: <ItemDetail /> },
  { path: '*', element: <NotFound /> },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
