import React from 'react'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Criteria from './Components/Criteria/Criteria'
import Eligibility from './Components/Eligible/Eligibility'
import Header from './Components/Header/Header'
import Terms from './Components/Terms/Terms'

const app = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <About />
      <Terms />
      <Eligibility />
      <Criteria />
    </React.Fragment>
  )
}

export default app