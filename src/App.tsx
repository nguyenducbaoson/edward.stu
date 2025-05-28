import './App.css';
import Header from './components/header/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import React, { useState, useEffect } from 'react';
import itemData from '../api/itemData.json';

type Item = {
  _id: number;
  bgImg: string;
  title: string;
  subtitle: string;
  category: string;
  promotion: string;
  gender: string;
  price: number;
  discount: number;
  description: string;
  active: boolean;
}

export interface AppContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = React.createContext<AppContextType | null>(null);

function App() {
const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setItems(itemData.items);
  };

  return (
    <>
    <AppContext.Provider value={{items, setItems}}>
      <Header />
      <Home />
    </AppContext.Provider>                             
    </>
  );
}

export default App;
