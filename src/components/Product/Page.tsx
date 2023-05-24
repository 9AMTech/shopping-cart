import * as React from "react";
import Button from "../Button";

interface PageProps {
	products?: {},
  image: string,
  name: string,
  description: string,
  price: number,
}

// THESE PROPS ARE UNDEFINED >:(
const Page: React.FC<PageProps> = (props) => {
	return (
    <section className="product">
      <section>
        <img src={props.image} />
      </section>
      <section>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <p>{props.description}</p>
        <Button content="ADD" />
      </section>
    </section>
  );
};

export default Page;
