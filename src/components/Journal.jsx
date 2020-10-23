import React from "react";
import './Journal.css';
import MainNav from './MainNav';
import SubNav from './SubNav';

class Journal extends React.Component {
    render() {
        return (
            <div>
                <div className="navigation">
                    <MainNav />
                    <SubNav />
                </div>
                <section className="journal-sect-1">
                    <h1 className="purp-col f-weight font-40 font-96"> Journal </h1>
                    <button className="btn purp-col"> CATEGORIES </button>
                </section>

                <section className="journal-sect-2">
                    <img className="journal-img" src={require("../resources/journal/Photo.png")} alt="pic" />
                    <div className="journal-sect-2-div">
                        <p className="carr-green-col t-underline"> INSPIRATION </p><br/>
                        <h1 className="purp-col"> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about 
                        </h1><br/>
                        <p> Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Sit sapien arcu vitae orci at 
                            molestie. Pharetra quisque donec accumsan 
                            rhoncus risus. Urna magna turpis duis 
                            imperdiet elit, et, hendrerit viverra risus. 
                            Vulputate euismod commodo donec tincidunt 
                            et, aliquam. Eget scelerisque netus habitant dui 
                            porttitor cursus. Ipsum sem ut tortor ac 
                            ullamcorper. Lacus.
                        </p><br/><br/>
                        <div>
                            <img className="circle-photo" src={require("../resources/journal/Rectangle 44.png")} alt="round pic" />
                            <p> David Mong, Apr 9, 2020 </p><br/>
                        </div>
                    </div>
                </section>

                <section className="journal-sect-3">
                    <div className="journal-sect-3-div">
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
                            <p> David Mong, Apr 9, 2020 </p>
                        </div>
                    </div>
                    <div className="hidden journal-sect-3-div">
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
                            <p> David Mong, Apr 9, 2020 </p>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="btn purp-col"> LOAD MORE </button>
                    </div>
                </section>

                <section></section>
            </div>
        )
    }

}

export default Journal;