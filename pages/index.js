/* eslint-disable */
import Head from "next/head";

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
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link rel="stylesheet" type="text/css" href="css/responsive.css" />
  <link rel="stylesheet" type="text/css" href="css/animate.css" />
  <link rel="stylesheet" type="text/css" href="css/prettyPhoto.css" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
  <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />
  <link rel="stylesheet" type="text/css" href="css/owl.theme.css" />
  <link rel="stylesheet" type="text/css" href="css/owl.transitions.css" />
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
      <script type="text/javascript" src="js/jquery.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
      <script type="text/javascript" src="js/jquery.nicescroll.js"></script>
      <script type="text/javascript" src="js/waypoints.min.js"></script>
      <script type="text/javascript" src="js/jquery.isotope.js"></script>
      <script type="text/javascript" src="js/wow.js"></script>
      <script type="text/javascript" src="js/jquery.countTo.js"></script>
      <script type="text/javascript" src="js/jquery.inview.min.js"></script>
      <script type="text/javascript" src="js/owl.carousel.js"></script>
      <script type="text/javascript" src="js/script.js"></script>
    </div>
  );
}
