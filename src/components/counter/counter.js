import React from 'react';
import './counter.css';

const counter = props => {
  return (
    <ul className='counterList'>
      <li className='counterItem'>Correctas: {props.numCorrect}</li>
      <li className='counterItem'>Contestadas: {props.numAnswered}</li>
      <li className='counterItem'>Nº de preguntas: {props.length}</li>
    </ul>
  );
};

export default counter;
