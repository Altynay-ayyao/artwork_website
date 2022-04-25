import React from 'react';
import door from './images/door.jpg';
import './style.css';

const Art = () => {
  return (
    <div className="art">
      <Image></Image>
      <Price />
      <Title />
      <Description />
      <Size />
    </div>
  );
};
const Image = () => {
  return <img src={door} alt="" className="door" />;
};

const Title = () => <h1 className="name">The door</h1>;
const Price = () => <h1 className="price">1000€</h1>;
const Description = () => <h1 className="acrylic">Acrylic painting</h1>;
const Size = () => <h1 className="size">50 * 50 cm</h1>;

export default Art;
