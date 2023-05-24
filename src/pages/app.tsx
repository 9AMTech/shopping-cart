import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout/Layout";
import ProductsPage from "./products";
import AboutPage from "./about";
import ProductPage from "./products/[id]";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <ProductsPage path="./products" />
        <ProductPage path="./products/:id" />
        <AboutPage path="./about" />
      </Router>
    </Layout>
  );
};
export default App;
