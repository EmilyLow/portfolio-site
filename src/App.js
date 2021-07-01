
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
       
    </GridDiv>
  );
}

export default App;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1 fr 1fr 1fr;
  grid-template-rows: 10% 100px 100px 80px auto;
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