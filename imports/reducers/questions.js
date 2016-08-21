export default function questions(state = { questions: [] }, action) {
  switch (action.type) {
    case 'SET_QUESTIONS': {
      const state = { ...state, questions: action.questions };
      return state;
    }
    // case 'TOGGLE_SHOW_COMPLETED':
    //   return {...state, hideCompleted: !state.hideCompleted}
    default:
      return state;
  }
}
