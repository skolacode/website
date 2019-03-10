import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react'
import { CoursesContainer } from '../../../styles/LandingPageStyle'

class Courses extends React.PureComponent {
  render() {
    return (
      [1, 2, 3, 4, 5, 6].map((each, k) => (

        <CoursesContainer
          key={k}
        >
          <Header as='h3'>Microsoft Office</Header>
          {/* Max 2 line */}
          <p>
            Word, Excel, and Power Point
          </p>

          <button>
            More Info...
          </button>
        </CoursesContainer>
      ))
    );
  }
}

export default Courses;