export default function questions(state = { questions: [] }, action) {
  switch (action.type) {
    case 'SET_QUESTIONS': {
      const state = { ...state, questions: action.questions };
      return state;
    }
    default:
      return state;
  }
}
