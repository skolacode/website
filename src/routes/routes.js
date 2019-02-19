import { LandingPage } from '../pages'
import { CourseLandingPage } from '../pages/courses'

const list = [
  {
    path: '/',
    component: LandingPage,
    exact: true
  },
  {
    path: '/courses',
    component: CourseLandingPage,
    exact: true
  },
]

export default list