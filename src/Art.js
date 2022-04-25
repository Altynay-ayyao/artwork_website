import React from 'react';
import door from './images/door.jpg';
import './style.css';

const Art = () => {
  return (
    <div>
      <Image></Image>
      <Title />
      <Description />
      <Size />
    </div>
  );
};
const Image = () => {
  return <img src={door} alt="" className="door" />;
};

const Title = () => <h3>The door</h3>;
const Description = () => <p>Acylic painting</p>;
const Size = () => <p>50 * 50 cm</p>;

export default Art;
