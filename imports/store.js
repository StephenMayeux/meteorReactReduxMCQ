import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Questions from './api/questions';
import rootReducer from './reducers/index';

// const middleware = [thunk];

const store = applyMiddleware(thunk)(createStore)(rootReducer);
export default store;

export const history = syncHistoryWithStore(browserHistory, store);

Tracker.autorun(() => {
  store.dispatch({
    type: 'SET_QUESTIONS',
    questions: Questions.find().fetch(),
  });
});
