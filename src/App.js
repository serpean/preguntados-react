import React, { Component } from 'react';
import Game from './components/game/game';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  state = {
    game: false,
    list: [],
    questionNumber: 1,
    context: {
      numCorrect: 0,
      numAnswered: 0
    },
    answered: null,
    question: {}
  };

  componentWillMount() {
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
    this.setState({
      list: list,
      game: true,
      answered: null,
      question: list[0]
    });
  }

  resetGame = () => {
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
    this.setState({
      list: list,
      questionNumber: 1,
      context: {
        numCorrect: 0,
        numAnswered: 0
      },
      answered: null,
      game: true,
      question: list[0]
    });
  };

  nextQuestion = () => {
    let actualQuestionNumber = this.state.questionNumber;
    let gameStatus = true;
    const question = this.state.list[actualQuestionNumber];
    actualQuestionNumber++;
    if (this.state.list.length < actualQuestionNumber) gameStatus = false;

    this.setState({
      game: gameStatus,
      questionNumber: actualQuestionNumber,
      answered: null,
      question: question
    });
  };

  answerQuestion = id => {
    let numAnswered = this.state.context.numAnswered;
    let numCorrect = this.state.context.numCorrect;
    if (id === this.state.question.correct) {
      numCorrect++;
    }
    const context = { numCorrect: numCorrect, numAnswered: ++numAnswered };
    this.setState({ answered: id, context: context });
  };

  render() {
    let actualGame = (
      <div>
        <p>END</p>
        <p>
          <Button onClick={this.resetGame}>Reset</Button>
        </p>
      </div>
    );
    if (this.state.game) {
      actualGame = (
        <Game
          question={this.state.question}
          answered={this.state.answered}
          answerQuestion={this.answerQuestion}
          nextQuestion={this.nextQuestion}
        />
      );
    }
    return (
      <div className='App'>
        <main className='App-body'>
          <p>Correctas: {this.state.context.numCorrect}</p>
          <p>Contestadas: {this.state.context.numAnswered}</p>
          <p>Nº de preguntas: {this.state.list.length}</p>
          {actualGame}
        </main>
      </div>
    );
  }
}

export default App;
