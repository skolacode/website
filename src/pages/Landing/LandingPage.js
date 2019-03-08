import React, { Component } from 'react'
import { Menu, Grid, Container } from 'semantic-ui-react'
import { 
  Navbar, Border, BannerSection, LeftGridTitleContainer, LeftGridTitle, RigthGrid 
} from '../../styles/LandingPageStyle'
import Posts from './Layout/Posts';



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

        <BannerSection>
          Image / Banner will be here
        </BannerSection>

        <Container>
          <Grid>
            <Grid.Column width={11}>

              <LeftGridTitleContainer>
                <LeftGridTitle>
                  Stories
                </LeftGridTitle>
              </LeftGridTitleContainer>
              <Posts />
            </Grid.Column>

            <Grid.Column width={4}>
              <RigthGrid>
                <h1>Courses</h1>
              </RigthGrid>
            </Grid.Column>
          </Grid>
        </Container>

      </React.Fragment>
    )
  }
}