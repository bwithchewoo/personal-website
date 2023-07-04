import React, {useState} from 'react';
import './Work.css'
import { ChevronLeft } from 'react-feather'
import { ChevronRight } from 'react-feather'


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
  const [active, setActive] = useState(0);
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
          className='business-card-container'
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
          additionalContent: (
            <div>
            <p>Performed day-to-day full charge bookkeeping functions for clients.</p>
            <p>Input information provided by clients in the form of invoices, bills, checks, or other registers.</p>
            <p>Performed check runs utilizing different software packages, mostly Datafaction with Imaging.</p>
            <p>Prepared journal entries, bank reconciliations, and payroll.</p>
            <p>Received and inputted clients' accounts payable invoices and generated payment.</p>
            <p>Prepared appropriate schedules and reports as requested by clients and partners.</p>
            <p>Created accounting systems and set up bank accounts, credit cards, and loans for new clients.</p>
          </div>
          )
        },
        {
          title: 'Accounting Manager',
          company: 'Jethmalani & Nallaseth PLLC',
          dates: 'March 2020 to October 2021',
          content: 'New York, NY',
          additionalContent: (<div>
            <p>Handled receivables and payables in the business, making sure that our firm gets paid for the work that we did by following up with clients regarding payments and sending them statements.</p>
            <p>Reconciled credit card statements and bank statements.</p>
            <p>Ensured that the firm has supplies that it needs such as checks, envelopes and other necessities even through Covid-19.</p>
            <p>Worked with the India Team in regards to evaluation invoices and India Office expenses.</p>
            <p>Onboarded new hires to the firm, giving them any information that they need and helping them acclimate to the new work environment.</p>
            <p>Processed payroll every two weeks and kept track of sick/vacation day usage by employees.</p>
            <p>Generate checks for the USCIS for our client's applications.</p>
            <p>During the lockdown, worked with our employees and employers to ensure a smooth transition to working remotely by having meetings and receiving daily reports. Made sure that our employees had access to necessary tools to keep working such as remote computer access, Box, email, Fedex and Slack.</p>
          </div>)
        },
        {
          title: 'Bookkeeper',
          company: 'Brighton Management',
          dates: 'February 2019 to March 2020',
          content: 'New York, NY',
          additionalContent: (<div>
            <p>Generated financial statements and facilitated account closing procedures each month for each property in the business.</p>
            <p>Processed rent payments and applied to tenant balances.</p>
            <p>Maintained integrity of general ledger, including chart of accounts.</p>
            <p>Reconciled 26 accounts for each property in our portfolio.</p>
            <p>Entered invoices from vendors and ensured that bills are paid.</p>
            <p>Provided extensive clerical and administrative support to department staff.</p>
          </div>)
        },
        {
          title: 'Accounting Assistant',
          company: 'U.S. Jewelry House',
          dates: 'March 2017 - March 2020',
          content: 'New York, NY',
          additionalContent: (<div>
            <p>Created an excel sheet to input all the daily sales data from various stores that U.S. Jewelry House operates.</p>
            <p>Updated Quickbooks with the cash, credit card and check receipts of all sales.</p>
            <p>Organized a daily report regarding all the expenses and sales information for the Vice President.</p>
          </div>)
        },
        {
          title: 'Accounting Assistant',
          company: 'Sarah Laird Inc',
          dates: 'March 2018 - January 2019',
          content: 'New York, NY',
          additionalContent: (<div>
            <p>Compared budgeted costs to actual costs while invoicing to ensure that artists and photographers are being paid for everything their jobs entail.</p>
            <p>Generated invoices from paperwork submitted by artists and photographers and ensured there are no discrepancies in their calculations.</p>
            <p>Followed up on outstanding invoices to get payment updates.</p>
            <p>Inputted callsheets into Salesforce and related them to our artists and photographers.</p>
            <p>Used Photoshop when fixing invoices or creating a markup based on estimated costs.</p>
            <p>Prepared accurate sales tax, cash receipt reports, and accounts receivable at the end of every month.</p>
            <p>Created a breakdown of payment for artists and photographers, deducting their contracted agency fee and paying for their expenses.</p>
          </div>)
        },
      ];
    
      return (
        <div className='work'>
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
