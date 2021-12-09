import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content />
        <meta name="author" content />
        <title>AUKALIS</title>
        {/*Bootstrap*/}
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        {/*Stylesheets*/}
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        {/*Responsive*/}
        <link rel="stylesheet" type="text/css" href="css/responsive.css" />
        {/*Animation*/}
        <link rel="stylesheet" type="text/css" href="css/animate.css" />
        {/*Prettyphoto*/}
        <link rel="stylesheet" type="text/css" href="css/prettyPhoto.css" />
        {/*Font-Awesome*/}
        <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
        {/*Owl-Slider*/}
        <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />
        <link rel="stylesheet" type="text/css" href="css/owl.theme.css" />
        <link rel="stylesheet" type="text/css" href="css/owl.transitions.css" />
        {/*[if lt IE 9]>
    
    
  [endif]*/}
      </Head>
      {/*  */}
      <body data-spy="scroll" data-target=".navbar-default" data-offset="100" >
        <section id="slider">
          <div
            id="home-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="item active"
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2020/04/24/07/26/gas-carrier-5085700__340.jpg)",
                }}
              >
                <div className="carousel-caption container">
                  <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                      <h1>We Are Cosmix</h1>
                      <h2>Creative Themes</h2>
                      <p>
                        Cosmix – A One Page Parallax, HTML5 and Responsive
                        Template suitable for any creative business agency.
                        Multiple pages also included in this theme with lots of
                        CSS and JQuery animations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2014/11/02/14/23/oil-rig-514035__340.jpg)",
                }}
              >
                <div className="carousel-caption container">
                  <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                      <h1>We Are Cosmix</h1>
                      <h2>Creative Themes</h2>
                      <p>
                        Cosmix – A One Page Parallax, HTML5 and Responsive
                        Template suitable for any creative business agency.
                        Multiple pages layouts also in this theme with lots of
                        CSS and JQuery animations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2012/11/26/03/45/alaska-67304__340.jpg)",
                }}
              >
                <div className="carousel-caption container">
                  <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                      <h1>We Are Cosmix</h1>
                      <h2>Creative Themes</h2>
                      <p>
                        Cosmix – A One Page Parallax, HTML5 and Responsive
                        Template suitable for any creative business agency.
                        Multiple page also included in this theme with lots of
                        CSS and JQuery animations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="home-carousel-left"
                href="#home-carousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>{" "}
              <a
                className="home-carousel-right"
                href="#home-carousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>{" "}
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h2>
                  ABOUT <span>US</span>
                </h2>
                <div className="line" />
                <p>
                  <span>
                    <strong>L</strong>
                  </span>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ab-sec">
                <div className="col-md-6">
                  <h3
                    className="wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <span>W</span>e Are Creative And Awesome
                  </h3>
                  <p>
                    <span>
                      <strong>L</strong>
                    </span>
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod
                    tempor.Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. book.{" "}
                  </p>
                </div>
                <div
                  className="col-md-6 ab-sec-img wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG8DW6As0IYDKCTMVcOZIWCum5SDe_Oc_rg&usqp=CAU"
                    height="200px"
                    alt
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-sec">
          <div className="container">
            <div className="col-md-10 col-sm-10 col-xs-8">
              <h3>Premium quality free onepage template</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </p>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-4">
              {" "}
              <a className="btn-down" href="#">
                Download
              </a>{" "}
            </div>
          </div>
        </div>
        <section id="service">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h2>
                  OUR SERVI<span>CE</span>
                </h2>
                <div className="line" />
                <p>
                  <span>
                    <strong>L</strong>
                  </span>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="row">
              <div className="features-sec">
                <div
                  className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="0ms"
                >
                  <div className="media service-box">
                    <div className="pull-left">
                      {" "}
                      <i className="fa fa-line-chart" />{" "}
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">Pipe Line</h5>
                      <p>
                        Backed by some of the biggest names in the industry,
                        Firefox OS is an open platform that fosters greater
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="100ms"
                >
                  <div className="media service-box">
                    <div className="pull-left">
                      {" "}
                      <i className="fa fa-cubes" />{" "}
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">
                        Plate and metal products
                      </h5>
                      <p>
                        Backed by some of the biggest names in the industry,
                        Firefox OS is an open platform that fosters greater
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="200ms"
                >
                  <div className="media service-box">
                    <div className="pull-left">
                      {" "}
                      <i className="fa fa-pie-chart" />{" "}
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">Civil Enginnering</h5>
                      <p>
                        Backed by some of the biggest names in the industry,
                        Firefox OS is an open platform that fosters greater
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="300ms"
                >
                  <div className="media service-box">
                    <div className="pull-left">
                      {" "}
                      <i className="fa fa-bar-chart" />{" "}
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">
                        Buying/Selling Building Construction
                      </h5>
                      <p>
                        Backed by some of the biggest names in the industry,
                        Firefox OS is an open platform that fosters greater
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="400ms"
                >
                  <div className="media service-box">
                    <div className="pull-left">
                      {" "}
                      <i className="fa fa-language" />{" "}
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">Road Construction</h5>
                      <p>
                        Backed by some of the biggest names in the industry,
                        Firefox OS is an open platform that fosters greater
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="500ms"
                >
                  <div className="media service-box">
                    <div className="pull-left">
                      {" "}
                      <i className="fa fa-bullseye" />{" "}
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">Estate Management</h5>
                      <p>
                        Backed by some of the biggest names in the industry,
                        Firefox OS is an open platform that fosters greater
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="col-sm-6 col-xs-12">
                <div
                  className="our-skills wow fadeInLeft"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div
                    className="single-skill wow fadeInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <p className="lead">Plate and metal products</p>
                    <div className="progress">
                      <div
                        className="progress-bar six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={90}
                        style={{ width: "95%" }}
                      >
                        {" "}
                        95%{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-skill wow fadeInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="400ms"
                  >
                    <p className="lead">Pipe Line</p>
                    <div className="progress">
                      <div
                        className="progress-bar six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={80}
                        style={{ width: "80%" }}
                      >
                        {" "}
                        80%{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-skill wow fadeInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="500ms"
                  >
                    <p className="lead">Civil Enginnering</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={100}
                        aria-valuemax={60}
                        style={{ width: "60%" }}
                      >
                        {" "}
                        60%{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-skill wow fadeInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="600ms"
                  >
                    <p className="lead">Construction</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={100}
                        aria-valuemax={70}
                        style={{ width: "70%" }}
                      >
                        {" "}
                        70%{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6  wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                {" "}
                <img
                  src="https://media.istockphoto.com/photos/pipelines-on-ocean-bottom-underwater-3d-rendering-picture-id1098052874?b=1&k=20&m=1098052874&s=170667a&w=0&h=cwoCsEAtM-VO4SHRsdqp2Xm9WmMc1hb1nV3OAmHhHkY="
                  className="img-responsive"
                  alt
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h2>
                  AWESOME FEATUR<span>ES</span>
                </h2>
                <div className="line" />
                <p>
                  <span>
                    <strong>L</strong>
                  </span>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
              </div>
            </div>
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a href="#tab-1" role="tab" data-toggle="tab">
                  <i className="fa fa-paper-plane" />
                </a>
              </li>
              <li role="presentation">
                <a href="#tab-2" role="tab" data-toggle="tab">
                  <i className="fa fa-laptop" />
                </a>
              </li>
              <li role="presentation">
                <a href="#tab-3" role="tab" data-toggle="tab">
                  <i className="fa fa-code" />
                </a>
              </li>
              <li role="presentation">
                <a href="#tab-4" role="tab" data-toggle="tab">
                  <i className="fa fa-th-large" />
                </a>
              </li>
              <li role="presentation">
                <a href="#tab-5" role="tab" data-toggle="tab">
                  <i className="fa fa-file-image-o" />
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade in active feat-sec"
                id="tab-1"
              >
                <div className="col-md-6 tab">
                  <h5>Web Design</h5>
                  <div className="line" />
                  <div className="clearfix" />
                  <p className="feat-sec">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing
                    <br />
                  </p>
                  <p className="feat-sec-1">
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum."But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound{" "}
                  </p>
                </div>
                <div className="col-md-6 tab-img">
                  <img
                    src="images/Features/01.jpg"
                    className="img-responsive"
                    alt
                  />
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade feat-sec"
                id="tab-2"
              >
                <div className="col-md-6 tab">
                  <h5>Graphic Design</h5>
                  <div className="line" />
                  <div className="clearfix" />
                  <p className="feat-sec">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing
                    <br />
                  </p>
                  <p className="feat-sec-1">
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum."But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound{" "}
                  </p>
                </div>
                <div className="col-md-6 tab-img">
                  <img
                    src="images/Features/02.jpg"
                    className="img-responsive"
                    alt
                  />
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade feat-sec"
                id="tab-3"
              >
                <div className="col-md-6 tab">
                  <h5>Web Development</h5>
                  <div className="line" />
                  <div className="clearfix" />
                  <p className="feat-sec">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing
                    <br />
                  </p>
                  <p className="feat-sec-1">
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum."But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound{" "}
                  </p>
                </div>
                <div className="col-md-6 tab-img">
                  <img
                    src="images/Features/03.jpg"
                    className="img-responsive"
                    alt
                  />
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade feat-sec"
                id="tab-4"
              >
                <div className="col-md-6 tab">
                  <h5>Responsive Design</h5>
                  <div className="line" />
                  <div className="clearfix" />
                  <p className="feat-sec">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing
                    <br />
                  </p>
                  <p className="feat-sec-1">
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum."But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound{" "}
                  </p>
                </div>
                <div className="col-md-6 tab-img">
                  <img
                    src="images/Features/04.jpg"
                    className="img-responsive"
                    alt
                  />
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade feat-sec"
                id="tab-5"
              >
                <div className="col-md-6 tab">
                  <h5>Creative Gallery</h5>
                  <div className="line" />
                  <div className="clearfix" />
                  <p className="feat-sec">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing
                    <br />
                  </p>
                  <p className="feat-sec-1">
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum."But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound{" "}
                  </p>
                </div>
                <div className="col-md-6 tab-img">
                  <img
                    src="images/Features/05.jpg"
                    className="img-responsive"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <div className="heading">
                <h2>
                  AWESOME FEATUR<span>ES</span>
                </h2>
                <div className="line" />
                <p>
                  <span>
                    <strong>L</strong>
                  </span>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="text-center">
              <ul className="portfolio-filter">
                <li>
                  <a className="active" href="#" data-filter="*">
                    All Works
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".creative">
                    Piple lines
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".corporate">
                    Constructions
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".portfolio">
                    Civil Engineering
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-items">
              <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative">
                <div className="portfolio-item-inner">
                  {" "}
                  <img
                    className="img-responsive"
                    src="https://cdn.pixabay.com/photo/2016/08/14/19/52/factory-1593842__340.jpg"
                    alt
                  />
                  <div className="portfolio-info">
                    {" "}
                    <a
                      className="preview"
                      href="images/Portfolio/01.jpg"
                      data-rel="prettyPhoto"
                    >
                      <i className="fa fa-plus-circle" />
                    </a>
                    <h6>ITEM-1</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate portfolio">
                <div className="portfolio-item-inner">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/Portfolio/02.jpg"
                    alt
                  />
                  <div className="portfolio-info">
                    {" "}
                    <a
                      className="preview"
                      href="images/Portfolio/02.jpg"
                      data-rel="prettyPhoto"
                    >
                      <i className="fa fa-plus-circle" />
                    </a>
                    <h6>ITEM-2</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative">
                <div className="portfolio-item-inner">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/Portfolio/03.jpg"
                    alt
                  />
                  <div className="portfolio-info">
                    {" "}
                    <a
                      className="preview"
                      href="images/Portfolio/03.jpg"
                      data-rel="prettyPhoto"
                    >
                      <i className="fa fa-plus-circle" />
                    </a>
                    <h6>ITEM-3</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate">
                <div className="portfolio-item-inner">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/Portfolio/04.jpg"
                    alt
                  />
                  <div className="portfolio-info">
                    {" "}
                    <a
                      className="preview"
                      href="images/Portfolio/04.jpg"
                      data-rel="prettyPhoto"
                    >
                      <i className="fa fa-plus-circle" />
                    </a>
                    <h6>ITEM-4</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative portfolio">
                <div className="portfolio-item-inner">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/Portfolio/05.jpg"
                    alt
                  />
                  <div className="portfolio-info">
                    {" "}
                    <a
                      className="preview"
                      href="images/Portfolio/05.jpg"
                      data-rel="prettyPhoto"
                    >
                      <i className="fa fa-plus-circle" />
                    </a>
                    <h6>ITEM-5</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate">
                <div className="portfolio-item-inner">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/Portfolio/06.jpg"
                    alt
                  />
                  <div className="portfolio-info">
                    {" "}
                    <a
                      className="preview"
                      href="images/Portfolio/06.jpg"
                      data-rel="prettyPhoto"
                    >
                      <i className="fa fa-plus-circle" />
                    </a>
                    <h6>ITEM-6</h6>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
