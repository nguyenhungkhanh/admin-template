import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../layouts/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={() => <h1>Login</h1>} />
        <Route>
          <Layout>
            <Switch>
              <Route path='/' exact component={() => <h1>Home</h1>} />
              <Route path='/about' component={() => <h1>About</h1>} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
