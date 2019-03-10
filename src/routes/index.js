import React, { Fragment } from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom'
import routes from './routes'
import { Navbar, Border } from '../styles/LandingPageStyle'
import { Menu, Grid, Container } from 'semantic-ui-react'

class Main extends React.PureComponent {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

  return (
    <Router>
      <Fragment>
        <Navbar>
          <Menu text size="massive" stackable={true}>
            <Menu.Item 
              name='SkolaCode' 
              onClick={this.handleItemClick} 
            />

            <Menu.Menu position='right'>
              <Menu.Item
                name='courses'
                // active={activeItem === 'courses'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='events'
                // active={activeItem === 'events'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Navbar>
        
        <Border />
        { routes.map((each, k) => 
            <Route key={k} {...each} />
        )}
      </Fragment>
    </Router>  
  );
  }
}

export default Main;
