import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './question-card.css';

const questionCard = props => {
  const answer = props.answer;
  const correct = props.question.correct;
  return (
    <div className={answer ? "not-event" : ""}>
      <div className='question'>{props.question.question}</div>
      <ListGroup>
        {props.question.answers.map((element, index) => {
          let key = ++index;
          let disabled = false;
          let color = '';
          if (answer) {
            key === answer || key === correct ? disabled = false : disabled = true;
            index === props.question.correct
              ? (color = 'success')
              : (color = 'danger');
          }
          return (
            <ListGroupItem
              disabled={disabled}
              color={color}
              tag='button'
              action
              key={key}
              onClick={() => props.answerQuestion(key)}
            >
              {element}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default questionCard;
