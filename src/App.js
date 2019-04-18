import React, { Component } from 'react';
import { Button } from 'reactstrap';
import QuestionCard from './components/question-card/question-card';
import './App.css';

const list = [
  {
    question: 'Question 1',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 1
  },
  {
    question: 'Question 2',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 2
  },
  {
    question: 'Question 3',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 3
  }
];

class App extends Component {
  state = {
    game: false,
    i: 1,
    context: {
      numCorrect: 0,
      numAnswered: 0
    },
    answered: null,
    correct: false,
    question: {}
  };

  componentWillMount() {
    this.setState({
      game: true,
      answered: null,
      correct: false,
      question: list[0]
    });
  }

  nextQuestion = question => {
    let actualI = this.state.i;
    let gameStatus = true;
    actualI++;
    if (list.length < actualI) gameStatus = false;

    this.setState({
      game: gameStatus,
      i: actualI,
      answered: null,
      correct: false,
      question: question
    });
  };

  answerQuestion = id => {
    let correct = false;
    let numAnswered = this.state.context.numAnswered;
    let numCorrect = this.state.context.numCorrect;
    if (id === this.state.question.correct) {
      numCorrect++;
      correct = true;
    }
    const context = { numCorrect: numCorrect, numAnswered: ++numAnswered };
    this.setState({ answered: id, correct: correct, context: context });
  };

  render() {
    let actualAnswer = '';
    if (this.state.answered) {
      this.state.correct
        ? (actualAnswer = <p className='white'>CORRECT</p>)
        : (actualAnswer = <p className='white'>FAILD</p>);
    }
    let game = <p>END</p>;
    if (this.state.game) {
      game = (
        <div>
          <QuestionCard
            question={this.state.question}
            answer={this.state.answered}
            answerQuestion={this.answerQuestion}
          />
          {this.state.answered ? (
            <Button
              onClick={() => {
                this.nextQuestion(list[this.state.i]);
              }}
            >
              Next
            </Button>
          ) : (
            ''
          )}
          {actualAnswer}
        </div>
      );
    }
    return (
      <div className='App'>
        <main className='App-body'>
          <p className='white'>Correctas: {this.state.context.numCorrect}</p>
          <p className='white'>Contestadas: {this.state.context.numAnswered}</p>
          {game}
        </main>
      </div>
    );
  }
}

export default App;
