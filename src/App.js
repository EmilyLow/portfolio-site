
import './App.css';

import styled from 'styled-components';
import waterBackground from "./images/Ivan_Cajina_Water.jpeg";
import checkersImage from "./images/checkers_example.png";
import conventionImage from "./images/convention_example.png";
import schedulerImage from "./images/scheduler_example.png";



function App() {
  return (
  <ParentGrid>
    <GridDiv>
     
      <ContactBar>
        <Contact>Contact Me:</Contact>
        <Icon href="mailto:emilymlow00@gmail.com"> <i class="bi bi-envelope" style={{color: "black", fontSize: "1.4rem"}}/></Icon>
        <Icon href="https://github.com/EmilyLow/"> <i class="bi bi-github" style={{color: "black",fontSize: "1.4rem"}}/></Icon>
        <Icon href="https://www.linkedin.com/in/emily-low-49433a12a/"> <i class="bi bi-linkedin" style={{color: "black", fontSize: "1.4rem"}}/></Icon>
      </ContactBar>
      
  
     
        <Background/>
        <StyledHeader>
        <StyledH1>Emily Low</StyledH1>
        <StyledH2>Full Stack Software Developer</StyledH2>
       
        <ResumeButton>Download Resume</ResumeButton>
        </StyledHeader>
        <ProjectBorder>
          <ProjectHeader>My Projects</ProjectHeader>
        </ProjectBorder>
        
        <BigProjectPicture src = {conventionImage}/>
    
        <BigProjectDesc>
          <StyledH4> Convention Scheduler</StyledH4>
          <ButtonHolder>
            <LinkButton href=''>Visit Site</LinkButton>
            <LinkButton href='https://github.com/EmilyLow/convention-planner'>Github</LinkButton>
          </ButtonHolder>
          
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
          <ButtonHolder>
            <LinkButton href=''>Visit Site</LinkButton>
            <LinkButton href='https://github.com/EmilyLow/event-scheduler'>Github</LinkButton>
          </ButtonHolder>
          <PicHolder>
            <PicA src={schedulerImage}/>
          </PicHolder>
          
          <MarginP>Put to use in Convention Scheduler. In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </MarginP>
          <RectHolder>
            <Rect>React</Rect>
            <Rect>Material-UI</Rect>
            <Rect>Styled-Components</Rect>
          </RectHolder>
        </SmallProjectA>

        <VerticalBorder/>

        <SmallProjectB>
          <StyledH4>Checkers</StyledH4>
          <ButtonHolder>
            <LinkButton href='https://github.com/EmilyLow/Checkers'>Github</LinkButton>
          </ButtonHolder> 
          <PicHolder> 
             <PicB src={checkersImage}/>
          </PicHolder>
          
          <MarginP>In aliquet, nunc a commodo tempus, libero turpis pharetra libero, ac convallis eros tellus eget sapien. Morbi laoreet scelerisque enim, vestibulum vestibulum elit cursus at. </MarginP>
          <RectHolder>
            <Rect>Java</Rect>
            
          </RectHolder>
        </SmallProjectB>
       

     

    </GridDiv>
   </ParentGrid>
  );
}

export default App;


//Possibly dark blue header bar and borders/boxes? Darker than water image.

const ParentGrid = styled.div`

  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  
`;
const GridDiv = styled.div`
  display: grid;

  grid-template-columns: [first] minmax(150px, 1fr) minmax(150px, 1fr) [midpoint] minmax(150px, 1fr)  minmax(150px, 1fr) [last];
  grid-template-rows: 50px 230px 120px [projects] 550px 300px 410px [projects-end] 100px auto;
 
  margin: 20px;

  // justify-content: center;
  //Make not true on mobile
  // width: 90%;
  // max-width: 1000px;

  width: 90%;
  max-width: 1200px;

  @media (max-width: 480px) {
    grid-template-rows: 50px 230px 120px [projects] 300px 500px 300px 410px [projects-end] 100px auto;

  }
  
`;

const ContactBar = styled.div`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Contact = styled.p`
  margin: 6px 12px;
  

`;

const Icon = styled.a`
  margin: 6px 6px;

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

const ButtonHolder = styled.div`
  display: flex;
`;

const LinkButton = styled.a`
  text-decoration: none;
  background: #2d5864;
  color: white;
  text-align: center;
  //Set hover
  display: inline-flex;
  align-items: center;

  padding: 0.6em 1em;
  margin: 1em;
  border-radius: 30px;
  //min-width: 62px;

  &:hover {
   opacity: 0.8;
  }
`;

const ResumeButton = styled.a`
  box-sizing: border-box;
  color: #2d5864;
  background: white;
  font-weight: bold;
  border: 2px solid white;
  padding: .7em 2em;
  //border-radius: 60px;
  border-radius: 50%;

  &:hover {
    
    background-color: Transparent;
   
    color: white;
    
  

   }


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

const StyledH1 = styled.h1`
   font-size: 3.6rem;
   margin-top: 15px;
   margin-bottom: 25px;

`;

const StyledH2 = styled.h2`
   margin-top: 0px;


`;

const ProjectHeader = styled.h3`
  margin-top: 70px;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
 
`;

const StyledH4 = styled.h4`
  margin: 20px 0px;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

const StyledP = styled.h4`
  
  font-style: light;
  font-weight: 300; 

  font-family: 'Open Sans', sans-serif;
 
`;

const MarginP = styled(StyledP)`
   margin-left: 25px;
   margin-right: 25px;

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
  
  @media (max-width: 480px) {
    grid-row: 6 / span 2;
  }

`;

const VerticalBorder = styled.div`

  grid-column: 2 / 3;
  grid-row: 5 / span 2;
  border-right: 2px solid #2d5864;


  @media (max-width: 480px) {
    grid-row: 6 / span 2;
  }


`;

//const BigProjectPicture = styled.div`
const BigProjectPicture = styled.img`
  grid-column: first / 4;
  grid-row: 4;
  
  max-width: 100%;
  height: 80%;
  justify-self: center;
  align-self: center;

  @media (max-width: 480px) {

    grid-column: first / last;
    grid-row: 5;
  }
  
`;

const BigProjectDesc = styled.div`
  grid-column: 4 / last;
  grid-row: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-left: 30px;

  @media (max-width: 480px) {

    grid-column: first / last;
    grid-row: 4;
  }

`;

//So I might want to do a single project box, and then use flexbox for columns. To put the titles on top

const SmallProjectA = styled.div`
  margin: 10px;
  //width: 50%;
  grid-column: first / midpoint;
  grid-row: 5 / span 3;
  display: flex;
  flex-direction: column;
  align-items: center;

 
  @media (max-width: 480px) {
    grid-row: 6 / span 3;
  }



`;

const SmallProjectB = styled.div`
  margin: 10px;
  //width: 50%;
  grid-column: midpoint / end;
  grid-row: 5 / span 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    grid-row: 6 / span 3;
  }


`;

//Could try putting images in equal fixed size-divs. Or relative fixed size divs. 
const PicA = styled.img`
   max-width: 100%;
  //min-height: 300px;
  //max-height: 450px;
  max-height: 100%;

`;

const PicB = styled.img`
   max-width: 100%;
  //min-height: 300px;
  // max-height: 450px;
    max-height: 100%;
    

`;

const PicHolder = styled.div`
  width: 100%;
  max-height: 350px;
 // min-height: 100px;
  // max-height: 80%;
  // min-height: 40%;
  display: flex;
  justify-content: center;
  margin-top: 20px
`;



