
import './App.css';

import styled from 'styled-components';
import waterBackground from "./images/Ivan_Cajina_Water.jpeg";
import checkersImage from "./images/checkers_example.png";
import conventionImage from "./images/convention_example.png";
import schedulerImage from "./images/scheduler_example.png";

function App() {
  return (
    <GridDiv>
     
      <Contact>Contact Me</Contact>
        <Background/>
        <StyledHeader>
        <h1>Emily Low</h1>
        <h2>Full Stack Software Developer</h2>
        </StyledHeader>
        <ProjectBorder>
          <h4>My Projects</h4>
        </ProjectBorder>
        <BigProjectPicture src = {conventionImage}/>
          {/* <img src = {conventionImage}/>
        </BigProjectPicture> */}
        <BigProjectDesc>
          <h5> Convention Scheduler</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, enim ac finibus efficitur, turpis mi iaculis ligula, non condimentum risus libero nec magna. Donec scelerisque dui in nisi laoreet tincidunt. Ut efficitur </p>

        </BigProjectDesc>

        <SmallProjectPicA src={schedulerImage}/>

        <SmallProjectDescA>
          <h5>Flexible Calendar</h5>
          <p>Put to use in Convention Scheduler. In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </p>
        </SmallProjectDescA>

        <SmallProjectPicB src={checkersImage}/>

        <SmallProjectDescB>
          <h5>Checkers</h5>
          <p>In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </p>
        </SmallProjectDescB>
    </GridDiv>
  );
}

export default App;


//Possibly dark blue header bar and borders/boxes? Darker than water image.

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: [first] 1fr 1fr [midpoint] 1fr  1fr [last];
  grid-template-rows: 8% 200px 60px 400px 300px 300px auto;
  //background-color: grey;
  //place-items: center;
  //justify-items: center;
  margin: 20px;
`;

const Contact = styled.p`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;

`;

const Background = styled.div`
  grid-column: 1 / last;
  grid-row: 2;
  background-image: url(${waterBackground});

`;
const StyledHeader = styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  color: white;
  display: flex;
  flex-direction: column;


`;

//Items can overlap
const ProjectBorder = styled.div`

  grid-column: first / last;
  grid-row: 3;

  //Note, the bottom border isn't useful when this is the image directly
  border-bottom: 1px solid gray;

`;

//const BigProjectPicture = styled.div`
const BigProjectPicture = styled.img`
  grid-column: first / 4;
  grid-row: 4;
  //border-bottom: 1px solid grey;
  max-width: 100%;
  height: 80%;
  justify-self: center;
  align-self: center;

`;

const BigProjectDesc = styled.div`
  grid-column: 4 / last;
  grid-row: 4
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
`;

//So I might want to do a single project box, and then use flexbox for columns. To put the titles on top

const SmallProjectPicA = styled.img`

  grid-column: first / midpoint;
  grid-row: 5;
  max-width: 100%;
  justify-self: center;
  align-self: center;


`;

const SmallProjectDescA = styled.div`
  //border-right: 1px solid grey;
  grid-column: first / midpoint;
  grid-row: 6;
  display: flex;
  flex-direction: column;
`;

const SmallProjectPicB = styled.img`
  grid-column: midpoint / end;
  grid-row: 5;
  max-width: 80%;
  place-items: center;
  justify-self: center;
  align-self: center;


`;

const SmallProjectDescB = styled.div`
  grid-column: midpoint / end;
  grid-row: 6;
  display: flex;
  flex-direction: column;
`;
