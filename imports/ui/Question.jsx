import React from 'react';
import { Link } from 'react-router';
import AnswerList from './AnswerList';
import { stringToNumber } from '../modules/stringToNumber';

export default function Question({ params, questions, checkAnswer, questionAnswered }) {
  function renderQuestions() {
    const questionIdToNumber = stringToNumber(params.questionId);
    for (const question of questions) {
      if (question.questionNumber === questionIdToNumber) {
        return (
          <AnswerList
            key={question._id}
            question={question}
            checkAnswer={checkAnswer}
            questionId={question.questionNumber}
            questionAnswered={questionAnswered}
            databaseQuestionId={question._id}
            isQuestionAnswered={question.isQuestionAnswered}
          />
        );
      }
    }
    return <div>No question with the number {params.questionId} in database</div>;
  }
  function renderOnlyPreviousLink(previousQuestion) {
    return (
      <div>
        <Link to={`/question/${previousQuestion}`}>Previous question</Link>
        {renderQuestions()}
      </div>
    );
  }
  function renderOnlyNextLink(nextQuestion) {
    return (
      <div>
        {renderQuestions()}
        <Link to={`/question/${nextQuestion}`}>Next question</Link>
      </div>
    );
  }
  function renderBothLink(previousQuestion, nextQuestion) {
    return (
      <div>
        <Link to={`/question/${previousQuestion}`}>Previous question</Link>
        {renderQuestions()}
        <Link to={`/question/${nextQuestion}`}>Next question</Link>
      </div>
    );
  }
  function renderNoLink() {
    return (
      <div>
        {renderQuestions()}
      </div>
    );
  }
  const isAllAnswered = questions.every(
    (question) => question.isQuestionAnswered
  );

  if (isAllAnswered) {
    const scores = [];
    questions.map(
      (question) => {
        let count = 0;
        question.answers.map(
          (answer) => {
            if (answer.checked && answer.goodAnswer) {
              count = count + 1;
            }
            return false;
          }
        );
        return scores.push(count);
      });
    const sum = scores.reduce((a, b) => a + b, 0);
    return <div>{`Your score is ${sum} / ${scores.length}`}</div>;
  }

  const previousQuestion = stringToNumber(params.questionId) - 1;
  const nextQuestion = stringToNumber(params.questionId) + 1;

  if (!previousQuestion && nextQuestion <= questions.length) {
    return renderOnlyNextLink(nextQuestion);
  } else if (!previousQuestion && nextQuestion > questions.length) {
    return renderNoLink();
  } else if (nextQuestion > questions.length) {
    return renderOnlyPreviousLink(previousQuestion);
  }
  return renderBothLink(previousQuestion, nextQuestion);
}

Question.propTypes = {
  checkAnswer: React.PropTypes.func,
  questions: React.PropTypes.array,
  questionAnswered: React.PropTypes.func,
  params: React.PropTypes.object,
};
