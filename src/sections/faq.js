import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'What is Unified Communications as a Service?',
    contents: (
      <div>
        Unified Communications as a Service or UCaaS solutions do pretty much what their name sounds like: 
        they unify or streamline your business communications into one place. That means that instead of 
        having to use multiple devices and channels, you only need one app or platform to handle all of your 
        communications including voice calls, SMS and instant messaging, video conferencing, and audio conferencing.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'What is a VoIP phone service?',
    contents: (
      <div>
        VoIP stands for Voice over Internet Protocol. It's the technology that lets you make 
        and receive phone calls over the Internet instead of a traditional phone network.
        VoIP phone services are offered by dedicated hosted VoIP providers or unified communications 
        platforms like Dialpad. In the latter case, VoIP services are built in as a part of a cloud-based unified communications 
        (UCaaS) platform, which you can use to manage all your phone calls and other communications centrally on different devices. 
        As well as being significantly cheaper than landlines, VoIP lets you connect from anywhere via mobile devices or desktops 
        with a high-speed Internet connection. Voice over IP also gives you advanced features that aren't always possible with 
        a standard telephone service—such as call recording, caller ID, real-time transcriptions, easily customizable voicemail greetings, and more.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How does a VoIP phone service work?',
    contents: (
      <div>
        VoIP is a broad term for telephony technologies that enable voice calls over the Internet instead of using regular phone lines. 
        Think of your voice as an analog signal. VoIP converts this into a digital format (called a “packet”) that can be transmitted 
        over an IP network. An IP or Internet protocol address is what computers use to communicate with one another on the Internet. 
        Once the call is connected, VoIP converts the packets back into analog signals so they can be received by the phone of the person you've called 
        (if you want to get technical, the analog signals are encoded and decoded using software called a codec).
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I get a local or international business phone number with QuickDial?',
    contents: (
      <div>
        Yep. There are services that say they'll give you a free business phone number. 
        Just make sure to double check their features because they tend to be quite limited. 
        If you only need a business phone number and that's it, then those can be a decent option, 
        but if you anticipate that your business' communication needs will grow, then it might be 
        better to look into an actual business phone system or service.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Is it possible to switch services and keep the same business phone number?',
    contents: (
      <div>
        Yes! If you want to switch services, you can port your existing number. 
        Your new service will give you porting instructions, and you'll usually 
        have to notify your former provider and fill out a form.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq">
      <Container>
        <br/><br/><br/><br/>
        <BlockTitle
          title="Frequently Ask Question"
          text="Send us an email"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support.
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to send us an email.
            </Text>
            <a href="mailto:hello@design2tech.com">
              <Box sx={styles.askButton}>
                Ask your Question
              </Box>
            </a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
