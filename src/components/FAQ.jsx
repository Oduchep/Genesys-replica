import React from "react";
import "./FAQ.css";
import MainNav from './MainNav';
import SubNav from './SubNav';

class Frequent extends React.Component {
    render() {
        return (
            <div>
                <div className="navigation">
                    <MainNav />
                    <SubNav />
                </div>
                <section className="FAQ-sect-1">
                    <img className="FAQ-photo" src={require("../resources/FAQ/Photo.png")} alt="hand"/>
                    <h1> FAQ </h1>
                </section>

                <section className="FAQ-sect-2">
                    <div>
                        <p> How many people can attend a course? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> What’s the learning experience like? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> Who are the coaches? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> How far in advance should we book? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                        <img src={require("../resources/FAQ/Vector 7.png")} alt="an arrow"/>
                    </div>
                </section>
            </div>
        )
    }

}

export default Frequent;