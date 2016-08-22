import Questions from '../imports/api/questions.js';
import Answers from '../imports/api/answers.js';

if (Questions.find().count() === 0) {
  Questions.insert(
    {
      questionText: 'How much is a gogol ?',
      questionNumber: 1,
      isQuestionAnswered: false,
      answers: [
        {
          answerNumber: 1,
          answerText: '10^10',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
        {
          answerNumber: 2,
          answerText: '10^100',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
        {
          answerNumber: 3,
          answerText: '10^1000',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
      ],
    },
    {
      questionText: 'How much medals did the UK win in Rio for Olympics Games ?',
      questionNumber: 1,
      isQuestionAnswered: false,
      answers: [
        {
          answerNumber: 1,
          answerText: '59',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
        {
          answerNumber: 2,
          answerText: '64',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
        {
          answerNumber: 3,
          answerText: '67',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
      ],
    },
    {
      questionText: 'Who is the Prime Minister of UK ?',
      questionNumber: 1,
      isQuestionAnswered: false,
      answers: [
        {
          answerNumber: 1,
          answerText: 'Theresa May',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
        {
          answerNumber: 2,
          answerText: 'Boris Johnson',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
        {
          answerNumber: 3,
          answerText: 'David Cameron',
          checked: false,
          disabled: false,
          goodAnswer: false,
        },
      ],
    }
  );

  Answers.insert(
    {
      questionNumber: 1,
      goodAnswerNumber: 2,
    },
    {
      questionNumber: 2,
      goodAnswerNumber: 3,
    },
    {
      questionNumber: 3,
      goodAnswerNumber: 1,
    }
  );
}
