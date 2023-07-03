//providers
import { AuthProvider } from 'contexts/auth/AuthContext';
import Sticky from 'react-stickynode';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
      <AuthProvider>
        <Sticky enabled={true} innerZ={991}>
          <Header className='sticky' />
        </Sticky>
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>
    </>
  );
}
