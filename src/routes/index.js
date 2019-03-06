import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import routes from './routes'

const Main = () => {
  
  return (
    <Router>
      <Fragment>
        { routes.map((each, k) => 
            <Route key={k} {...each} />
        )}
      </Fragment>
    </Router>  
  );
}

export default Main;
