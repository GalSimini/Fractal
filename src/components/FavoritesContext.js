import React, { createContext, useContext, useState, useCallback } from 'react';

const FavCtx = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    newsletter: [],
    feed: [],
    desafios: [],
  });

  const isFavorited = useCallback((category, id) => {
    return favorites[category].some(item => item.id === id);
  }, [favorites]);

  const toggleFavorite = useCallback((category, item) => {
    setFavorites(prev => {
      const exists = prev[category].some(i => i.id === item.id);
      return {
        ...prev,
        [category]: exists
          ? prev[category].filter(i => i.id !== item.id)
          : [...prev[category], item],
      };
    });
  }, []);

  return (
    <FavCtx.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavCtx.Provider>
  );
};

export const useFavorites = () => useContext(FavCtx);