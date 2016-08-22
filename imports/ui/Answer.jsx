import React, { Component, PropTypes } from 'react';

import { AnswerRow } from './AnswerRow';


export default class Answer extends Component {
  render() {
    // if (this.props.question.isQuestionAnswered){
    //   return <div>ANSWERED</div>;
    // }
    return (
      <div>
        {this.props.question.questionText}
        {this.props.question.answers.map((answer) =>
            <AnswerRow
              key={answer.answerNumber}
              answer={answer}
              checkAnswer={this.props.checkAnswer}
              questionId={this.props.questionId}
              questionAnswered={this.props.questionAnswered}
              databaseQuestionId={this.props.databaseQuestionId}
              isQuestionAnswered={this.props.isQuestionAnswered}
            />
        )}
      </div>
    );
  }
}
