import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heel from '../components/Heel';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Anduin Web Development"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro',
        },
      ]}
    >
      <html lang="en" className="has-navbar-fixed-top" />
    </Helmet>
    <Navbar />
    {children()}
    <Footer />
    <Heel />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
