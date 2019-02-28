import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Navbar, Border } from '../styles/LandingPageStyle'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <React.Fragment>
        <Navbar>
          <Menu secondary size='massive'>
            <Menu.Item 
              name='SkolaCode' 
              onClick={this.handleItemClick} 
            />
            
            
            <Menu.Menu position='right'>
              <Menu.Item
                name='Courses'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Events'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>


          </Menu>
        </Navbar>
        
        <Border />
      </React.Fragment>
    )
  }
}