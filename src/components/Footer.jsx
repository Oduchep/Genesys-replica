import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
        <section className="footer-sec-1">
            <a href="#top">
                <img className="hidden footer-sec-1-img" src={require("../resources/footer/Go back to Top.png")} alt="arrow up"/>
            </a>
            <div>
                <h1> Stay up to date on what we 
                    are doing and new learning opportunities
                </h1><br/>
                <div className="form-privacy">
                    <form action="">
                        <input type="text" placeholder="YOUR EMAIL"/>
                        <button className="form-btn"> SUBSCRIBE </button>
                    </form>
                    <p> View Privacy Policy </p>
                </div>
            </div>
        </section>

        <section className="footer-sec-2">
            <div>
                <p className="linking"> BUILD SOFTWARE </p>
                <p className="linking"> DESIGN DIFFERENT </p>
                <p className="linking"> APPLY YOUR KNOWLEDGE </p>
                <p className="linking"> FAQ </p>
            </div>

            <div>
                <img className="devstudio-img" src={require("../resources/footer/image 32.png")} alt="dev studio pic"/>
                <div>
                    <p className="non-linking"> Learnable is proud to be a collaborative effort of all 
                        the arms of our product team</p><br/>
                    <p className="linking"> HEAD TO DEV STUDIO </p>
                </div>
            </div>

            <div>
                <p className="non-linking">Our Local Campus center: Kilometer 7, 
                    Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria
                </p><br/>
                <p className="linking"> GET IN TOUCH </p>
            </div>
            
        </section>

        <section className="footer-sec-3">
            <div className="footer-sec-3-div">
                <div className="icons">
                    
                    <a href="https://twitter.com/genesystechhub">
                        <img src={require("../resources/footer/twitter 1.png")} alt="twitter logo"/>
                    </a>
                    <a href="https://web.facebook.com/genesyshub/">
                        <img src={require("../resources/footer/facebook 1.png")} alt="facebook logo"/>
                    </a>
                    <a href="https://www.linkedin.com/company/genesystechhub/">
                        <img src={require("../resources/footer/linkedin 1.png")} alt="linkedin logo"/>
                    </a>
                    <a href="https://www.instagram.com/genesystechhub/">
                        <img src={require("../resources/footer/instagram 1.png")} alt="instagram logo"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCjiSVpNnioaySY7I9-4Ia7w">
                        <img src={require("../resources/footer/youtube-logotype 1.png")} alt="youtube logo"/>
                    </a>
                    <a href="https://www.vimeo.com">
                        <img src={require("../resources/footer/vimeo 1.png")} alt="vimeo logo"/>
                    </a>
                </div>

                <div className="copyright">
                    <p> &copy; GENESYS 2020</p>
                    <p> PRIVACY STATEMENT </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;
