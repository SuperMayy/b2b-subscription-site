import React from "react";
import { ThemeProvider, Box} from 'theme-ui';
import { StickyProvider } from '../../contexts/app/app.provider'
import theme from 'theme';
import Layout from 'components/layout';
import SEO from 'components/seo';
import BlockTitle from 'components/block-title'

const Success = () => {
    const email = localStorage.getItem('email');

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 014" />
          <Box as="section" sx={styles.signup}>
          <BlockTitle
            title="Your account has been successfully created"
          />
          </Box>
          <Box as="section" sx={styles.message}>
            <p>An email will be sent to {email ? email : "you"}. Activate your account and complete the set up process.</p>
          </Box>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}

export default Success

const styles = {
    signup: {
      overflow: 'hidden',
      textAlign: 'center',
      pt: ['110px', null, null, null, '130px'],
      h3: {
        fontSize: ['38px', null, null],
        lineHeight: 1.25,
        color: '#02073E',
        fontWeight: 700,
        width: '100%',
        maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
        mx: 'auto',
        mt: '30px',
        mb: ['20px', null, null, '25px'],
      },
    },
    message: {
      textAlign: 'center',
      pb: '40px',
      fontSize: ['30px', null, null],
      minHeight: '35%'
    },
  };
  