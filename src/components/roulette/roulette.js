import React from 'react';
import { Button } from 'reactstrap';
import './roulette.css';

const roulette = props => {
  return (
    <div className='spinWrapper'>
      <ul id='spinList'>
        <li id='GEO' className='spinItem'>
          Geografía
        </li>
        <li id='HIS' className='spinItem'>
          Historia
        </li>
        <li id='SCI' className='spinItem'>
          Ciencia
        </li>
        <li id='SPO' className='spinItem'>
          Deporte
        </li>
        <li id='ART' className='spinItem'>
          Arte
        </li>
        <li id='ENT' className='spinItem'>
          Entretenimiento
        </li>
      </ul>
      <Button onClick={props.spin}>Girar</Button>
    </div>
  );
};

export default roulette;
