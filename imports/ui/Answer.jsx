import React, { Component, PropTypes } from 'react';

import { Answer2 } from './Answer2';


export default class Answer extends Component {
  render() {
    // if (this.props.question.questionAnswered){
    //   return <div>ANSWERED</div>;
    // }
    return (
      <div>
        {this.props.question.questionText}
        {this.props.question.answers.map((answer) =>
            <Answer2
              key={answer.answerNumber}
              answer={answer}
              checkAnswer={this.props.checkAnswer}
              questionId={this.props.questionId}
              questionAnswered={this.props.questionAnswered}
              databaseQuestionId={this.props.databaseQuestionId}
            />
        )}
      </div>
    );
  }
}
