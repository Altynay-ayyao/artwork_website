import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
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

function ArtList() {
  return (
    <section className="artlist">
      <Art
        img={firstArt.img}
        title={firstArt.title}
        price={firstArt.price}
        desc={firstArt.desc}
        size={firstArt.size}
      />
      <Art
        img={secondArt.img}
        title={secondArt.title}
        price={secondArt.price}
        desc={secondArt.desc}
        size={secondArt.size}
      />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
      <Art />
    </section>
  );
}
//setup object
const firstArt = {
  img: door,
  price: '500€',
  title: 'The door',
  desc: 'Acrylic painting',
  size: '50cm * 50cm',
};

const secondArt = {
  img: flower,
  price: '500€',
  title: 'The Flower',
  desc: 'Acrylic painting',
  size: '40cm * 50cm',
};
//setup vars

const Art = ({ img, price, title, desc, size }) => {
  return (
    <article className="art">
      <img src={img} className="door" alt="" />
      <h1>{title}</h1>
      <h1>{price}</h1>
      <p>{desc}</p>
      <p>{size}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArtList />
  </React.StrictMode>
);
