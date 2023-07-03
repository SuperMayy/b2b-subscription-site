import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank QuickDial for the great service rendered to us and in particular Estelle. You got me the best deal a few moments after I spoke to you.',
      username: 'CEO of Tempura',
      name: 'Minnie Horn',
    },
    {
      image: testimonialsImage2,
      text:
        'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend QickDial to others in the future.',
      username: 'CEO of ManleyIT',
      name: 'Merryn Manley',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'I would just like to compliment QuickDail. The team has been most professional and gone to great lengths to assist me. Thier patience with me as I continuously changed my plans is to be commended. Thier service re-affirms why I always choose them rather than a traditional telecom company. Thank you',
      username: '@hi.veona',
      name: 'CEO of Petunia Estates',
    },
    {
      image: testimonialsImage4,
      text:
        'I have seldom experienced such an efficient help and support like this! Thank you so much.',
      username: 'Director of Customer Communication at Epinol',
      name: 'Paseka Nku',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: 'Founder at FinanceJim',
      name: 'Cherice Justin',
    },
    {
      image: testimonialsImage6,
      text:
        'An amazing company for anyone that wants to startup wants to directly communicate with thier users. I will also recommend',
      username: 'Head of Customer Engagement at Athletic Beam',
      name: 'Thais Carballal',
    },
  ],
  [
    {
      image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank QuickDial for the great service rendered to us and in particular Estelle. You got me the best deal a few moments after I spoke to you.',
      username: 'CEO of Tempura',
      name: 'Minnie Horn',
    },
    {
      image: testimonialsImage2,
      text:
        'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend QickDial to others in the future.',
      username: 'CEO of ManleyIT',
      name: 'Merryn Manley',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'I would just like to compliment QuickDail. The team has been most professional and gone to great lengths to assist me. Thier patience with me as I continuously changed my plans is to be commended. Thier service re-affirms why I always choose them rather than a traditional telecom company. Thank you',
      username: '@hi.veona',
      name: 'CEO of Petunia Estates',
    },
    {
      image: testimonialsImage4,
      text:
        'I have seldom experienced such an efficient help and support like this! Thank you so much.',
      username: 'Director of Customer Communication at Epinol',
      name: 'Paseka Nku',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: 'Founder at FinanceJim',
      name: 'Cherice Justin',
    },
    {
      image: testimonialsImage6,
      text:
        'An amazing company for anyone that wants to startup wants to directly communicate with thier users. I will also recommend',
      username: 'Head of Customer Engagement at Athletic Beam',
      name: 'Thais Carballal',
    },
  ]
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What client say about us"
        text="Customer testimonial"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
