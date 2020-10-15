import React from "react";
import './SoftwareDeveloper.css';

class SoftwareDeveloper extends React.Component {
    render() {
        return (
            <div>
                <section className="t-align soft-sect-1">
                    <div className="profile-photo">
                        <img src={require("../resources/learnable_software_developer/Cutout 1.png")} alt="software developer" />
                    </div>
                    <div className="title-holder">
                        <h1 className="purp-col f-weight font-40 title"> The Learnable Software Developer</h1>
                        <p> Creativity means a lot to us. So we look for people 
                            who can think both logistically and artistically, and 
                            who know that limits are made to be pushed. We value 
                            skill and aptitude, but we honor those who care about 
                            working with their team to add the Genesys flavour to 
                            every project. </p> <br/><br/>
                        <p> As a developer, being part of the team exposes 
                            you to a range of diverse, like-minded talented 
                            people who are sure to make the experience fun 
                            for you. You’ll get a shot at building amazing 
                            things, developing yourself, learning on the job, 
                            while exchanging healthy jokes and having 
                            random hangouts once in a while</p>
                    </div>
                </section>

                <section className="soft-sect-2">
                    <h1 className="carribean-quote f-weight"> “You are someone people can count on. 
                        Every day, you come in ready to make 
                        great things happen.” </h1>
                </section>
                <section className="soft-sect-3">
                    <img className="section-img" src={require("../resources/learnable_software_developer/Photo.png")} alt="computer" />
                    <div>
                        <h1 className="t-underline"> We expect you to… </h1>
                        <p className="pt-3 pb-3"> Play nice with other people.

                            Be an actively engaging person. That means you 
                            are present, motivated, and social. You know how 
                            to communicate effectively with your teammates.

                            Love to code. You understand the basics of 
                            programming and object-oriented design and 
                            development.

                            Have an eye for detail. Your keen observation 
                            helps you catch discrepancies and fix them 
                            quickly.

                            Be innately curious. Your love for technology is 
                            insatiable, so you’re always researching and 
                            experimenting. Learning new technical skills 
                            while on the job is something you look forward to.

                            Appreciate good design. You want to make 
                            something that doesn't just work flawlessly but 
                            looks amazing.
                        </p>
                    </div>
                </section>
            </div>
        )
    }

}

export default SoftwareDeveloper;