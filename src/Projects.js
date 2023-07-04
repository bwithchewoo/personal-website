import React, {useState, useRef, useEffect} from 'react';
import './Projects.css'
import drink from './drink.png'
import league from './League.png'
import merge from './Merge.png'
import match from './Match.png'
import Uno from './Uno.png'

const Card = ({ dataImage, header, content, href }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
    const cardRef = useRef(null);
    const bgRef = useRef(null);
    const handleClick = () => {
        window.open(href, "_blank");
      };
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const offsetX = e.pageX - rect.left - rect.width / 2;
      const offsetY = e.pageY - rect.top - rect.height / 2;
      setMouseX(offsetX);
      setMouseY(offsetY);
    };
  
    const handleMouseEnter = () => {
      clearTimeout(mouseLeaveDelay);
    };
  
    const handleMouseLeave = () => {
      const delay = setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000);
      setMouseLeaveDelay(delay);
    };
  
    const mousePX = mouseX / width;
    const mousePY = mouseY / height;
  
    const cardStyle = {
        transform: `rotateY(${mousePX * 20}deg) rotateX(${mousePY * -20}deg)`,
      };
    
      const bgStyle = {
        transform: `translateX(${mousePX * -30}px) translateY(${mousePY * -20}px)`,
      };
  
      useEffect(() => {
        const handleCardMounted = () => {
          setWidth(cardRef.current.offsetWidth);
          setHeight(cardRef.current.offsetHeight);
        };
    
        handleCardMounted();
        window.addEventListener('resize', handleCardMounted);
    
        return () => {
          window.removeEventListener('resize', handleCardMounted);
        };
      }, []);
  
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <div
        className="project-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className="project" style={cardStyle}>
          <div className="project-bg" style={{...bgStyle, backgroundImage: `url(${dataImage})` }}></div>
          <div className="project-info">
            <h1 id="header">{header}</h1>
            <p id="content">{content}</p>
          </div>
        </div>
      </div>
      </a>
    );
  };
const Projects = () => {
    return (
       

        <div id="app" className="project-container">
            <Card
          dataImage={Uno}
          header="Uno Game"
          content="Get rid of all your cards before your opponent!"
          href="https://github.com/bwithchewoo/uno_game"
        />
         <Card
          dataImage={match}
          header="Match 3 Game"
          content="Match 3 Game, earn achievements and make friends."
          href="https://github.com/bwithchewoo/match-3-game"
        />
        
        <Card
          dataImage={merge}
          header="Number Merge Game"
          content="Merge Numbers to make biggest number."
          href="https://github.com/bwithchewoo/merge-game-frontend"
        />
        <Card
          dataImage={league}
          header="League of Legends"
          content="Champion search by role and/or name." 
          href="https://github.com/bwithchewoo/champion-search"
        />
        <Card
          dataImage={drink}
          header="Drink Recs"
          content="Search for a drink recommendation."
          href="https://github.com/bwithchewoo/drink-recs"
        />
       
      </div>
    )
}

export default Projects;
