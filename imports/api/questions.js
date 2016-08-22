import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Questions = new Mongo.Collection('questions');
export default Questions;

Meteor.methods({
  'questions.questionAnswered'(answer, databaseQuestionId, answerChecked) {
    Questions.update({
      _id: databaseQuestionId,
    }, {
      $set: {
        isQuestionAnswered: true,
        'answers.0.disabled': true,
        'answers.1.disabled': true,
        'answers.2.disabled': true,
        [answerChecked]: true,
      },
    });
  },
  'questions.checkAnswer'(databaseQuestionId, answers) {
    Questions.update({
      _id: databaseQuestionId,
      'answers.answerNumber': answers.goodAnswerNumber,
    }, {
      $set: {
        'answers.$.goodAnswer': true,
      },
    });
  },
});
