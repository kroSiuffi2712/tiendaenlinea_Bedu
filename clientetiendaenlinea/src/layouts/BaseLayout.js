import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Router from '../scenes/Router';

const BaseLayout = () => (
  <>
    <Header />
    <main className="bg-white">
      <Router />
    </main>
    <Footer />
  </>
);

export default BaseLayout;
