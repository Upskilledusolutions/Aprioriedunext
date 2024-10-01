import Head from 'next/head'
import Fromsection from '../../components/home/Fromsection'
import Hero from '../../components/home/Hero'
import HeroSlider from '../../components/home/Heroslider'
import Newsletter from '../../components/home/Newsletter'
import Ourgallery from '../../components/home/Ourgallery'
import Testimonials from '../../components/home/testimonials'
import Events from "../../components/home/Events"
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <>
      <Head>
        <title>Upskilleduonline</title>
        <link rel="icon" href="/fav.ico" />
        <meta property="og:image" content="/fav.ico" />
        <link rel="apple-touch-icon" href="/fav.ico"/>
  <meta name="description" content="Upskilleduonline is an innovative language learning platform designed to help users master new languages through interactive and engaging lessons." />
  <meta name="keywords" content="Upskilledu Solutions, Upskilledu, Uspkilledu online, upskilleduonline, upskilledusolutions, upskilleduonline.com" />
  <meta name="author" content="Upskilleduonline" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  <meta property="og:title" content="Upskilleduonline" />
  <meta property="og:description" content="Upskilleduonline is an innovative language learning platform designed to help users master new languages through interactive and engaging lessons." />
  <meta property="og:image" content="https://www.upskilleduonline.com/newlogo1.png" />
  <meta property="og:url" content="https://www.upskilleduonline.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="Upskilleduonline" />
  <meta name="twitter:title" content="Upskilleduonline" />
  <meta name="twitter:description" content="Upskilleduonline is an innovative language learning platform designed to help users master new languages through interactive and engaging lessons." />
  <meta name="twitter:image" content="https://www.upskilleduonline.com/newlogo1.png" />
  <link rel="canonical" href="https://www.upskilleduonline.com" />
  <meta name="robots" content="index, follow" />
      </Head>  
      <main>
        <>
          <HeroSlider />
          <Fromsection />
          <Testimonials />
          {/* <Ourgallery /> */}
          <Events />
          <Newsletter />
        </>
      </main>
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });