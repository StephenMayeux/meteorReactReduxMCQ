import React from 'react';
import { Link } from 'react-router';

export default function Main({ checkAnswer, children, questions, questionAnswered }) {
  return (
    <div>
      {questions.map(({ _id, questionNumber }) => (
        <li key={_id}>
          <Link to={`/question/${questionNumber}`}>
            {`question: ${questionNumber}`}
          </Link>
        </li>
      ))}

      {children && React.cloneElement(children, {
        questions: questions,
        checkAnswer: checkAnswer,
        questionAnswered: questionAnswered,
      })}
    </div>
  );
}

Main.propTypes = {
  checkAnswer: React.PropTypes.func,
  questionAnswered: React.PropTypes.func,
  children: React.PropTypes.object,
  questions: React.PropTypes.array,
};
