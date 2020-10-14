import React from "react";

class ProductDesign extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <div>
                        <img src={require("../resources/learnable_product_designer/Cutout 1.png")} alt="" />
                    </div>
                    <div>
                        <h1> The Learnable Product Designer </h1>
                        <p> At Genesys, you'll be exposed to every discipline 
                            in our creative process – UX, UI, interaction 
                            design, and copywriting. You’ll be part of a 
                            dynamic team that's made up of like-minded, 
                            talented people. You'll work hard with them to 
                            create things that will amaze everyone 
                            everywhere.

                            In addition to your team projects, you’ll be lending 
                            a hand to the creative team. Participating in 
                            brainstorm sessions, building winning pitches, 
                            preparing assets, and design scriptures for 
                            productions, you'll be in the thick of it all.

                            Oh, and you’ll make amazing friends while you're 
                            at it!
                        </p>
                    </div>
                </section>

                <section>
                    <h1> “The greats weren’t great because at birth they could paint. 
                        The greats were great because they painted a lot.” 
                        - Macklemore 
                    </h1>
                </section>

                <section>
                    <img src={require("../resources/learnable_product_designer/Photo.png")} alt="" />
                    <div>
                        <h1> We expect you to… </h1>
                        <p> Play nice with other people.

                            Be an actively engaged person. That means you 
                            are present, motivated, and social.

                            Understand how to use the Figma design 
                            software

                            Be able to create initial design layouts with 
                            confidence and know-how to effectively 
                            communicate concepts to everyone on your team.

                            Have a basic understanding of design principles 
                            and theories

                            To have creative courage. This is a tough industry, 
                            only the brave and sturdy remain.

                            Be prepared to defend your decisions and take 
                            constructive criticism.

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