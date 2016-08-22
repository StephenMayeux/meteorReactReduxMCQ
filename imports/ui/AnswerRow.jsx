import React from 'react';

export default function AnswerRow({ isQuestionAnswered, questionAnswered, answer, databaseQuestionId, questionId, checkAnswer }) {
  let styles = {};
  const { goodAnswer, checked, disabled, answerText } = answer;

  if (isQuestionAnswered && answer.goodAnswer) {
    styles = {
      li: {
        backgroundColor: 'green',
      },
    };
  } else if (isQuestionAnswered && !goodAnswer && checked) {
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
        value={answerText}
        onClick={() => questionAnswered(answer, databaseQuestionId)}
        onChange={() => checkAnswer(databaseQuestionId, questionId)}
        checked={checked}
        disabled={disabled}
      />
      {answerText}
    </li>
  );
}

AnswerRow.propTypes = {
  questionAnswered: React.PropTypes.func,
  answer: React.PropTypes.object,
  databaseQuestionId: React.PropTypes.string,
  questionId: React.PropTypes.number,
  isQuestionAnswered: React.PropTypes.bool,
  checkAnswer: React.PropTypes.func,
};
