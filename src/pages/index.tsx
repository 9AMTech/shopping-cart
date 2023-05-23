import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Slogan from "../components/Slogan";

const IndexPage = () => {
  return (
    <Layout>
      <Slogan
			text="For the days you want to dress outside your comfort zone!"
			textStyle=""
			containerStyle=""
			/>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
