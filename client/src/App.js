import React from 'react';
import Start from './views/Start';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function ApiDocsAccordion() {

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
    </Router>
  );
}
