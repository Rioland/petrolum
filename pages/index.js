/* eslint-disable */
import Head from "next/head";
import Script from 'next/script'
import {
  Download,
  Nav,
  Fetures,
  Slider,
  About,
  Service,
  Teams,
  Testi,
  Fact,
  Portfoilo,
  Client,
  Contact,
  Footer,
  FooterDown,
} from "../components/Sections";
export default function Home() {
  return (
    <div>
      <Head>
      <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content />
  <meta name="author" content />
  <title>AUKALIS</title>
  <style>
  @import url(&apos;css/bootstrap.css&apos;);
  @import url(&apos;css/responsive.css&apos;);
  @import url(&apos;css/animate.css&apos;);
  @import url(&apos;css/prettyPhoto.css&apos;;
  @import url(&apos;css/font-awesome.css&apos;);
  @import url(&apos;css/owl.carousel.css&apos;);
  @import url(&apos;css/owl.theme.css&apos;);
  @import url(&apos;css/owl.transitions.css&apos;);
  </style>

      </Head>
      {/*  */}
      <body data-spy="scroll" data-target=".navbar-default" data-offset="100">
        {/* nav */}
        <Nav />
        {/* slider */}
        <Slider />
        {/* about */}
        <About />
        {/* Download */}
        <Download />

        {/* service */}
        <Service />
        {/* feturn */}
        <Fetures />
        {/* portfolio */}
        <Portfoilo />
        {/* teams */}
        <Teams />
        {/* testi */}
        <Testi />
        {/*  */}

        <Fact />
        {/*  */}
        <Client />
        {/*  */}
        <Contact />
        {/*  */}
        <Footer />
        {/*  */}
        <FooterDown />
      </body>
      {/*  */}
      {/* script */}
      <Script type="text/javascript" src="js/jquery.min.js"></Script>
      <Script type="text/javascript" src="js/bootstrap.js"></Script>
      <Script type="text/javascript" src="js/jquery.prettyPhoto.js"></Script>
      <Script type="text/javascript" src="js/jquery.nicescroll.js"></Script>
      <Script type="text/javascript" src="js/waypoints.min.js"></Script>
      <Script type="text/javascript" src="js/jquery.isotope.js"></Script>
      <Script type="text/javascript" src="js/wow.js"></Script>
      <Script type="text/javascript" src="js/jquery.countTo.js"></Script>
      <Script type="text/javascript" src="js/jquery.inview.min.js"></Script>
      <Script type="text/javascript" src="js/owl.carousel.js"></Script>
      <Script type="text/javascript" src="js/script.js"></Script>
    </div>
  );
}
