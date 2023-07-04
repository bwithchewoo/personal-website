import React, {useState} from 'react';
import './Contact.css'

const Contact = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    const toggleContactForm = () => {
      setShowContactForm(!showContactForm);
    };
  
    return (
      <div>
        <div id="bg">
          <div className="contact">
            <div className="envelope">
              <div className="top">
                <div className="outer">
                  <div className="inner"></div>
                </div>
              </div>
              <div className="bottom"></div>
              <div className="left"></div>
              <div className="right"></div>
              <div className="cover"></div>
              <div className="paper" onClick={toggleContactForm}>
                Click me!
              </div>
            </div>
          </div>
        </div>
        {showContactForm && (
          <div className="contact-form-container">
            <div className="contact-us">
              <div className="contact-header">
                <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT ME</h1>
              </div>
              <div className="social-bar">
                <ul>
                  <li>
                    <i className="fab fa-facebook-f"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fab fa-dribbble"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header">
              <h1>Let's Connect!</h1>
 
            </div>
            <div className="phone">
              <h3>917-757-4691</h3>
            </div>
            <div className="email">
              <h3>loveablessing@gmail.com</h3>
            </div>
            <div className="contact-form">
              <form action="https://formsubmit.co/loveablessing@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea rows="4" name="text" placeholder="What brings you here?"></textarea>
                <button type="submit">SEND</button>
              </form>
            </div>
          </div>
        )}
      </div>
    )
}

export default Contact;
