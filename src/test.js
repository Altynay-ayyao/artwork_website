import React from 'react';
import door from './images/door.jpg';
import flower from './images/flower.jpg';
import ladies from './images/ladies.jpg';
import loneliness from './images/loneliness.jpg';
import ovisilmi from './images/ovisilmi.jpg';
import passion from './images/passion.jpg';
import sea_world from './images/sea_world.jpg';
import sense_and_sensibility from './images/sense_and_sensibility.jpg';
import sense from './images/sense.jpg';
import sensibility from './images/sensibility.jpg';
import summer from './images/summer.jpg';
import untitled1 from './images/untitled1.jpg';
import untitled2 from './images/untitled2.jpg';
import why_so_serious from './images/why_so_serious.jpg';
import woman from './images/woman.jpg';
import './style.css';
import Header from './Header';

const firstArt = {
  img: './images/door.jpg',
  title: 'The door',
  price: '1000€',
  desc: 'Acrylic painting',
  size: '50 * 50 cm',
};

const ArtList = () => {
  return (
    <div className="artlist">
      <Art img={firstArt.img} title={firstArt.title} price={firstArt.price} />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
    </div>
  );
};

const Art = (props) => {
  return (
    <div className="art">
      <img src={door} alt="" className="door" />
      <h1>{props.price}</h1>
      <h1>{props.title.toUpperCase()}</h1>
      <h4>{props.desc}</h4>
      <p>{props.size}</p>
    </div>
  );
};

export default Art;
