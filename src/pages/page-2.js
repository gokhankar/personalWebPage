import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page</h1>
      <h2>İkinci sayfa denemesi</h2>
      <p>Welcome to page 2</p>
      <p>İkinci sayfaya hoşgeldin</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default SecondPage;
