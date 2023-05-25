import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationDrawer from '../navBar/NavigationDrawer';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import NotFoundPage from '../pages/notFound/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Home />} />
        <Route path='/about' element={<Dashboard />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <NavigationDrawer />
    </BrowserRouter>
  );
};

export default Router;
