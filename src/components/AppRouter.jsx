import {Routes, Route, Navigate } from 'react-router-dom';
import { MAIN_ROUTE, PRODUCTS_ROUTE, CONTACT_ROUTE, ABOUT_US_ROUTE, ABOUT_PRODUCT_ROUTE } from "../utils/routes";
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';
import AboutUsPage from '../pages/AboutUsPage';
import AboutProductPage from '../pages/AboutProductPage';
import MainPage from '../pages/MainPage';

function AppRouter() {
  return (
    <Routes>
        <Route path={MAIN_ROUTE} element={<MainPage />} />
        <Route path={PRODUCTS_ROUTE} element={<ProductsPage />} />
        <Route path={CONTACT_ROUTE} element={<ContactPage />} />
        <Route path={ABOUT_US_ROUTE} element={<AboutUsPage />} />
        <Route path={ABOUT_PRODUCT_ROUTE + '/:id'} element={<AboutProductPage />} />
        <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />}/>
    </Routes>
  );
}

export default AppRouter