import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react'
import { PostContainer } from '../../../styles/LandingPageStyle'

class Posts extends React.PureComponent {
  render() {
    return (
      [1, 2, 3, 4, 5, 6].map((each, k) => (

        <PostContainer
          key={k}
        >
          <Grid>

            <Grid.Column width={4}>
              <Image src='https://images.unsplash.com/photo-1485178594207-7ea7f2318cf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' size='small' floated='right' />
            </Grid.Column>

            <Grid.Column width={12}>
              <Header as='h3'>What is concept</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. 
              </p>
            </Grid.Column>
          </Grid>
        </PostContainer>
      ))
    );
  }
}

export default Posts;