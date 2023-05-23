import { Link } from "@reach/router";
import * as React from "react";

interface CardProps {
	id: number,
  image: string,
  name: string,
  price: number,
}

const Card: React.FC<CardProps> = (props) => {
  return (
		<Link to={props.id.toString()}>
			<section className="flex flex-col justify-between place-self-center rounded-xl p-3 m-5 min-h-full w-64 border-4 border-zinc-600 shadow-2xl">
      <section className="">
			<img src={props.image} className="m-auto h-44 w-auto filter-none"/>
      </section>
      <section className="flex flex-col min-h-full h-32 justify-between">
			<h1 className="">{props.name}</h1>
			<h2 className="ml-auto font-bold">{props.price}</h2>
      </section>
			</section>
		</Link>
  );
};

export default Card;
