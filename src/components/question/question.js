import React from 'react';
import QuestionCard from '../question-card/question-card';
import { Button } from 'reactstrap';

const question = props => {
  return (
    <div className='w-100'>
      <div className='w-100'>
        <QuestionCard
          question={props.question}
          answer={props.answered}
          answerQuestion={props.answerQuestion}
        />
      </div>
      {props.answered ? (
        <div>
          <Button
            onClick={() => {
              props.nextQuestion();
            }}
          >
            Next
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default question;
