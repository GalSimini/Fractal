import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import NewsletterList from './pages/NewsletterList';
import Article from './pages/Article';
import Feed from './pages/Feed';
import Challenges from './pages/Challenges';
import Community from './pages/Community';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newsletter" element={<NewsletterList />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  );
}

export default App;