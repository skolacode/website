import React, { Component } from 'react'
import { Menu, Grid, Container } from 'semantic-ui-react'
import { Navbar, Border, BannerSection, LeftGrid, RigthGrid } from '../../styles/LandingPageStyle'

// TODO: 
// need to design the structure of the folder and child nicely

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    console.log('active: ', activeItem)

    return (
      <React.Fragment>
        <Navbar>
          <Menu text size="massive" stackable="true">
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

        <BannerSection>
          Image will be here
        </BannerSection>

        <Container>
          <div class="ui stackable four column grid">
              <Grid.Column width={10}>
            <LeftGrid>
                <h1>Stories</h1>
            </LeftGrid>
              </Grid.Column>

              <Grid.Column width={5}>
            <RigthGrid>
                <h1>Courses</h1>
            </RigthGrid>
              </Grid.Column>
          </div>
        </Container>

      </React.Fragment>
    )
  }
}