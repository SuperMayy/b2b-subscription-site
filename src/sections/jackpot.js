import React from 'react';
import { Box, Container, Flex, Image, Text, Heading } from 'theme-ui';
import JackpotCard from 'components/cards/jackpot-card';
// import jackpotImage from 'assets/jackpot.png';
import jackpotImage1 from 'assets/jackpot-1-1.png';
import jackpotImage2 from 'assets/jackpot-1-2.png';

const JACKPOT_DATA = [
  {
    image: jackpotImage1,
    text:
      'Set up custom routing rules and easily forward calls to your smartphone (or a specific team) so customers reach the right person, every time.',
    heading: 'Route incoming calls',
  },
  {
    image: jackpotImage2,
    text:
      'Dialpad runs on the Google Cloud Platform and our worldwide data centres, so service is always on when you are.',
    heading: 'Plan on a 100% uptime SLA',
  },
  {
    image: jackpotImage2,
    text:
      'And don’t worry, our Ai assistant has you covered after hours. Any voicemails will be automatically transcribed and sent straight to your inbox.',
    heading: 'Set your business hours',
  },
];

const Jackpot = () => {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image 
              src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/transformed-images/storage_googleapis_com/dialpad-cms.appspot.com/cms/Sales-dialer_phone-call_Header-v2.webp" 
              alt="jackpot image" 
            />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as="span">Core features</Text>
              <Heading as="h3">Smart Features that you will love</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ['65px', null, null, null, '85px', null, '125px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  image: {
    flex: ['0 0 100%', null, null, null, null, '0 0 62.5%'],
    img: {
      maxWidth: ['100%', null, null, null, null, null, 'none'],
      float: 'right',
    },
  },
  content: {
    flex: ['0 0 100%', null, null, null, null, '0 0 37.5%'],
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'left'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px',
    },
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ['grid', null, null, null, null, 'block'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
  },
};
