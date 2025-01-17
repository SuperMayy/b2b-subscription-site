import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage6,
    text:
      'Dialpad works on all your favorite devices-smartphones, laptops, tablets, or anything else. Simply download the app, and you\'re good to go.',
    heading: 'No extra hardware',
    // path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Get your system and new business lined up and running in no time, allowing you to focus on growing your business.',
    heading: 'Effortless setup',
    // path: '#',
  },
  {
    image: serviceImage1,
    text:
      'Our cloud platform is designed to scale as your business grows. From your first phone line to that new office, we\'ve got you covered.',
    heading: 'Built to scale',
    // path: '#',
  },
  // {
  //   image: serviceImage4,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Email & SMS Marketing',
  //   path: '#',
  // },
  // {
  //   image: serviceImage5,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Reporting & Analytics',
  //   path: '#',
  // },
  // {
  //   image: serviceImage6,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Online support',
  //   path: '#',
  // },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Why teams love QuickDial"
          // text="Features are highlighted here"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
