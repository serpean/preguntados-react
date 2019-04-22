import React, { Component } from 'react';
import Question from '../question/question';
import Counter from '../counter/counter';
import Roulette from '../roulette/roulette';

import { Button } from 'reactstrap';

import { spinHelper } from '../../util/spinHelper';

class Game extends Component {
  state = {
    openQuestion: false,
    context: {
      numCorrect: 0,
      numAnswered: 0
    },
    answered: null,
    question: {},
    length: 4
  };

  callApi = () => {
    return fetch('/question')
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  getQuestion = () => {
    return this.callApi()
      .then(res => {
        this.setState({
          question: res
        });
        return res;
      })
      .catch(err => console.log(err));
  };

  resetGame = () => {
    this.setState({
      openQuestion: false,
      context: {
        numCorrect: 0,
        numAnswered: 0
      },
      answered: null,
      question: {}
    });
  };

  nextQuestion = () => {
    this.setState({
      question: {},
      openQuestion: false,
      answered: null
    });
  };

  spin = () => {
    this.getQuestion()
      .then(res => spinHelper(res.type, this.openQuestion))
      .catch(err => console.log(err));
  };
  openQuestion = () => {
    this.setState({ openQuestion: true });
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
    let actualQuestion = <Roulette spin={this.spin} />;
    if (this.state.context.numAnswered === this.state.length) {
      actualQuestion = (
        <div>
          <div>END</div>
          <div>
            <Button onClick={this.resetGame}>Reset</Button>
          </div>
        </div>
      );
    } else if (this.state.openQuestion) {
      actualQuestion = (
        <Question
          question={this.state.question}
          answered={this.state.answered}
          answerQuestion={this.answerQuestion}
          nextQuestion={this.nextQuestion}
        />
      );
    }
    return (
      <div>
        <Counter
          numAnswered={this.state.context.numAnswered}
          numCorrect={this.state.context.numCorrect}
          length={this.state.length}
        />
        {actualQuestion}
      </div>
    );
  }
}

export default Game;
