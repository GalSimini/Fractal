import React, { createContext, useContext, useState, useCallback } from 'react';

const MenuCtx = createContext();

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => setOpen(o => !o), []);
  const closeMenu = useCallback(() => setOpen(false), []);
  return (
    <MenuCtx.Provider value={{ open, toggleMenu, closeMenu }}>
      {children}
    </MenuCtx.Provider>
  );
};

export const useMenu = () => useContext(MenuCtx);