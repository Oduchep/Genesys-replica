import React from "react";
import './Learnable.css';
import './FAQ.css';
import './Journal.css';


class Home extends React.Component {
    render() {
        return (
            <div>
                <section className="learnable-sect-1">
                    <div>
                    <h1> Coming soon: Learnable ‘20 </h1>
                    <p>We've started taking in applications for the next batch of 
                        learnable interns. Applications are on till the 21st of Febuary</p>
                    </div>
                    <div>
                        <p>Click link to download...</p>
                        <h1>Learnable ‘20 Brochure</h1>
                    </div>
                </section>

                <section className="learnable-sect-2">
                    <h1>Everything is Learnable</h1>
                    <p>Learnable is the perfect product development 
                        internship program brought to you by Genesys.</p>
                </section>

                <section className="learnable-sect-3">
                    <div className="dev-des">
                        <div className="dev-circle">
                            <p className="p-dev">Development</p>
                            <p>What to expect</p>
                        </div>
                        <div className="des-circle">
                            <p className="p-des">Product Design</p>
                            <p>What to expect</p>
                        </div>
                    </div>
                    <div>
                        <img className="hidden" src={require("../resources/learnable/Skip to Next Section.png")} alt="skip arrow"/>
                        <img src={require("../resources/learnable/Rectangle 4.png")} alt="youngsters"/>
                    </div>
                </section>

                <section className="learnable-sect-4">
                    <div className="learnable-sect-4-div-1">
                    <div>
                        <span>305</span>
                        <p>Young Software Developers Trained</p>
                    </div>
                    <div>
                        <span>2100</span>
                        <p>Tech Enthusiasts</p>
                    </div>
                    </div>
                    <div className="learnable-sect-4-div-2">
                    <div>
                        <span>8</span>
                        <p>Startups Incubated</p>
                    </div>
                    <div>
                        <span>250</span>
                        <p>Small Businesses supported</p>
                    </div>
                    </div>
                </section>

                <section className="learnable-sect-5">
                    <div className="profile-pic-div">
                    <img className="profile-pic" src={require("../resources/learnable/Cutout 1.png")} alt="profile pic"/>
                    </div>
                    
                    <div>
                        <h1>We Make People Great</h1>
                        <p>As part of our calculated efforts to contribute to the emerging knowledge
                             and skills driven economy of Nigeria, Learnable is a 6-month product 
                             development training program with an emphasis on software programming 
                             and product design. It is for outstanding young individuals who are passionate 
                             about building a career in the software industry. We primarily educate 
                             and groom software developers and designers, preparing them for the industry. 
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-6">
                    <div>
                        <img src={require("../resources/learnable/Photo.png")} alt="having fun"/>
                    </div>
                    <div>
                        <h1>An Unusual Learning Experience</h1>
                        <p>At Genesys, we believe in the learning processes as much as we believe 
                            in the results. By applying a combination of active and social learning 
                            methodologies, we create an environment that involves the learner 
                            in the learning process while providing avenues for collaboration and 
                            peer-to-peer mentorship.
                            
                            Our methods over the years have helped us discover ways to take education 
                            out of the classroom. We introduce our interns to learning by experimentation 
                            and problem-solving. To us, every task is an opportunity to learn.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-7">
                    <div>
                        <p>For Developers</p>
                        <h1>Learn To Build Sotware The Right Way</h1>
                        <p>We love to build stuff. Really awesome stuff. That’s why we have developed 
                            a learning program that will empower you to create amazing software the right 
                            way. We believe in learning through experimentation. Our aim is to nurture 
                            and grow bright young minds from the get-go because that’s how our industry 
                            will thrive.
                        </p>
                        <span> LEARN MORE </span>
                    </div>
                    <div>
                        <div>
                            <div>Program With Javascript</div>
                            <div>Version Control Git</div>
                        </div>
                        <div>
                            <div>Web Development with React</div>
                            <div>Building APIs with NodeJS</div>
                        </div>
                        <div>
                            <div>Managing Data with MongoDB</div>
                            <div>Deploying with Heroku</div>
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-8">
                    <div>
                        <p>For Designers</p>
                        <h1>Design Different</h1>
                        <p>We love to make things work perfectly. That’s why our 
                            design learning path exposes you to the science of 
                            user-oriented design. 
                            
                            Design is at the heart of everything we do at Genesys. 
                            Right from the start of the program, you’ll get your 
                            hands dirty as you get practically involved in the 
                            world’s most modern design concepts. At Genesys, 
                            we’re building designers who put the users first.
                        </p>
                        <span> LEARN MORE </span>
                    </div>
                    <div>
                        <div>
                            <div>Design User Interfaces</div>
                            <div>Craft User Experiences</div>
                        </div>
                        <div>
                            <div>Apply Design Thinking</div>
                            <div>Build Information Architecture</div>
                        </div>
                        <div>
                            <div>Copy write for Projects</div>
                            <div>Brand Products</div>
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-9">
                    <div>
                        <img src={require("../resources/learnable/Photo (1).png")} alt="working together"/>
                    </div>
                    <div>
                        <h1>Who Is Eligible?</h1>
                        <p>To be a participant of lernable, you need to be a young and 
                            passionate person interested in launching a super tech career. 
                            You will need to have foundational knowledge in whatever 
                            learning path you are applying for and be available for the 
                            six month duration of the program.
                            
                            To become a part of the Genesys family, you must express some 
                            of the qualities we consider important. You are someone that 
                            takes responsibilities and initiatives. You will also express 
                            the ability to produce quality stuff in good time with high consistency. 
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-10">
                    <div>
                        <img src={require("../resources/learnable/Photo (2).png")} alt="working together"/>
                    </div>
                    <div>
                        <h1>Our Culture</h1>
                        <p>Our culture are the unspoken things that make us who we are at 
                            Genesys. To become one of us, you need to be like the rest of us. 
                            We believe that excellence is a culture, and we are committed to 
                            a philosophy of consistent improvement in everything we do. We 
                            are passionate, candid and we trust in the power of collaboration.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-11">
                    <div>
                        <img src={require("../resources/learnable/several 1.png")} alt="working together"/>
                    </div>
                    <div>
                        <h1>Learning Can Be Fun...</h1>
                        <p>We believe learning should be a fun experience. For this reason, 
                            we don’t do all the learning in the classroom.
                            
                            The Learnable experience can not be complete without the bag of 
                            fun times which you’ll have. To us, every task is an opportunity 
                            to have some fun. But we do well to throw in a good number of 
                            activities to add to this. You will find yourself partaking in a 
                            lot of healthy activities such as cooking, sports, music, hangouts, 
                            and even random dates.
                            
                            Trust us when we say we know how to have fun.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-12">
                    <div>
                        <h1>Learn from the Experts</h1>
                        <p>As a learnable intern, you will be learning from the best software
                             developers and product designers our industry has to offer. 
                             You will spend the first 3 months in the classroom with industry 
                             experts who have a wealth of experience from developing amazing 
                             products for various customers in our industry.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src="" alt=""/>
                            <p>Nnamdi</p>
                            <p>Managing Director</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Ositadimma</p>
                            <p>Learnable Coordinator</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Ezra</p>
                            <p>Ass. Learnable Coordinator</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Idowu</p>
                            <p>Scrum Professional</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>David</p>
                            <p>Design Lead</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Emmanuel</p>
                            <p>Software Lead</p>
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-13">
                    <div>
                        <img src={require("../resources/learnable/several 2.png")} alt="working together"/>
                    </div>
                    <div>
                        <h1>Learning doesn’t always have to be in the classroom</h1>
                        <p>We have designed other learning activities that aren’t classroom-based. 
                            You will learn how to be a better person, how to have good conversations, 
                            how to work better with people and most importantly, how to lead other 
                            people. Hey! We’ll even teach you how to run a business during the Learnable 
                            Business Sessions.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-14">
                    <div>
                        <img src={require("../resources/learnable/several 2.png")} alt="working together"/>
                    </div>
                    <div>
                        <h1>Apply Your Knowledge</h1>
                        <p>Before you’re done with Learnable, you will apply everything you’ve learned. 
                            You’ll be part of a team made up of 2 designers and 4 developers. 
                            You’ll get to work alongside the Genesys team on projects and we’ll 
                            teach you how “the sauce” is made. By combining technology, design, 
                            and great ideas, your team will have the unique opportunity to collaborate 
                            with the Genesys team to bring your own concept to life, from the first 
                            pen sketches to the final functioning product. You’ll then get to show off 
                            your special project to everyone.
                        </p>
                        <p> GET STARTED </p>
                    </div>
                </section>

                <section className="learnable-sect-14">
                    <h1>FAQ</h1>
                    <div className="FAQ-sect-2">
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
                    </div>
                </section>

                <section className="learnable-sect-15 journal-sect-3-div">
                    <div>
                        <img className="journal-img-2" src={require("../resources/journal/image 23.png")} alt="lady pic" />
                        <p className="t-underline carr-green-col"> INSPIRATION </p><br/>
                        <h1 className="t-underline"> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1><br/>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                    <div>
                       <img className="journal-img-2" src={require("../resources/journal/image 24.png")} alt="lady pic" />
                        <p className="t-underline carr-green-col"> INSPIRATION </p><br/>
                        <h1 className="t-underline"> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1><br/>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                    <div>
                        <img className="journal-img-2" src={require("../resources/journal/image 25.png")} alt="lady pic" />
                        <p className="t-underline carr-green-col"> INSPIRATION </p><br/>
                        <h1 className="t-underline"> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1><br/>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                    <div>
                        <img className="journal-img-2" src={require("../resources/journal/image 26.png")} alt="lady pic" />
                        <p className="t-underline carr-green-col"> INSPIRATION </p><br/>
                        <h1 className="t-underline"> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1><br/>
                        <p> David Mong, Apr 9, 2020 </p>                        </div>
                </section>

                <section className="learnable-sect-16">
                    <div><h1>Mentioned In</h1></div>
                    <div>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </section>


            </div>
        )
    }

}

export default Home;