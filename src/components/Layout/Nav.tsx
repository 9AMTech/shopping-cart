import React from "react";
import { Link } from "gatsby";
import Button from "../Button";
import CartPNG from "../../images/cart.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Button content={<img src={CartPNG} alt="Cart" />} />
    </nav>
  );
};

export default Nav;
