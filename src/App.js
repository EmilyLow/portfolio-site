
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
        {/* Make oval and white and change on hover */}
        <button>Download Resume</button>
        </StyledHeader>
        <ProjectBorder>
          <h3>My Projects</h3>
        </ProjectBorder>
        <BigProjectPicture src = {conventionImage}/>
          {/* <img src = {conventionImage}/>
        </BigProjectPicture> */}
        <BigProjectDesc>
          <StyledH4> Convention Scheduler</StyledH4>
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, enim ac finibus efficitur, turpis mi iaculis ligula, non condimentum risus libero nec magna. Donec scelerisque dui in nisi laoreet tincidunt. Ut efficitur </StyledP>

        </BigProjectDesc>

        <TopBorder/>

        <SmallProjectA>
          <StyledH4>Flexible Calendar</StyledH4>
          <PicA src={schedulerImage}/>
          <StyledP>Put to use in Convention Scheduler. In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </StyledP>
        </SmallProjectA>

        <VerticalBorder/>

        <SmallProjectB>
          <StyledH4>Checkers</StyledH4>
          <PicB src={checkersImage}/>
          <p>In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </p>
        </SmallProjectB>
       

     

    </GridDiv>
  );
}

export default App;


//Possibly dark blue header bar and borders/boxes? Darker than water image.

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: [first] 1fr 1fr [midpoint] 1fr  1fr [last];
  grid-template-rows: 5% 200px 60px 400px 300px 300px auto;
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
  align-items: center;
  // font-family: ltc-bodoni-175, serif;
  // font-style: normal;
  // font-weight: 400;
  //font-family: 'Roboto Slab', serif;
  font-family: 'Montserrat', sans-serif;

`;

const StyledH4 = styled.h4`
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
`;

const StyledP = styled.h4`
  // font-family: calluna, serif;
  font-style: light;
  font-weight: 300; 

  font-family: 'Open Sans', sans-serif;
`;

//Items can overlap
const ProjectBorder = styled.div`

  grid-column: first / last;
  grid-row: 3;

  
  border-bottom: 2px solid #2d5864;
 

`;

const TopBorder = styled.div`
  grid-column: first / last;
  grid-row: 5;  
  border-top: 2px solid #2d5864;
  

`;

const VerticalBorder = styled.div`

  grid-column: 2 / 3;
  grid-row: 5 / span 2;
  border-right: 2px solid #2d5864;



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

`;

//So I might want to do a single project box, and then use flexbox for columns. To put the titles on top

const SmallProjectA = styled.div`
  margin: 10px;

  grid-column: first / midpoint;
  grid-row: 5 / span 2;
  display: flex;
  flex-direction: column;
  align-items: center;



`;

const SmallProjectB = styled.div`
  margin: 10px;
  grid-column: midpoint / end;
  grid-row: 5 / span 2;
  display: flex;
  flex-direction: column;
  align-items: center;



`;

const PicA = styled.img`
  max-width: 100%;

`;

const PicB = styled.img`
  max-width: 100%;


`;

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
