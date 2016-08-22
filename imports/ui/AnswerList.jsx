import React from 'react';

import AnswerRow from './AnswerRow';


export default function AnswerList({ question,
  checkAnswer, questionId, questionAnswered, databaseQuestionId, isQuestionAnswered }) {
  return (
    <div>
      {question.questionText}
      {question.answers.map((answer) =>
          <AnswerRow
            key={answer.answerNumber}
            answer={answer}
            checkAnswer={checkAnswer}
            questionId={questionId}
            questionAnswered={questionAnswered}
            databaseQuestionId={databaseQuestionId}
            isQuestionAnswered={isQuestionAnswered}
          />
      )}
    </div>
  );
}

AnswerList.propTypes = {
  question: React.PropTypes.object,
  checkAnswer: React.PropTypes.func,
  questionId: React.PropTypes.number,
  questionAnswered: React.PropTypes.func,
  databaseQuestionId: React.PropTypes.string,
  isQuestionAnswered: React.PropTypes.bool,
};
