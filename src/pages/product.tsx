import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Page from "../components/Product/Page";
import {RouteComponentProps} from '@reach/router';

interface ProductProps extends RouteComponentProps {
	name?: string,
	image?: string,
	description?: string,
	price?: number,
}

const ProductPage: React.FC<ProductProps> = (props) => {
  return (
    <Layout>
      <Page
			name={props.name!}
			image={props.image!}
			price={props.price!}
			description={props.description!}
			/>
    </Layout>
  );
};

export default ProductPage;

export const Head: HeadFC = () => <title>Product</title>;
