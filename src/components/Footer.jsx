import React from "react";
import "./NavAndFooter.css";

function Footer() {
  return (
    <div>
        <section className="footer-sec-1">
            <img src="" alt=""/>
            <div>
                <h1> Stay up to date on what we 
                    are doing and new learning opportunities
                </h1>
                <form action="">
                    <input type="text"/>
                    <button> SUBSCRIBE </button>
                </form>
                <p> View Privacy Policy </p>
            </div>
        </section>

        <section className="footer-sec-2">
            <div>
                <p> BUILD SOFTWARE </p>
                <p> DESIGN DIFFERENT </p>
                <p> APPLY YOUR KNOWLEDGE </p>
                <p> FAQ </p>
            </div>
            <div>
                <p>Our Local Campus center: Kilometer 7, 
                    Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria
                </p>
                <p> GET IN TOUCH </p>
            </div>
            <div>
                <img src="" alt=""/>
                <p> Learnable is proud to be a collaborative effort of all 
                    the arms of our product team</p>
                <p> HEAD TO DEV STUDIO </p>
            </div>
        </section>
        <section className="footer-sec-3"></section>
    </div>
  )
}

export default Footer;
