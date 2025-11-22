import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MenuProvider } from './components/MenuContext';
import { FavoritesProvider } from './components/FavoritesContext';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import NewsletterList from './pages/NewsletterList';
import Article from './pages/Article';
import Feed from './pages/Feed';
import Community from './pages/Community';
import Challenges from './pages/Challenges';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <MenuProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/newsletter" replace />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/newsletter" element={<NewsletterList />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/community" element={<Community />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/menu" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
        <Dashboard drawer />
      </FavoritesProvider>
    </MenuProvider>
  );
};

export default App;