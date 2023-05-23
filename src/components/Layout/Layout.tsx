import React, { useState, useEffect } from "react";
import { CartContext } from "../../Context";
import Nav from "./Nav";
import Footer from "./Footer";

export interface FakeStoreData {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface CartData {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Layout({ children }: any) {
  const [cart, setCart] = useState<CartData[]>([]);

  
  return (
    <>
      <CartContext.Provider value={{ CartContext: [cart, setCart] }}>
          <Nav />
          {children}
          <Footer />
      </CartContext.Provider>
    </>
  );
}
