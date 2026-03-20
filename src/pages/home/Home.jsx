/* eslint-disable global-require */
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { WEB_TITLE } from '../../components/appStrings';
import './Home.css';

function Home() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${WEB_TITLE}`;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="home">
      {/* <h3 id="hello-world">Hello World!</h3> */}
      <div className="typewriter">
        <h3 id="hello-world">Hello World!</h3>
      </div>

      <div className="bottom">
        <Link
          to={routes.tools.path}
        >
          <span style={
            {
              background: 'black',
              border: '1px solid black',
              width: '9px',
              height: '9px',
              display: 'inline-block',
            }
          }
          >
            {}
          </span>
        </Link>
        {' '}
        <Link
          to={routes.colors.path}
        >
          {/* <span style={{ background: blue; width: 12px }}></span> */}
          <span style={
            {
              background: 'red',
              border: '1px solid red',
              width: '9px',
              height: '9px',
              display: 'inline-block',
            }
          }
          />
          <span style={
            {
              background: 'yellow',
              border: '1px solid yellow',
              width: '9px',
              height: '9px',
              display: 'inline-block',
            }
          }
          />
          <span style={
            {
              background: 'blue',
              border: '1px solid blue',
              width: '9px',
              height: '9px',
              display: 'inline-block',
            }
          }
          />
          {/* <span>⚙️</span> */}
        </Link>
      </div>
    </div>
  );
}

export default Home;
