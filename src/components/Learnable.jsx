import React from "react";
import './Learnable.css';
import './FAQ.css';
import SubNav from './SubNav';


class Home extends React.Component {
    render() {
        return (
            <div>
                <SubNav />
                <section className="learnable-sect-1">
                    <div className="text-center">
                    <h1 className="general-heading"> Coming soon: Learnable ‘20 </h1>
                    <p className="general-p">We've started taking in applications for the next batch of 
                        learnable interns. Applications are on till the 21st of Febuary</p>
                    </div>
                    <div className="text-center">
                        <p className="general-p">Click link to download...</p>
                        <h1 className="general-heading">Learnable ‘20 Brochure</h1>
                    </div>
                </section>

                <section className="learnable-sect-2">
                    <h1 className="text-center">Everything is Learnable</h1>
                    <p className="general-p">Learnable is the perfect product development 
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
                    <div className="learnable-sect-3-div text-center">
                        <img className="hidden" src={require("../resources/learnable/Skip to Next Section.png")} alt="skip arrow"/>
                        <img className="banner-img" src={require("../resources/learnable/Rectangle 4.png")} alt="youngsters"/>
                    </div>
                </section>

                <section className="learnable-sect-4">
                    <div className="learnable-sect-4-div">
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
                    </div>

                </section>

                <section className="learnable-sect-5">
                    <div className="profile-pic-div">
                    <img className="profile-pic" src={require("../resources/learnable/Cutout 1.png")} alt="profile pic"/>
                    </div>
                    
                    <div className="learnable-sect-5-div text-center">
                        <h1 className="general-heading">We Make People Great</h1>
                        <p className="general-p">As part of our calculated efforts to contribute to the emerging knowledge
                             and skills driven economy of Nigeria, Learnable is a 6-month product 
                             development training program with an emphasis on software programming 
                             and product design. It is for outstanding young individuals who are passionate 
                             about building a career in the software industry. We primarily educate 
                             and groom software developers and designers, preparing them for the industry. 
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-6">
                    <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/Photo.png")} alt="having fun"/>
                    </div>
                    <div className="text-center">
                        <h1 className="general-heading">An Unusual Learning Experience</h1>
                        <p className="general-p">At Genesys, we believe in the learning processes as much as we believe 
                            in the results. By applying a combination of active and social learning 
                            methodologies, we create an environment that involves the learner 
                            in the learning process while providing avenues for collaboration and 
                            peer-to-peer mentorship. <br/><br/>
                            
                            Our methods over the years have helped us discover ways to take education 
                            out of the classroom. We introduce our interns to learning by experimentation 
                            and problem-solving. To us, every task is an opportunity to learn.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-7">
                    <div className="text-center">
                        <p>For Developers</p>
                        <h1 className="general-heading">Learn To Build Sotware The Right Way</h1>
                        <p className="general-p">We love to build stuff. Really awesome stuff. That’s why we have developed 
                            a learning program that will empower you to create amazing software the right 
                            way. We believe in learning through experimentation. Our aim is to nurture 
                            and grow bright young minds from the get-go because that’s how our industry 
                            will thrive.
                        </p>
                        <span className="general-btn"> LEARN MORE </span> <br/><br/>
                    </div>
                    <div className="rainbow-div">
                        <div className="rainbow">
                            <div className="rainbow-1">Program With Javascript</div>
                            <div className="rainbow-2">Version Control Git</div>
                        </div>
                        <div className="rainbow">
                            <div className="rainbow-3">Web Development with React</div>
                            <div className="rainbow-4">Building APIs with NodeJS</div>
                        </div>
                        <div className="rainbow">
                            <div className="rainbow-5">Managing Data with MongoDB</div>
                            <div className="rainbow-6">Deploying with Heroku</div>
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-8">
                    <div className="text-center">
                        <p>For Designers</p>
                        <h1 className="general-heading">Design Different</h1>
                        <p className="general-p">We love to make things work perfectly. That’s why our 
                            design learning path exposes you to the science of 
                            user-oriented design. <br/> <br/>
                            
                            Design is at the heart of everything we do at Genesys. 
                            Right from the start of the program, you’ll get your 
                            hands dirty as you get practically involved in the 
                            world’s most modern design concepts. At Genesys, 
                            we’re building designers who put the users first.
                        </p>
                        <span className="general-btn"> LEARN MORE </span><br/><br/>
                    </div>
                    <div className="rainbow-div">
                        <div className="rainbow">
                            <div className="rainbow-7">Design User Interfaces</div>
                            <div className="rainbow-8">Craft User Experiences</div>
                        </div>
                        <div className="rainbow">
                            <div className="rainbow-9">Apply Design Thinking</div>
                            <div className="rainbow-10">Build Information Architecture</div>
                        </div>
                        <div className="rainbow">
                            <div className="rainbow-11">Copy write for Projects</div>
                            <div className="rainbow-12">Brand Products</div>
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-9">
                    <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/Photo (1).png")} alt="working together"/>
                    </div>
                    <div className="text-center">
                        <h1 className="general-heading">Who Is Eligible?</h1>
                        <p className="general-p">To be a participant of lernable, you need to be a young and 
                            passionate person interested in launching a super tech career. 
                            You will need to have foundational knowledge in whatever 
                            learning path you are applying for and be available for the 
                            six month duration of the program. <br/><br/>
                            
                            To become a part of the Genesys family, you must express some 
                            of the qualities we consider important. You are someone that 
                            takes responsibilities and initiatives. You will also express 
                            the ability to produce quality stuff in good time with high consistency. 
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-10">
                    <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/Photo (2).png")} alt="working together"/>
                    </div>
                    <div className="text-center">
                        <h1 className="general-heading">Our Culture</h1>
                        <p className="general-p">Our culture are the unspoken things that make us who we are at 
                            Genesys. To become one of us, you need to be like the rest of us. 
                            We believe that excellence is a culture, and we are committed to 
                            a philosophy of consistent improvement in everything we do. We 
                            are passionate, candid and we trust in the power of collaboration.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-11">
                    <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/several 1.png")} alt="working together"/>
                    </div>
                    <div className="text-center">
                        <h1 className="general-heading">Learning Can Be Fun...</h1>
                        <p className="general-p">We believe learning should be a fun experience. For this reason, 
                            we don’t do all the learning in the classroom. <br/><br/>
                            
                            The Learnable experience can not be complete without the bag of 
                            fun times which you’ll have. To us, every task is an opportunity 
                            to have some fun. But we do well to throw in a good number of 
                            activities to add to this. You will find yourself partaking in a 
                            lot of healthy activities such as cooking, sports, music, hangouts, 
                            and even random dates. <br/><br/>
                            
                            Trust us when we say we know how to have fun.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-12">
                    <div className="text-center">
                        <h1 className="general-heading">Learn from the Experts</h1>
                        <p className="general-p">As a learnable intern, you will be learning from the best software
                             developers and product designers our industry has to offer. 
                             You will spend the first 3 months in the classroom with industry 
                             experts who have a wealth of experience from developing amazing 
                             products for various customers in our industry.
                        </p>
                    </div>
                    <div>
                        <div className="organisers-div">
                            <div>
                                <img className="organisers-pic" src={require("../resources/learnable/nnamdi.png")} alt="managing director"/>
                                <p className="organiser-name">Nnamdi</p>
                                <p>Managing Director</p>
                            </div>
                            <div>
                                <img className="organisers-pic" src={require("../resources/learnable/osita.png")} alt="learnable coordinator"/>
                                <p className="organiser-name">Ositadimma</p>
                                <p>Learnable Coordinator</p>
                            </div>
                        </div>

                        <div className="organisers-div">
                            <div>
                                <img className="organisers-pic" src={require("../resources/learnable/ezra.png")} alt="assistant learnable coordinator"/>
                                <p className="organiser-name">Ezra</p>
                                <p>Ass. Learnable Coordinator</p>
                            </div>
                            <div>
                                <img className="organisers-pic" src={require("../resources/learnable/idowu.png")} alt="scrum professional"/>
                                <p className="organiser-name">Idowu</p>
                                <p>Scrum Professional</p>
                            </div>
                        </div>

                        <div className="organisers-div">
                            <div>
                                <img className="organisers-pic" src={require("../resources/learnable/david.png")} alt="design lead"/>
                                <p className="organiser-name">David</p>
                                <p>Design Lead</p>
                            </div>
                            <div>
                                <img className="organisers-pic" src={require("../resources/learnable/emmanuel.png")} alt="software lead"/>
                                <p className="organiser-name">Emmanuel</p>
                                <p>Software Lead</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-13">
                    <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/several 2.png")} alt="working together"/>
                    </div>
                    <div classname="text-center">
                        <h1 className="general-heading">Learning doesn’t always have to be in the classroom</h1>
                        <p className="general-p">We have designed other learning activities that aren’t classroom-based. 
                            You will learn how to be a better person, how to have good conversations, 
                            how to work better with people and most importantly, how to lead other 
                            people. Hey! We’ll even teach you how to run a business during the Learnable 
                            Business Sessions.
                        </p>
                    </div>
                </section>

                <section className="learnable-sect-14">
                    <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/Photo (3).png")} alt="working together"/>
                    </div>
                    <div className="text-center">
                        <h1 className="general-heading">Apply Your Knowledge</h1>
                        <p className="general-p">Before you’re done with Learnable, you will apply everything you’ve learned. 
                            You’ll be part of a team made up of 2 designers and 4 developers. 
                            You’ll get to work alongside the Genesys team on projects and we’ll 
                            teach you how “the sauce” is made. By combining technology, design, 
                            and great ideas, your team will have the unique opportunity to collaborate 
                            with the Genesys team to bring your own concept to life, from the first 
                            pen sketches to the final functioning product. You’ll then get to show off 
                            your special project to everyone.
                        </p>
                        <span className="general-btn"> GET STARTED </span><br/><br/>
                    </div>
                </section>

                <section className="learnable-sect-15">
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

                <section className="learnable-sect-16">
                    <h1 className="general-heading"> Journal </h1>
                    <div className="learnable-sect-16-div">
                        <div className="text-center">
                            <img className="general-pic" src={require("../resources/learnable/image 23.png")} alt="lady pic" />
                            <p className="general-btn"> INSPIRATION </p><br/>
                            <h1 className="general-heading"> Learn Design Thinking like a Pro and Build 
                                Projects that People will care about </h1><br/>
                            <p> David Mong, Apr 9, 2020 </p><br/><br/>
                        </div>
                        <div className="text-center">
                        <img className="general-pic" src={require("../resources/learnable/image 24.png")} alt="lady pic" />
                            <p className="general-btn"> INSPIRATION </p><br/>
                            <h1 className="general-heading"> Learn Design Thinking like a Pro and Build 
                                Projects that People will care about </h1><br/>
                            <p> David Mong, Apr 9, 2020 </p><br/><br/>
                        </div>
                        <div className="text-center">
                            <img className="general-pic" src={require("../resources/learnable/image 25.png")} alt="lady pic" />
                            <p className="general-btn"> INSPIRATION </p><br/>
                            <h1 className="general-heading"> Learn Design Thinking like a Pro and Build 
                                Projects that People will care about </h1><br/>
                            <p> David Mong, Apr 9, 2020 </p> <br/><br/>
                        </div>
                        <div className="text-center">
                            <img className="general-pic" src={require("../resources/learnable/image 26.png")} alt="lady pic" />
                            <p className="general-btn"> INSPIRATION </p><br/>
                            <h1 className="general-heading"> Learn Design Thinking like a Pro and Build 
                                Projects that People will care about </h1><br/>
                            <p> David Mong, Apr 9, 2020 </p>                  
                        </div>
                    </div>
                </section>

                <section className="learnable-sect-17">
                    <div className="text-center">
                        <h1 className="general-heading">Mentioned In</h1>
                    </div>
                    <div className="text-center last">
                        <img className="pr-2" src={require("../resources/learnable/image 27.png")} alt="fast company"/>
                        <img src={require("../resources/learnable/image 28.png")} alt="ux magazine"/>
                    </div>
                    <div className="text-center middle pt-2 pb-2">
                        <img className="pr-2" src={require("../resources/learnable/image 29.png")} alt="wired"/>
                        <img src={require("../resources/learnable/image 30.png")} alt="web vision"/>
                    </div>
                    <div className="text-center last">
                        <img src={require("../resources/learnable/image 31.png")} alt="interaction south america"/>
                    </div>
                </section>


            </div>
        )
    }

}

export default Home;