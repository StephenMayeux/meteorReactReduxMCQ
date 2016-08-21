import React, { Component } from 'react';
import { Link } from 'react-router';
import Answer from './Answer';

export default class Question extends Component {
  renderQuestions() {
    const questionIdToNumber = this.filterInt(this.props.params.questionId);
    for (const question of this.props.questions) {
      if (question.questionNumber === questionIdToNumber) {
        return (
          <Answer
            key={question._id}
            question={question}
            checkAnswer={this.props.checkAnswer}
            questionId={question.questionNumber}
            questionAnswered={this.props.questionAnswered}
            databaseQuestionId={question._id}
          />
        );
      }
    }
    return <div>No question with the number {this.props.params.questionId} in database</div>;
  }
  filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
      return Number(value);
    }
    return NaN;
  }
  renderOnlyPreviousLink(previousQuestion) {
    return (
      <div>
        <Link to={`/question/${previousQuestion}`}>Previous question</Link>
        {this.renderQuestions()}
      </div>
    );
  }
  renderOnlyNextLink(nextQuestion) {
    return (
      <div>
        {this.renderQuestions()}
        <Link to={`/question/${nextQuestion}`}>Next question</Link>
      </div>
    );
  }
  renderBothLink(previousQuestion, nextQuestion) {
    return (
      <div>
        <Link to={`/question/${previousQuestion}`}>Previous question</Link>
        {this.renderQuestions()}
        <Link to={`/question/${nextQuestion}`}>Next question</Link>
      </div>
    );
  }
  renderNoLink() {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
  render() {
    const isAllAnswered = this.props.questions.every(
      (question) => question.questionAnswered
    );

    if (isAllAnswered) {
      const scores = [];
      this.props.questions.map(
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

    const previousQuestion = this.filterInt(this.props.params.questionId) - 1;
    const nextQuestion = this.filterInt(this.props.params.questionId) + 1;

    if (!previousQuestion && nextQuestion < this.props.questions.length) {
      return this.renderOnlyNextLink(nextQuestion);
    } else if (!previousQuestion && nextQuestion > this.props.questions.length) {
      return this.renderNoLink();
    } else if (nextQuestion > this.props.questions.length) {
      return this.renderOnlyPreviousLink(previousQuestion);
    }
    return this.renderBothLink(previousQuestion, nextQuestion);
  }
}

Question.propTypes = {
  checkAnswer: React.PropTypes.func,
  questions: React.PropTypes.array,
  questionAnswered: React.PropTypes.func,
  params: React.PropTypes.object,
};
