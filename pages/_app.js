import NProgress from "nprogress";
import React, {useEffect} from "react";
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/mainMedia.css';
import 'bootstrap/dist/css/bootstrap.css';
// Education Styles files
import '../styles/educationMain.css';
import '../styles/educationMedia.css';
// Edtech Styles Files
import '../styles/edtechMain.css';
import '../styles/edtechMedia.css';
import '../styles/landingpage.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-input-2/lib/style.css'
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';
import Router from "next/router";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  Router.onRouteChangeStart = url => {
    NProgress.start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()

  useEffect(() => {
    document.body.className = pageProps.isEdtechPage ? 'edtechpagebody' : 'noclass';
  })

  return (
    <>
      <ToastContainer />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="xad3rNZTEtvxRKuqIRuqS2jdhmd4VWOo6O3TE2wXJ-Q" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      </Head>

      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-4TBLXHGPQ2`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); gtag('config', 'G-4TBLXHGPQ2');
              `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></Script>
    </>
  )
}

export default MyApp
