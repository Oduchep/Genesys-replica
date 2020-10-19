import React from "react";
import "./ProductDesigner.css"
import SubNav from './SubNav';

class ProductDesign extends React.Component {
    render() {
        return (
            <div>
                <SubNav />
                <section className="pt-2 t-align des-sect-1">
                    <div className="profile-photo">
                        <img src={require("../resources/learnable_product_designer/Cutout 1.png")} alt="" />
                    </div>
                    <div className="title-holder">
                        <h1 className="purp-col f-weight font-40 title"> The Learnable Product Designer </h1>
                        <p> At Genesys, you'll be exposed to every discipline 
                            in our creative process – UX, UI, interaction 
                            design, and copywriting. You’ll be part of a 
                            dynamic team that's made up of like-minded, 
                            talented people. You'll work hard with them to 
                            create things that will amaze everyone 
                            everywhere.<br/><br/>

                            In addition to your team projects, you’ll be lending 
                            a hand to the creative team. Participating in 
                            brainstorm sessions, building winning pitches, 
                            preparing assets, and design scriptures for 
                            productions, you'll be in the thick of it all. <br/><br/>

                            Oh, and you’ll make amazing friends while you're 
                            at it!
                        </p><br/><br/>
                    </div>
                </section>

                <section className="des-sect-2">
                    <h1 className="vivid-quote f-weight"> “The greats weren’t great because at birth they could paint. 
                        The greats were great because they painted a lot.” 
                        - Macklemore 
                    </h1>
                </section>

                <section className="des-sect-3">
                    <div className="section-img-div">
                        <img className="section-img" src={require("../resources/learnable_product_designer/Photo.png")} alt="a pic" />
                    </div>
                    <div className="sect-text-div">
                        <h1 className=""> We expect you to… </h1>
                        <p className="pt-3 pb-3"> Play nice with other people. <br/><br/>

                            Be an actively engaged person. That means you 
                            are present, motivated, and social. <br/><br/>

                            Understand how to use the Figma design 
                            software <br/><br/>

                            Be able to create initial design layouts with 
                            confidence and know-how to effectively 
                            communicate concepts to everyone on your team. <br/><br/>

                            Have a basic understanding of design principles 
                            and theories <br/><br/>

                            To have creative courage. This is a tough industry, 
                            only the brave and sturdy remain. <br/><br/>

                            Be prepared to defend your decisions and take 
                            constructive criticism. <br/><br/>

                            To us, beauty without substance has no value. At 
                            Genesys, design thinking and execution are 
                            equally important, so we’re constantly on the 
                            lookout for not only the how but also the why.
                        </p>
                    </div>
                </section>
            </div>
        )
    }

}

export default ProductDesign;