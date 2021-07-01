
import './App.css';

import styled from 'styled-components';


function App() {
  return (
    <GridDiv>
     
      <Contact>Contact Me</Contact>
        <StyledHeader>
        <h1>Emily Low</h1>
        <h2>Full Stack Software Developer</h2>
        </StyledHeader>
        <ProjectBorder>
          <h4>My Projects</h4>
        </ProjectBorder>
        <BigProjectPicture>
          <a href="https://placeholder.com/"><img src = "https://via.placeholder.com/200x150"/></a>
        </BigProjectPicture>
        <BigProjectDesc>
          <h5> Convention Scheduler</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, enim ac finibus efficitur, turpis mi iaculis ligula, non condimentum risus libero nec magna. Donec scelerisque dui in nisi laoreet tincidunt. Ut efficitur </p>

        </BigProjectDesc>

        <SmallProjectPicA>
          <a href="https://placeholder.com/"><img src = "https://via.placeholder.com/150"/></a>
        </SmallProjectPicA>
        <SmallProjectDescA>
          <h5>Flexible Calendar</h5>
          <p>In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </p>
        </SmallProjectDescA>

        <SmallProjectPicB>
          <a href="https://placeholder.com/"><img src = "https://via.placeholder.com/150"/></a>
        </SmallProjectPicB>
        <SmallProjectDescB>
          <h5>Checkers</h5>
          <p>In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </p>
        </SmallProjectDescB>
    </GridDiv>
  );
}

export default App;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: [first] 1fr 1fr [midpoint] 1fr  1fr [last];
  grid-template-rows: 10% 150px 60px 300px 300px auto;
  //background-color: grey;
`;

const Contact = styled.p`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;

`;

const StyledHeader = styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  //background-color: blue;

`;

//Items can overlap
const ProjectBorder = styled.div`

  grid-column: first / last;
  grid-row: 3;
  border-bottom: 1px solid gray;

`;

const BigProjectPicture = styled.div`
  grid-column: first / midpoint;
  grid-row: 4;
  border-bottom: 1px solid grey;
`;

const BigProjectDesc = styled.div`
  grid-column: midpoint / last;
  grid-row: 4
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
`;

const SmallProjectPicA = styled.div`

  grid-column: first / 2;
  grid-row: 5;

`;

const SmallProjectDescA = styled.div`
  border-right: 1px solid grey;
  grid-column: 2 / midpoint;
  grid-row: 5;
  display: flex;
  flex-direction: column;
`;

const SmallProjectPicB = styled.div`
  grid-column: midpoint / 4;
  grid-row: 5;

`;

const SmallProjectDescB = styled.div`
  grid-column: 4 / end;
  grid-row: 5;
  display: flex;
  flex-direction: column;
`;
