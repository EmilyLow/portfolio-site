
import './App.css';

import styled from 'styled-components';
import waterBackground from "./resources/Ivan_Cajina_Water.jpeg";

import conventionImage from "./resources/convention_example.png";
import schedulerImage from "./resources/scheduler_example.png";
import resume from "./resources/EmilyLow_Resume.pdf";
import checkersGIF from "./resources/Checkers_GIF.gif";



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
       
        <ResumeButton href={resume} download>Resume</ResumeButton>
        </StyledHeader>
        <ProjectBorder>
          <ProjectHeader>My Projects</ProjectHeader>
        </ProjectBorder>
        
        <BigProjectPicture src = {conventionImage}/>
    
        <BigProjectDesc>
          <StyledH4> Convention Scheduler</StyledH4>
          <ButtonHolder>
            <LinkButton href='https://dazzling-hugle-6bcc1d.netlify.app'>Visit Site</LinkButton>
            <LinkButton href='https://github.com/EmilyLow/convention-planner-frontend'>Github</LinkButton>
          </ButtonHolder>
          
          <StyledP>A convention planning website, that lets users look through all convention events, and add the ones that interest them to a personal calendar. Calendars can be saved by logging in. The website uses a custom calendar component, described in the 'Flexible Calendar' project. </StyledP>
          <RectHolder>
            <Rect>React</Rect>
            <Rect>Node.js</Rect>
            <Rect>PostgreSQL</Rect>
            <Rect>Material-UI</Rect>
          </RectHolder>
        </BigProjectDesc>

        <TopBorder/>

        <SmallProjectA>
          <StyledH4>Flexible Calendar</StyledH4>
          <ButtonHolder>
            <LinkButton href='https://quirky-turing-1d0d2f.netlify.app/'>Visit Site</LinkButton>
            <LinkButton href='https://github.com/EmilyLow/event-scheduler-frontend'>Github</LinkButton>
          </ButtonHolder>
          <PicHolder>
            <PicA src={schedulerImage}/>
          </PicHolder>
          
          <MarginP>A calendar created from scratch, using javascript Date objects and CSS grid. The calendar automatically arranges added events, and allows the user to set the calendar's time and date ranges.</MarginP>
          <MarginRectHolder>
            <Rect>React</Rect>
            <Rect>Material-UI</Rect>
            <Rect>Styled-Components</Rect>
          </MarginRectHolder>
        </SmallProjectA>

        <VerticalBorder/>
        <SecondBorder/>
        <SmallProjectB>
          <StyledH4>Checkers</StyledH4>
          <ButtonHolder>
            <LinkButton href='https://github.com/EmilyLow/Checkers'>Github</LinkButton>
          </ButtonHolder> 
          <PicHolder> 
             <PicB src={checkersGIF}/>
          </PicHolder>
          
          <MarginP>A basic checkers game. The user can play against another person, or against the computer. The computer player uses a minmax algorithm to look ahead three rounds and predict the best move.</MarginP>
          <MarginRectHolder>
            <Rect>Java</Rect>
            
          </MarginRectHolder>
        </SmallProjectB>
       

     

    </GridDiv>
   </ParentGrid>
  );
}

export default App;




const ParentGrid = styled.div`

  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  
`;
const GridDiv = styled.div`
  display: grid;

  grid-template-columns: [first] minmax(150px, 1fr) minmax(150px, 1fr) [midpoint] minmax(150px, 1fr)  minmax(150px, 1fr) [last];
  grid-template-rows: 50px 230px 120px [projects] 610px 300px 410px [projects-end] 100px auto;
 
  margin: 10px;


  width: 90%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-rows: 50px 260px 120px [projects]  350px 400px 300px 410px  [projects-end] 100px auto;


  }

  @media (max-width: 480px) {
    
    grid-template-rows: 50px 250px 120px [projects] 300px 420px 750px 750px [projects-end] 100px auto;
    width: 100%;

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
  //margin: 6px 12px;
  margin-right: 12px;
  margin-bottom: 22px;
  white-space: nowrap;
  font-size: 1.2rem;

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

  @media (max-width: 1024px) {
   justify-content: center;
  }
  
`;

const MarginRectHolder = styled(RectHolder)`

  @media (min-width: 1024px) {
    margin-left: 50px;
  }
   
 

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
  
  display: inline-flex;
  align-items: center;

  padding: 0.6em 1em;
  margin: 1em;
  border-radius: 30px;
  

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
 
  border-radius: 50%;
  text-decoration: none;

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
   text-align: center;

   @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 20px;
   }

`;

const StyledH2 = styled.h2`
   margin-top: 0px;
   text-align: center;

   @media (max-width: 480px) {
      margin-bottom: 25px;
   }

`;

const ProjectHeader = styled.h3`
  margin-top: 70px;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 480px) {
    margin-left: 5px;
 }
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

  @media (max-width: 1024px) {
    grid-row: 6 / span 2;
    margin-top: 10px;

  }
  
  // @media (max-width: 480px) {
  //   grid-row: 6 / span 2;
  // }

`;

const SecondBorder = styled.div`

  
  @media (max-width: 480px) {
    grid-row: 7 / span 2;
    grid-column: first / last;
    border-top: 2px solid #2d5864;
  }

`;

const VerticalBorder = styled.div`

  grid-column: 2 / 3;
  grid-row: 5 / span 2;
  border-right: 2px solid #2d5864;

  @media (max-width: 1024px) {
    grid-row: 6 / span 2;
    margin-top: 10px;

  }

  @media (max-width: 480px) {
    border: none;
  }


`;


const BigProjectPicture = styled.img`
  grid-column: first / 4;
  grid-row: 4;
  
  max-width: 100%;
  height: 80%;
  justify-self: center;
  align-self: center;



  @media (max-width: 1024px) {
    width: auto;
    height: 100%;
   
    grid-column: first / last;
    grid-row: 5;

  }

  @media (max-width: 480px) {
    margin-top: 30px;
    max-width: 95%;
    height: auto;

  }

  
  
`;

const BigProjectDesc = styled.div`
  grid-column: 4 / last;
  grid-row: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-left: 30px;


  @media (max-width: 1024px) {

    grid-column: first / last;
    grid-row: 4;
  }

`;

//So I might want to do a single project box, and then use flexbox for columns. To put the titles on top

const SmallProjectA = styled.div`
  margin: 10px;

  grid-column: first / midpoint;
  grid-row: 5 / span 3;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 1024px) {
    grid-row: 6 / span 3;
  }


  @media (max-width: 480px) {
    grid-column: first / end;
    grid-row: 6;
  }



`;

const SmallProjectB = styled.div`
  margin: 10px;
  
  grid-column: midpoint / end;
  grid-row: 5 / span 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    grid-row: 6 / span 3;

  }

  @media (max-width: 480px) {
    grid-column: first / end;
    grid-row: 7;
  }


`;

//Could try putting images in equal fixed size-divs. Or relative fixed size divs. 
const PicA = styled.img`
   max-width: 100%;
  max-height: 100%;

`;

const PicB = styled.img`
   max-width: 100%;
    max-height: 100%;
    

`;

const PicHolder = styled.div`
  width: 100%;
  max-height: 350px;

  display: flex;
  justify-content: center;
  margin-top: 20px
`;



