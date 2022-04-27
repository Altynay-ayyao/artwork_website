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

//setup object
const arts = [
  {
    id: 1,
    img: door,
    price: '500€',
    title: 'The door',
    desc: 'Acrylic painting',
    size: '50cm * 50cm',
  },
  {
    id: 2,
    img: flower,
    price: '500€',
    title: 'The Flower',
    desc: 'Acrylic painting',
    size: '40cm * 50cm',
  },
  {
    id: 4,
    img: ladies,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 5,
    img: loneliness,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 6,
    img: ovisilmi,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 7,
    img: passion,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 8,
    img: sea_world,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 9,
    img: sense_and_sensibility,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 10,
    img: sensibility,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 11,
    img: sense,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 12,
    img: summer,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 13,
    img: untitled1,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 14,
    img: untitled2,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 15,
    img: why_so_serious,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
  {
    id: 16,
    img: woman,
    price: '900€',
    title: 'Ladies',
    desc: 'Acrylic painting',
    size: '80cm * 100cm',
  },
];

function ArtList() {
  return (
    <section className="artlist">
      {arts.map((art, index) => {
        return <Art key={art.id} {...art} />;
      })}
    </section>
  );
}

const Art = (props) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const { img, price, title, desc, size } = props;
  return (
    <article
      className="art"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} className="door" alt="" />
      <h1>{title}</h1>
      <h1>{price}</h1>
      <p>{desc}</p>
      <p>{size}</p>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button">More complex example</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArtList />
  </React.StrictMode>
);
