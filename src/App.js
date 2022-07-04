import React, { useState, useEffect } from 'react'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Criteria from './Components/Criteria/Criteria'
import Eligibility from './Components/Eligible/Eligibility'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Questions from './Components/Questions/Questions'
import Terms from './Components/Terms/Terms'

const App = () => {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <React.Fragment>
      <Header />
      <Banner />
      <About />
      <Terms />
      <Eligibility />
      <Criteria />
      <Questions />
      <Footer />
    </React.Fragment>
  )
}

export default App;