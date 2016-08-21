import React, { Component, PropTypes } from 'react';

export class Answer2 extends Component {
  render() {
    let styles = {};
    if (this.props.questionAnswered && this.props.answer.goodAnswer) {
      styles = {
        li: {
          backgroundColor: 'green',
        },
      };
    } else if (this.props.questionAnswered && !this.props.answer.goodAnswer && this.props.answer.checked) {
      styles = {
        li: {
          backgroundColor: 'red',
        },
      };
    } else {
      styles = {
        li: {},
      };
    }
    return (
      <li style={styles.li}>
        <input
          type="radio"
          name="answer"
          value={this.props.answer.answerText}
          onClick={() => this.props.questionAnswered(this.props.answer, this.props.databaseQuestionId)}
          onChange={() => this.props.checkAnswer(this.props.databaseQuestionId, this.props.questionId)}
          checked={this.props.answer.checked}
          disabled={this.props.answer.disabled}
        />
        {this.props.answer.answerText}
      </li>
    );
  }
}
