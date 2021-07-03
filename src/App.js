
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
          <ProjectHeader>My Projects</ProjectHeader>
        </ProjectBorder>
        <BigProjectPicture src = {conventionImage}/>
    
        <BigProjectDesc>
          <StyledH4> Convention Scheduler</StyledH4>
          <a href=''>Visit Site</a>
          <a href=''>Github</a>
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, enim ac finibus efficitur, turpis mi iaculis ligula, non condimentum risus libero nec magna. Donec scelerisque dui in nisi laoreet tincidunt. Ut efficitur </StyledP>
          <RectHolder>
            <Rect>React</Rect>
            <Rect>Node.js</Rect>
            <Rect>SQLite</Rect>
            <Rect>Material-UI</Rect>
          </RectHolder>
        </BigProjectDesc>

        <TopBorder/>

        <SmallProjectA>
          <StyledH4>Flexible Calendar</StyledH4>
          <a href=''>Visit Site</a>
          <a href=''>Github</a>
          <PicA src={schedulerImage}/>
          <StyledP>Put to use in Convention Scheduler. In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </StyledP>
          <RectHolder>
            <Rect>React</Rect>
            <Rect>Material-UI</Rect>
            <Rect>Styled-Components</Rect>
          </RectHolder>
        </SmallProjectA>

        <VerticalBorder/>

        <SmallProjectB>
          <StyledH4>Checkers</StyledH4>
      
          <a href=''>Github</a>
          <PicB src={checkersImage}/>
          <StyledP>In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </StyledP>
          <RectHolder>
            <Rect>Java</Rect>
            
          </RectHolder>
        </SmallProjectB>
       

     

    </GridDiv>
  );
}

export default App;


//Possibly dark blue header bar and borders/boxes? Darker than water image.

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: [first] 1fr 1fr [midpoint] 1fr  1fr [last];
  grid-template-rows: 5% 200px 150px 500px 300px 300px auto;
 
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

const RectHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  
`;

const Rect = styled.a`
  text-decoration: none;
  color: #2d5864;
  border: 1px solid #2d5864;
  padding: 0.5em;
  margin: 0.3em;

`;


const StyledHeader = styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

`;

const ProjectHeader = styled.h3`
  margin-top: 100px;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;

`;

const StyledH4 = styled.h4`
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
`;

const StyledP = styled.h4`
  
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
