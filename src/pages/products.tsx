import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Product/Card";
import { FakeStoreData } from "../components/Layout/Layout";
import { HeadFC } from "gatsby";
import {RouteComponentProps } from '@reach/router';
import {Router} from '@reach/router';


const ProductsPage : React.FC<RouteComponentProps> = (props) => {
  const [products, setProducts] = useState<FakeStoreData[]>([]);

  useEffect(() => {
    let uri = "https://fakestoreapi.com/products/";
    fetch(uri)
      .then((res) => res.json() as Promise<FakeStoreData[]>)
      .then((json) => {
        let parsedProducts: FakeStoreData[] = [];
        json.map((product) => {
          if (
            product.category === "men's clothing" ||
            product.category === "women's clothing"
          ) {
            parsedProducts.push(product);
          }
        });
        setProducts(parsedProducts);
      });
  }, []);
  return (
    <Layout>
      <section className="grid grid-cols-3 w-10/12 mx-auto gap-y-12 mx-20 my-28">
        {products.map((product) => {
          return (
              <Card
								id={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
              />
          );
        })}
      </section>
    </Layout>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Products</title>;
