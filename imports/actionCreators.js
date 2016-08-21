import { Meteor } from 'meteor/meteor';
import { Answers } from './api/answers';

export function checkAnswer(databaseQuestionId, questionId) {
  return () => {
    const answers = Answers.findOne({ questionNumber: questionId });
    Meteor.call('questions.checkAnswer', databaseQuestionId, answers);
  };
}

export function questionAnswered(answer, databaseQuestionId) {
  return () => {
    const answerChecked = `answers.${answer.answerNumber - 1}.checked`;
    Meteor.call('questions.questionAnswered', answer, databaseQuestionId, answerChecked);
  };
}
