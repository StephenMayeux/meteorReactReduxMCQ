import React, { Component, PropTypes } from 'react';

export function Answer2({ questionAnswered, answer, databaseQuestionId, questionId }) {
  let styles = {};
  if (questionAnswered && answer.goodAnswer) {
    styles = {
      li: {
        backgroundColor: 'green',
      },
    };
  } else if (questionAnswered && !answer.goodAnswer && answer.checked) {
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
        value={answer.answerText}
        onClick={() => this.props.questionAnswered(answer, databaseQuestionId)}
        onChange={() => this.props.checkAnswer(databaseQuestionId, questionId)}
        checked={answer.checked}
        disabled={answer.disabled}
      />
      {answer.answerText}
    </li>
  );
}
