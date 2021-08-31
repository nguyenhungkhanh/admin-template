import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../layouts/index';
import Posts from '../pages/posts';
import CreatePost from '../pages/posts/create'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={() => <h1>Login</h1>} />
        <Route>
          <Layout>
            <Switch>
              <Route path='/' exact component={() => <h2>Home</h2>} />
              <Route path='/posts/:path?' exact>
                  <Switch>
                    <Route path='/posts' exact component={Posts} />
                    <Route path='/posts/create' component={CreatePost} />
                  </Switch>
              </Route>
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
