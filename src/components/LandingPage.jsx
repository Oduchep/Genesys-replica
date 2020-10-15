import React from "react";
import "./LandingPage.css";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p className="pt-2 pb-3 pl-2 pr-2 welcome">
          Genesys provides opportunities for young Nigerian techies and
          opportunities to grow and innovate.
        </p>
        <section className="d-flex fd-column fd-column-reverse landing-sec-1">
            <div className="d-flex flex-align-center justify-space-between">
              <img className="hidden ml-3" src={require("../resources/landing_page/Skip to Next Section.png")} alt="skip to next section" />
              <img className="img-lg banner-image" src={require("../resources/landing_page/Rectangle 36.png")} alt="students" />
            </div>
            <div className="pt-1 pb-1 pl-2 pr-2 we"> We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</div>
        </section>

        <section className="pt-3 pb-3 landing-sec-2">
          <img className="wdt-45 img-lg" src={require("../resources/landing_page/Photo.png")} alt="learnable" />
          <div className="wdt-40">
            <h2 className="purp-col t-underline pt-3"> Learnable </h2>
            <p className="pt-1 pb-1 pl-2 pr-2"> Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it. </p>
            <button className="btn-more"> LEARN MORE </button>
          </div>
        </section>

        <section className="pt-3 pb-3 fd-row-reverse landing-sec-3">
          <img className="wdt-45 img-lg" src={require("../resources/landing_page/Photo (1).png")} alt="Agora" />
          <div className="wdt-40">
            <h3 className="purp-col t-underline pt-3"> Agora </h3>
            <p className="pt-1 pb-1 pl-2 pr-2"> We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do. </p>
            <button className="btn-more"> LEARN MORE </button>
          </div>
        </section>

        <section className="pt-3 pb-3 landing-sec-4">
          <img className="wdt-45 img-lg" src={require("../resources/landing_page/Photo (2).png")} alt="StarZone" />
          <div className="wdt-40">
            <h3 className='purp-col t-underline pt-3'> StartZone </h3>
            <p className="pt-1 pb-1 pl-2 pr-2"> The business environment is harsh for early-stage businesses. We can help you rise above it all. </p>
            <button className="btn-more"> HERE'S HOW </button>
          </div>
        </section>

        <section className="pt-3 pb-3 fd-row-reverse landing-sec-5">
          <h1 className="pb-3 purp-col f-weight things"> Other Things We Do </h1>
          <div className='gen-code-pink'>
            <div className="ignite">
              <img className="img-sm" src={require("../resources/landing_page/Rectangle 42.png")} alt="Genesys Ignite" />
              <h3 className="t-underline pt-1 pb-2 purp-col"> Genesys Ignite </h3>
            </div>

            <div className="code-pink">
              <div>
                <img className="img-sm" src={require("../resources/landing_page/Rectangle 38.png")} alt="Codeville" />
                <h3 className="t-underline pt-1 pb-2 purp-col"> CodeVille </h3>
              </div>
              <div>
                <img className="img-sm" src={require("../resources/landing_page/Rectangle 38 (1).png")} alt="pink of summer code" />
                <h3 className="t-underline pt-1 pb-1 purp-col"> Pink Summer of Code </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-3 pb-3 landing-sec-6">
          <img className="img-lg" src={require("../resources/landing_page/Photo (3).png")} alt="StarZone" />
          <div>
            <h1 className="pt-1 pb-1 pl-3 pr-3 white-col f-weight"> The Best Team In The World </h1>
            <p className="pt-1 pb-1 pl-2 pr-2 white-col"> The business environment is harsh for early-stage businesses. We can help you rise above it all. </p>
            <button className="btn-more"> SEE TEAM </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
