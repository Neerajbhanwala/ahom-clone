import React from 'react'
import "./Main.css"
alert("Welcome to Ahom Technology Pvt. Ltd.")
function Main() {
  return (
    <>
      <ul>
        <li>BLOG</li>
        <li>CONTACT US</li>
        <li>CAREER</li>
        <li>OUR PORTFOLIO</li>
        <li className="dpd">
          OUR SERVICES &nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i>
          <div class="content">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>ABOUT US</li>
        <span>
          <img
            src="ahom logo.png"
            alt="Logo"
            style={{ width: "20%", margin: "15px", height: "60%" }}
          />
        </span>
      </ul>
      <div className="frm"></div>
      <div className="sm4">
        Transform <br />
        with AHOM{" "}
      </div>
      <button className="sm6" onClick={() => alert("Call us @- 9996689916")}>Contact Us</button>
      <div className="sm5">
        Lean into the age of discruptive modernism with AHOM Technologies.
      </div>
      <div className="sm1">
        <img src="sm1.png" alt="Back-left" />
      </div>
      <div className="sm2">
        <img src="sm2.png" alt="Back-right" />
      </div>
      <div className="sm3">
        <img src="sm3.png" alt="Chair" />
      </div>

      {/* Second Division */}

      <div className="maindiv">
        <div className="bg1" id="bg1"></div>
        <div className="bg2" id="bg2"></div>
        <div className="bg3" id="bg3"></div>
        <div className="inicon1" id="icon1">
          <img
            src="Dashboard_perspective_matte_s.png"alt="phh" style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="inicon2" id="icon2">
          <img
            src="message_perspective_matte_s.png"
            alt="phh"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="inicon3" id="icon3">
          <img
            src="ROCKET_perspective_matte_s.png"
            alt="phh"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="first" onmouseenter="first(this)" id="one">
          <h2>WEB DEVELOPMENT</h2>
          <h4>
            Ahomtech is a leading Web development company based out in Gurugram,
            India. Over the past years, we have offered all kind of custom build
            websites, web portals and web applications. We use cutting edge
            technologies to transform the ideas into reality.
          </h4>
          <button className="btnn">READ MORE</button>
        </div>
        <div className="first" onmouseenter="second(this)" id="two">
          <h2>GRAPHIC DESIGN</h2>
          <h4>
            Graphics designing has now become a mendatory aspect or a way of
            projecting ideas with the help of visual and content. It includes
            conveying the complexity of a vision through visual simplicity.
          </h4>
          <button className="btnn">READ MORE</button>
        </div>
        <div className="first" onmouseenter="third(this)" id="three">
          <h2>SEO OPTIMIZATION</h2>
          <h4>
            The best way to get your website noticed by potential customers,SEO
            brings the business at amazing heights since it unables us to work
            across the globe just by investing a bit of investment.
          </h4>
          <button className="btnn">READ MORE</button>
        </div>
      </div>

      {/* Third division */}

      <div className="smll">
        <img
          src="right_top_02.png"
          alt="phh"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="last">
        <img
          src="welcome_img.png"
          alt="phh"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="last">
        <h1 className="h">
          WELCOME TO <mark>AHOM</mark> TECHNOLOGIES{" "}
        </h1>
        <p>
          AHOM Technologies private limited is a specilized IT solution company
          based out at Gurgaon, India. We provide high quality professional
          software services to the clients residing across the globe. Out
          experts have been working with the clients of India as well as from
          International origin including USA, UK and Australia.
        </p>
        <button className="btn">READ MORE</button>
      </div>
    </>
  )
}

export default Main
