import React from 'react'
import './Getstarted.css'
import assets from '../../assets/assets'

const getstarted = () => {
  return (
    <div className="landingPage">
      <section id='welcome'>
      <div className="welcome1">
        <div className="block1">
        <p className='para1'>AI-Powered Forecasting Application</p>
        <div className="block2">
        <p className='para2'>Future-Frame is an AI-powered forecasting application that helps businesses and researchers analyze time-series data for predictive insights. Users can upload datasets, apply preprocessing filters, and visualize trends through interactive graphs. Designed for data-driven decision-making, Future-Frame simplifies complex analytics with an intuitive interface and advanced modeling techniques.</p>
        <button id='getstarted'>Get Started</button>
        </div>
        </div>
        <div className="block3">
        <img src={assets.hero_sec1_icon} alt="" />
        </div>
      </div>
    </section>
    

    <section id='Benefits'>
         <div class="container">
        <div class="text-content">
            <h1>Advanced Data Analysis</h1>

            <h2>01. Intuitive Interface</h2>
            <p>Future-Frame offers an intuitive interface that makes data analysis fast and agile. Users can easily navigate through the application to derive meaningful insights from their datasets.</p>

            <h2>02. Interactive Visualizations</h2>
            <p>With interactive graphs and visualization tools, Future-Frame provides cost-effective solutions for businesses and researchers to analyze and interpret their data effectively.</p>

            <h2>03. Predictive Insights</h2>
            <p>Future-Frame enables real-time analytics, empowering users to make informed decisions based on predictive insights derived from their time-series data.</p>
        </div>

        <div class="image-container">
            <img src={assets.hero_sec2_icon} alt="" />
        </div>
    </div>
    </section>

    <section id= 'promotional'>
    <div className="promotional-section">
      <div className="promotional-content">
      <h1>Empower Your Data <br /> Analysis</h1>
      <p>
        Future-Frame empowers businesses and researchers to gain a deeper <br />
        understanding of their data, enabling them to make data-driven decisions <br />
        with confidence.
      </p>
        
      </div>
    </div>
    </section>

    <section id="about">
    <h2 class="about-heading">About <br /> Future-Frame</h2>

    <div class="about-boxes">
      {/* our story */}
      <div class="about-box">
        <h3>Our Story</h3>
        <p>
          Discover the story behind Future-Frame and how our passion for data analytics led to the
          development of an AI-powered forecasting application that revolutionizes data analysis.
        </p>
      </div>

      {/* Our Vision  */}
      <div class="about-box">
        <h3>Our Vision</h3>
        <p>
          At Future-Frame, our vision is to transform the way businesses and researchers analyze
          time-series data, making advanced data analytics accessible and actionable for everyone.
        </p>
      </div>

      {/* Our Technology */}
      <div class="about-box">
        <h3>Our Technology</h3>
        <p>
          Learn about the cutting-edge technology that powers Future-Frame, driving advanced modeling
          techniques and intuitive data analysis capabilities.
        </p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default getstarted
