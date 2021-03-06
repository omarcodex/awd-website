import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import github from '../assets/social/github.svg';
import linkedin from '../assets/social/linkedin.svg';
import twitter from '../assets/social/twitter.svg';

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const SocialLink = styled.a`
  margin-right: 1.5rem;
`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-3 content">
            <h5 className="title is-5 grn-underline">Site</h5>
            <Link to="/terms-and-privacy">Terms & Privacy</Link>
            <br />
            <Link to="/sitemap">Sitemap</Link>
            <br />
            <br />
            <p>Anduin Web Development is based in San Diego, CA.</p>
          </div>
          <div className="column is-3 content">
            <h5 className="title is-5 grn-underline">Site</h5>
            <Link to="/terms-and-privacy">Terms & Privacy</Link>
            <br />
            <Link to="/sitemap">Sitemap</Link>
            <br />
          </div>
          <div className="column is-3 is-offset-3">
            <h5 className="title is-5 grn-underline">Social</h5>
            <div>
              <SocialLink href="">
                <Img src={github} alt="Github Icon" />
              </SocialLink>
              <SocialLink href="">
                <Img src={linkedin} alt="LinkedIn Icon" />
              </SocialLink>
              <SocialLink href="">
                <Img src={twitter} alt="Twitter Icon" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
