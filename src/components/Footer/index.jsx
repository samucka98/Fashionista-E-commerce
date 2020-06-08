import React from 'react';

import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="Footer__info">
        <span>Feito com </span>
        <i className="fa fa-heart" aria-hidden="true"></i>
        <span> By </span>
        <span>Samuel Lima / </span>
        <a href="https://www.codenation.dev/">Codenation</a>
      </div>
      <div className="social">

        <a href="https://github.com/samucka98" target="blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://linkedin.com/in/samuel-lima-44847611b" target="blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;