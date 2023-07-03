import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Grid, Button, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import PriceCard from 'components/cards/price-card';
import priceIcon1 from 'assets/price-user-1-1.svg';
import priceIcon2 from 'assets/price-user-1-2.svg';

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: 'Standard',
    icon: priceIcon1,
    amount: '£18 user/month',
    otherAmount: '£12 GBP if billed annually',
    options: [
      {
        status: true,
        label: 'Unlimited calling',
      },
      {
        status: true,
        label:
          'SMS & MMS',
      },
      {
        status: true,
        label: 'AI-powered call and voicemail transcriptions',
      },
      {
        status: true,
        label: 'Google Workspace & Microsoft 365 integrations',
      },
      {
        status: true,
        label: 'Unlimited video meetings',
      },
      ,
      {
        status: true,
        label: 'Web and chat support',
      },
    ],
  },
  {
    recommended: 'Most Popular',
    title: 'Pro',
    icon: priceIcon1,
    amount: '£28 /month',
    otherAmount: '£20 GBP if billed annually',
    subHeading: 'All the value of the Standard plan, plus:',
    options: [
      {
        status: true,
        label: 'Local number support in 70+ countries',
      },
      {
        status: true,
        label:
          'Multiple phone numbers per account',
      },
      {
        status: true,
        label: '25 ring groups (departments)',
      },
      {
        status: true,
        label: '10 office locations',
      },
      {
        status: true,
        label: 'Global SMS capabilities',
      },
      {
        status: true,
        label: 'CRM integrations (Salesforce, Zendesk, HubSpot, Zoho & more)',
      },
      {
        status: true,
        label: 'Open APIs & Webhooks',
      },
      {
        status: true,
        label: '24/7 live agent support',
      },
    ],
  },
  {
    recommended: null,
    title: 'Enterprise',
    icon: priceIcon2,
    amount: null,
    otherAmount: 'Get a quote',
    subHeading: 'All the value of the Pro plan, plus:',
    options: [
      {
        status: true,
        label: '100% uptime',
      },
      {
        status: true,
        label:
          'Unlimited office locations',
      },
      {
        status: true,
        label: 'Unlimited ring groups (departments)',
      },
      {
        status: true,
        label: 'Dial-by-extension',
      },
      {
        status: true,
        label: 'Integrations with leading SSO providers (Okta, OneLogin',
      },
      {
        status: true,
        label: 'Azure AD SSO integration',
      },
      {
        status: true,
        label: 'Data retention policies',
      },
      {
        status: true,
        label: 'Priority live agent support',
      },
    ],
  },
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: 'Standard',
    icon: priceIcon1,
    amount: '£12 user/month',
    otherAmount: '£18 GBP if billed monthly',
    options: [
      {
        status: true,
        label: 'Unlimited calling',
      },
      {
        status: true,
        label:
          'SMS & MMS',
      },
      {
        status: true,
        label: 'AI-powered call and voicemail transcriptions',
      },
      {
        status: true,
        label: 'Google Workspace & Microsoft 365 integrations',
      },
      {
        status: true,
        label: 'Unlimited video meetings',
      },
      ,
      {
        status: true,
        label: 'Web and chat support',
      },
    ],
  },
  {
    recommended: 'Most Popular',
    title: 'Pro',
    icon: priceIcon1,
    amount: '£20 /month',
    otherAmount: '£28 GBP if billed monthly',
    subHeading: 'All the value of the Standard plan, plus:',
    options: [
      {
        status: true,
        label: 'Local number support in 70+ countries',
      },
      {
        status: true,
        label:
          'Multiple phone numbers per account',
      },
      {
        status: true,
        label: '25 ring groups (departments)',
      },
      {
        status: true,
        label: '10 office locations',
      },
      {
        status: true,
        label: 'Global SMS capabilities',
      },
      {
        status: true,
        label: 'CRM integrations (Salesforce, Zendesk, HubSpot, Zoho & more)',
      },
      {
        status: true,
        label: 'Open APIs & Webhooks',
      },
      {
        status: true,
        label: '24/7 live agent support',
      },
    ],
  },
  {
    recommended: null,
    title: 'Enterprise',
    icon: priceIcon2,
    amount: null,
    otherAmount: 'Get a quote',
    subHeading: 'All the value of the Pro plan, plus:',
    options: [
      {
        status: true,
        label: '100% uptime',
      },
      {
        status: true,
        label:
          'Unlimited office locations',
      },
      {
        status: true,
        label: 'Unlimited ring groups (departments)',
      },
      {
        status: true,
        label: 'Dial-by-extension',
      },
      {
        status: true,
        label: 'Integrations with leading SSO providers (Okta, OneLogin',
      },
      {
        status: true,
        label: 'Azure AD SSO integration',
      },
      {
        status: true,
        label: 'Data retention policies',
      },
      {
        status: true,
        label: 'Priority live agent support',
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: PRICE_MONTHLY_DATA,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: PRICE_MONTHLY_DATA,
      });
    }
    if (plan === 'yearly') {
      setPlan({
        ...plan,
        active: 'yearly',
        pricingPlan: PRICE_YEARLY_DATA,
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="Make the switch and save"
          // text="Meet our pricing plan"
        />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan('monthly')}
            className={`${plan.active === 'monthly' ? 'active' : ''}`}
          >
            Monthly Plan
          </Button>
          <Button
            onClick={() => handlePlan('yearly')}
            className={`${plan.active === 'yearly' ? 'active' : ''}`}
          >
            Annual Plan
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px'],
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      transition: 'all 500ms ease',
      '&.active': {
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
        backgroundColor: '#ffffff',
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
    },
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
