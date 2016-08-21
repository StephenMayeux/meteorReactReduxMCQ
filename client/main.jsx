import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '/imports/store';
import Question from '../imports/ui/Question';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  const router = (
    <Provider store={store}>
      <Router history={ history }>
        <Route path="/" component={ App } >
          <Route path="/question/:questionId" component={Question} />
        </Route>
      </Router>
    </Provider>
  );
  render(router, document.getElementById('render-target'));
});
