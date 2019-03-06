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
  /* background-color: lightgreen */
  text-align: center;
`;

const LeftGrid = styled.div`
  text-align: center;
`;

const RigthGrid = styled.div`
  text-align: center;
`;

export {
  Navbar,
  Border,
  BannerSection,
  LeftGrid,
  RigthGrid,
}
