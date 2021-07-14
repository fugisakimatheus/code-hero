import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from 'layout'
import features from 'router/features'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {features.map(feature => (
            <Route key={feature.id} path={feature.path} exact>
              {feature.component && <feature.component />}
            </Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
