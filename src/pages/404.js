import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>

      <h2>NOT FOUND</h2>
      <h2>Sayfa Bulunamadı</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>Üzgünüm, az evvel mevcut olmayan bir sayfanın adresine gitmeye çalıştın...</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
