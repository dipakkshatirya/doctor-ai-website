import React from 'react'
import "./pages.css";

const contactuspage = () => {
  return (
    <div>
       <section className="coming-soon-page">
      <div className="coming-soon-container">
        <h1>Contact Us</h1>
        <img
          src="https://plain-apac-prod-public.komododecks.com/202607/01/7y907SnhrQdy6XyQcP2q/image.jpg"
          alt="Work in Progress"
          className="coming-soon-image"
        />

        {/* <span className="coming-soon-badge">Work in Progress</span> */}

        <h1>Work in Progress</h1>

        <p>
          This page is currently under development.
          <br />
          We're building something great—stay tuned!
        </p>
      </div>
    </section>
    </div>
  )
}

export default contactuspage
