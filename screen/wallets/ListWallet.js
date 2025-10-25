import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
    }
  };

  return (
    <ListContext.Provider value={{ items, addItem }}>
      {children}
    </ListContext.Provider>
  );
};
