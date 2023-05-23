import React from "react";
import {RouteComponentProps } from '@reach/router';
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Paragraph from "../components/Paragraph";


const AboutPage: React.FC<RouteComponentProps> = (props) => {
  return (
    <Layout>
      <Paragraph
			containerStyle=""
			textStyle=""
			text="Hahaa!"/>
    </Layout>
  )
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
