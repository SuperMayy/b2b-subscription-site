'use client'
import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link'
import { useAuth } from "contexts/auth/AuthContext";
import Router from "next/router";
import { ThemeProvider, Label, Input, Box, Button  } from 'theme-ui';
import { StickyProvider } from '../../contexts/app/app.provider'
import theme from 'theme';
import Layout from 'components/layout';
import SEO from 'components/seo';
import BlockTitle from 'components/block-title'

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef(); 
  
    const { signup, loginWithGoogle, saveUserData} = useAuth();
  
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
          return setError('Passwords do not match');
      }
  
      try{
          setError('');
          setLoading(true);
          signup(emailRef.current.value, passwordRef.current.value);
        //   const userCredentials = await signup(emailRef.current.value, passwordRef.current.value);
        //   const user = userCredentials.user.multiFactor.user;
        //   console.log({...user});
        //   Router.push('/signup/paymentPicker'); ///success
        Router.push('/success');
        //   try {
        //     await saveUserData(user);
        //     console.log('saved user data')
        //     //   Router.push('/signup/paymentPicker'); ///success
        //     Router.push('/success');
        //   } catch (e) {
        //     console.error("Error adding document: ", e);
        //   } 
      } catch (err) {
          // 👇️ clear input field value
          emailRef.current.value = '';
          passwordRef.current.value = '';
          
          if(err.code === "auth/weak-password"){
              return setError('Your password should be at least 6 characters')
          }
          return setError('Passwords do not match');
      }
  
      setLoading(false);
    }
  
    const handleGoogleSignUp = async() => {
      try {
        setError('');
        setLoading(true);
        loginWithGoogle();
        // const userCredentials = await loginWithGoogle();
        //   Router.push('/signup/paymentPicker'); ///success
        Router.push('/success');
        // const user = userCredentials.user.multiFactor.user;
        // console.log({...user});
        // try {
        // //   await saveUserData(user);
        //   //   Router.push('/signup/paymentPicker'); ///success
        //   Router.push('/success');
        // } catch (e) {
        //   console.error("Error adding document: ", e);
        // }
      } catch (err) {
        const message = err.message.replace("Firebase: ", "");
        return setError(message);
      }
    }
  
    const redirectLogic = () => {
      const email = localStorage.getItem('email');
      const uid = localStorage.getItem('uid'); 
      const trialEmail = localStorage.getItem('trialEmail')
      if(trialEmail){
        emailRef.current.value = trialEmail;
      }
      if(uid && email) {
        //   Router.push('/signup/paymentPicker'); ///success
        Router.push('/success');
      } 
    }
  
    useEffect(() => {
      redirectLogic();
    }, [])

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="QuickDial" />
          <Box as="section" sx={styles.signup}>
          <BlockTitle
            title="Sign Up"
          />
          </Box>
          <Box as="form" onSubmit={handleSubmit} sx={styles.form}>
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" mb={3} ref={emailRef} required/>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password"  id="password" mb={3} ref={passwordRef} required autoComplete="new-password"/>
            <Label htmlFor="password">Confirm Password</Label>
            <Input type="password" name="password" id="password" mb={3} ref={passwordConfirmRef} required autoComplete="new-password"/>
            <Button disabled={loading} sx={styles.signUpBtn}>Submit</Button>
          </Box>
          <Box as="section" sx={styles.googleLink}>
            <p disabled={loading} sx={styles.googleLink} href="#" className="google-sign-up-link" onClick={handleGoogleSignUp}>
              Sign Up with Google
            </p>
          </Box>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}

export default SignUp

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
    googleLink: {
      textAlign: 'center',
      p: {
        textDecoration: 'underline',
        cursor: 'pointer'
      },
      pb: '40px',
      fontSize: ['20px', null, null]
    },
    form: {
        width: '50%',
        margin: 'auto',
        minHeight: '40%',
    },
    signUpBtn: {
      backgroundColor: 'black',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '-0.16px',
      borderRadius: '5px',
      color: '#ffffff',
      padding: '6.5px 24px',
      display: ['none', null, null, null, 'inline-block'],
      ml: ['0', null, null, 'auto', '0'],
      mr: ['0', null, null, '20px', '0'],
      '&:hover': {
        color: '#fff',
      },
    },
    container: {
      position: 'relative',
      '.bannerIcon': {
        position: 'absolute',
        display: ['none', null, null, null, 'block'],
      },
    },
  };
  