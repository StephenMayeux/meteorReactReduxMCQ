import React from 'react';

import { AnswerRow } from './AnswerRow';


export default function AnswerList({ question,
  checkAnswer, questionId, questionAnswered, databaseQuestionId, isQuestionAnswered }) {
  // if (this.props.question.isQuestionAnswered){
  //   return <div>ANSWERED</div>;
  // }
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
  databaseQuestionId: React.PropTypes.object,
  isQuestionAnswered: React.PropTypes.bool,
};
