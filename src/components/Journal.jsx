import React from "react";

class Journal extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h1> Journal </h1>
                    <button> CATEGORIES </button>
                </section>

                <section>
                    <img src={require("../resources/journal/Photo 42.png")} alt="pic" />
                    <div>
                        <p> INSPIRATION </p>
                        <h1> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about 
                        </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Sit sapien arcu vitae orci at 
                            molestie. Pharetra quisque donec accumsan 
                            rhoncus risus. Urna magna turpis duis 
                            imperdiet elit, et, hendrerit viverra risus. 
                            Vulputate euismod commodo donec tincidunt 
                            et, aliquam. Eget scelerisque netus habitant dui 
                            porttitor cursus. Ipsum sem ut tortor ac 
                            ullamcorper. Lacus.
                        </p>
                        <div>
                            <img src={require("../resources/journal/Photo 42.png")} alt="round pic" />
                            <p> David Mong, Apr 9, 2020 </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <img src={require("../resources/journal/image 23.png")} alt="lady pic" />
                        <p> INSPIRATION </p>
                        <h1> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                    <div>
                        <img src={require("../resources/journal/image 23.png")} alt="lady pic" />
                        <p> INSPIRATION </p>
                        <h1> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                    <div>
                        <img src={require("../resources/journal/image 23.png")} alt="lady pic" />
                        <p> INSPIRATION </p>
                        <h1> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                    <div>
                        <img src={require("../resources/journal/image 23.png")} alt="lady pic" />
                        <p> INSPIRATION </p>
                        <h1> Learn Design Thinking like a Pro and Build 
                            Projects that People will care about </h1>
                        <p> David Mong, Apr 9, 2020 </p>
                    </div>
                </section>

                <section></section>
            </div>
        )
    }

}

export default Journal;