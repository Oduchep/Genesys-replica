import React from "react";
import "./LandingPage.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <p className="welcome">
          Genesys provides opportunities for young Nigerian techies and
          opportunities to grow and innovate.
        </p>
        <section className="landing-sec-1">
          <div>
            <div>
              <img src={require("./resources/landing_page/Skip to Next Section.png")} alt="skip to next section"/>
              <img className ="img-lg" src={require("./resources/landing_page/Rectangle 36.png")} alt="students"/>
            </div>
            <div className="section-p"> We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</div>
          </div>
        </section>

        <section className="landing-sec-2">
          <img className ="img-lg" src={require("./resources/landing_page/Photo.png")} alt="learnable"/>
          <div>
            <h2> Learnable </h2>
            <p className="section-p"> Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it. </p>
            <button className="btn-more"> LEARN MORE </button>
          </div>
        </section>

        <section className="landing-sec-3">
          <img className ="img-lg" src={require("./resources/landing_page/Photo (1).png")} alt="Agora"/>
          <div>
            <h3> Agora </h3>
            <p className="section-p"> We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do. </p>
            <button className="btn-more"> LEARN MORE </button>
          </div>
        </section>

        <section className="landing-sec-4">
        <img className ="img-lg" src={require("./resources/landing_page/Photo (2).png")} alt="StarZone"/>
          <div>
            <h3> StartZone </h3>
            <p className="section-p"> The business environment is harsh for early-stage businesses. We can help you rise above it all. </p>
            <button className="btn-more"> LEARN MORE </button>
          </div>
        </section>

        <section className="landing-sec-5">
          <h1> Other Things We Do </h1>
          <div>
            <div>
            <img className ="img-sm" src={require("./resources/landing_page/Rectangle 42.png")} alt="Genesys Ignite"/>
            <h3> Genesys Ignite </h3>
            </div>
            <div>
            <img className ="img-sm" src={require("./resources/landing_page/Rectangle 38.png")} alt="Codeville"/>
            <h3> CodeVille </h3>
            </div>
            <div>
            <img className ="img-sm" src={require("./resources/landing_page/Rectangle 38 (1).png")} alt="pink of summer code"/>
            <h3> Pink Summer of Code </h3>
            </div>
          </div>
        </section>

        <section className="landing-sec-6">
        <img className ="img-lg" src={require("./resources/landing_page/Photo (2).png")} alt="StarZone"/>
          <div>
            <h1> The Best Team In The World </h1>
            <p className="section-p"> The business environment is harsh for early-stage businesses. We can help you rise above it all. </p>
            <button className="btn-more"> SEE TEAM </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
