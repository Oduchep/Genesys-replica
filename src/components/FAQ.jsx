import React from "react";
import "./FAQ.css";

class Frequent extends React.Component {
    render() {
        return (
            <div>
                <section className="FAQ-sect-1">
                    <img className="FAQ-photo" src={require("../resources/FAQ/Photo.png")} alt="hand"/>
                    <h1> FAQ </h1>
                </section>

                <section className="FAQ-sect-2">
                    <div>
                        <p> How many people can attend a course? </p>
                    </div>
                    <div>
                        <p> What’s the learning experience like? </p>
                    </div>
                    <div>
                        <p> Who are the coaches? </p>
                    </div>
                    <div>
                        <p> How far in advance should we book? </p>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                    </div>
                    <div>
                        <p> Can you customize your courses? </p>
                    </div>
                </section>
            </div>
        )
    }

}

export default Frequent;