import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { Button } from "./Button"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our NEW STUFFS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.jpg"
              label='SPARE PARTS'
              path='/catalog'
            />
            <CardItem
              src='images/2.jpg'
              label='WHEELS'
              path='/catalog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              label='OUR PROFESSIONAL COMBINERS'
              path='/catalog'
            />
            <CardItem
              src='/images/4.jpg'
              label='MASTER CLASS'
              path='/catalog'
            />
            <CardItem
              src='images/5.jpg'
              label='COMBINE REPAIR'
              path='/catalog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/7.jpg'
              label='RENT COMBINE'
              path='/catalog'
            />
            <CardItem
              src='images/8.jpg'
              label='COMBINE SALE'
              path='/catalog'
            />
          </ul>
        </div>
        <Button
          path="/catalog"
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          VIEW MORE
          </Button>
      </div>
    </div>
  );
}

export default Cards;
