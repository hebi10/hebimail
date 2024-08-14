import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import FullLayout from './components/layout/FullLayout';
import LandingLayout from './components/layout/LandingLayout';
import MyPageLayout from './components/layout/MyPageLayout';
import UserLayout from './components/layout/UserLayout';
import LoginLayout from './components/layout/LoginLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import BoardPage from './pages/BoardPage';
import AdminPage from './pages/AdminPage';
import SupportPage from './pages/SupportPage';
import NoticePage from './pages/NoticePage';
import FAQPage from './pages/FAQPage';
import ReviewPage from './pages/ReviewPage';
import MyPage from './pages/MyPage';
import UserPage from './pages/UserPage';
import SettingPage from './pages/SettingPage';

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="hebimail/" index element={<HomePage />} />
          </Route>
          <Route element={<MyPageLayout />}>
            <Route path="hebimail/me" element={<MyPage />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="hebimail/login" element={<LoginPage />} />
          </Route>
          <Route element={<FullLayout />}>
            <Route path="hebimail/me/edit" element={<SettingPage />} />
            <Route path="hebimail/register" element={<SignUpPage />} />
            <Route path="hebimail/category" element={<CategoryPage />} />
            <Route path="hebimail/product" element={<ProductPage />} />
            <Route path="hebimail/cart" element={<CartPage />} />
            <Route path="hebimail/checkout" element={<CheckoutPage />} />
            <Route path="hebimail/profile" element={<ProfilePage />} />
            <Route path="hebimail/board" element={<BoardPage />} />
            <Route path="hebimail/admin" element={<AdminPage />} />
            <Route path="hebimail/support" element={<SupportPage />} />
            <Route path="hebimail/notice" element={<NoticePage />} />
            <Route path="hebimail/faq" element={<FAQPage />} />
            <Route path="hebimail/review" element={<ReviewPage />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path="hebimail/:userId" element={<UserPage />} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
