import styled from 'styled-components'

const Navbar = styled.div`
  padding-right: 50px;
  padding-left: 50px; 
  margin-top: -10px;
  margin-bottom: -10px;
`;

const Border = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

const BannerSection = styled.div `
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// TODO: check if this left and right grid style same or not, if same merge it to one style
const LeftGridTitleContainer = styled.div`
  border-bottom: #eeeeee;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 10px;
  margin-bottom: 25px;
`;

const LeftGridTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  font-family: sans-serif;
`;

const RigthGridTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  font-family: sans-serif;
`;

const PostContainer = styled.div`
  height: 180px;
`;

const CoursesContainer = styled.div`
  height: 180px;
`;

export {
  Navbar,
  Border,
  BannerSection,
  LeftGridTitleContainer,
  LeftGridTitle,
  RigthGridTitle,
  PostContainer,
  CoursesContainer,
}
