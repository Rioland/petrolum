

function MyApp({ Component, pageProps }) {
  return <body data-spy="scroll" data-target=".navbar-default" data-offset="100">
 <Component {...pageProps} />
  </body>
  
 
}

export default MyApp
