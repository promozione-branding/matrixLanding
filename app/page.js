import React from 'react'
import Navbar from './compoents/Navbar'
import Hero from './compoents/Hero'
import Category from './compoents/Category'
import Face from './compoents/Face'
import Paper from './compoents/Paper'
import Form from './compoents/Form'
import Kitchen from './compoents/Kitchen'
import Cta from './compoents/Cta'
import Toilet from './compoents/Toilet'
import Benefits from './compoents/Benefits'
import About from './compoents/About'
import MinimumOrder from './compoents/MinimumOrder'
import FeatureHighlights from './compoents/FeatureHighlights'
import Testimonials from './compoents/Testimonials'
import ContactSection from './compoents/ContactSection'
import Footer from './compoents/Footer'
import Hero2 from './compoents/Hero2'

export default function page() {
  return (
    <>
      <Navbar/>
      {/* <Hero/> */}
      <Hero2/>
      <Category/>
      <Face/>
      <Paper/>
      <Form/>
      <Kitchen/>
      <Cta/>
      <Toilet/>
      <Benefits/>
      <About/>
      <MinimumOrder/>
      <FeatureHighlights/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </>
  )
}
