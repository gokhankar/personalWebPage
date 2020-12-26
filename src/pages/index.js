import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Projects from '@sections/Projects';
import Travel from '@sections/Travel';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';



const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Travel />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
