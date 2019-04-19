import React from 'react';
import QuestionCard from '../question-card/question-card';
import { Button } from 'reactstrap';

const game = props => {
  return (
    <div>
      <p>
        <QuestionCard
          question={props.question}
          answer={props.answered}
          answerQuestion={props.answerQuestion}
        />
      </p>
      {props.answered ? (
        <p>
          <Button
            onClick={() => {
              props.nextQuestion();
            }}
          >
            Next
          </Button>
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default game;
