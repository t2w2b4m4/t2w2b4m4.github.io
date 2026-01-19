/* eslint-disable global-require */
/* eslint-disable max-len */
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { WEB_TITLE } from '../../components/appStrings';
import Contact from '../contact/Contact';
// import MA_ICON from '../../ma-flipped-transparent.png';
import './About.css';

function About() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${WEB_TITLE} | About`;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="about">
      {/* <br />
      <hr /> */}
      <div>
        <div
          className="focused-content-wrapper fujifilm-body"
        >
          <img
            className="focused-image fujifilm-photo"
            src={require('./assets/000-twbm.jpg')}
            alt="twbm"
          />
          <div
            className="focused-image-description fujifilm-description"
          >
            twbm
          </div>
        </div>
        <br />
        <div className="image-info">
          圖文並茂 (tú wén bìng mào) is a Chinese idiom describing the perfect harmony between text and visual elements, where both complement each other to elevate the overall impact. Ever since the seed of art grew in me, this term has frequently surfaced in my mind, like birds returning to rest on a familiar branch. Over time, it has matured from a simple phrase into one of my core artistic philosophy.
          <br />
          To me, this concept transcends its literal definition. It is a piece of art itself. It does not strictly require the presence of both text and image. Think of it more like a poem that can conjure vivid imagery, or a movie poster that can capture an entire narrative in one striking image.
        </div>
        
        <span>
          -
          {' '}
          js
        </span>
        <Contact />
        <p>
          <img src="/ma-64x64.png" alt="馬" width={20} height={20} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          &copy; 2026 mjs
        </p>
      </div>
      {/* <div className="bottom">
        <Contact />
      </div> */}
      {/* <div>
        <footer className="bottom-12">
          <p>&copy; 2026. All rights reserved.</p>
        </footer>
      </div> */}
    </div>
  );
}

export default About;
