import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LAYOUT_NAME } from '../configs'
import Layout from '../layouts/index'

import routes from '../routes'

function App() {
  return (
    <Router>
      {routes.map((route: any) => {
        const items = route?.items || []

        const routeContent = (
          <Switch key={route.layout}>
            {items.map((item: any) => (
              <Route
                key={item.path}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            ))}
          </Switch>
        )

        if (route.layout === LAYOUT_NAME.MAIN) {
          return <Layout key={route.layout}>{routeContent}</Layout>
        }

        return routeContent
      })}
    </Router>
  )
}

export default App
