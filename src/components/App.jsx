import { Route, Routes } from 'react-router-dom';

import '../shared/styles/styles.css';

import HomePage from 'pages/HomePage/HomePage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="diagram" element={<StatisticsPage />} />
          <Route path="currency" element={<CurrencyPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
