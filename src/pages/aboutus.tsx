import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Paragraph from "../components/Paragraph";

const AboutUsPage = () => {
  return (
    <Layout>
      <Paragraph
			containerStyle=""
			textStyle=""
			text="Hahaa!"/>
    </Layout>
  )
};

export default AboutUsPage;

export const Head: HeadFC = () => <title>About</title>;
