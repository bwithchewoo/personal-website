import React, {useState} from 'react';
import './Work.css'
import { ChevronLeft } from 'react-feather'
import { ChevronRight } from 'react-feather'

const CARDS = 5;
const MAX_VISIBILITY = 3;

const Card = ({ title, content, company, dates, additionalContent }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front">
          <h1>{title}</h1>
          <p>{company}</p>
          <p>{dates}</p>
          <p>{content}</p>
        </div>
        <div className="back">
          <p>{additionalContent}</p> 
        </div>
      </div>
    );
    };

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className='carousel'>
      {active > 0 && (
        <button className='nav left' onClick={() => setActive(i => i - 1)}>
          <ChevronLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className='nav right' onClick={() => setActive(i => i + 1)}>
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

const Work = () => {
    const cards = [
        {
          title: 'Bookkeeper',
          company: 'Altman, Greenfield & Selvaggi',
          dates: 'October 2021 to July 2022',
          content: 'New York, NY',
          additionalContent: "its me"
        },
        {
          title: 'Card 2',
          company: 'Company 2',
          dates: '2019-2020',
          content: 'New York, NY',
          additionalContent: "its me"
        },
        {
          title: 'Card 3',
          company: 'Company 3',
          dates: '2018-2019',
          content: 'New York, NY',
          additionalContent: "its me"
        },
        {
          title: 'Card 4',
          company: 'Company 4',
          dates: '2017-2018',
          content: 'New York, NY',
          additionalContent: "its me"
        },
        {
          title: 'Card 5',
          company: 'Company 5',
          dates: '2016-2017',
          content: 'New York, NY',
          additionalContent: "its me"
        },
      ];
    
      return (
        <div className='app'>
          <Carousel>
            {cards.map((card, i) => (
              <Card
                key={i}
                title={card.title}
                company={card.company}
                dates={card.dates}
                content={card.content}
                additionalContent={card.additionalContent}
              />
            ))}
          </Carousel>
        </div>
      );
}

export default Work;
