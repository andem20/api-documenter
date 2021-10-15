import React from 'react';
import Start from './views/Start';
import AddEndpoint from './views/AddEndpoint';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function ApiDocsAccordion() {

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/endpoint/add">
            <AddEndpoint />
          </Route>
        </Switch>
    </Router>
  );
}
