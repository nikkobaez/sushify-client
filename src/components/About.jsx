import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { LeafBranch1, AboutSushi } from "../assets"

const About = () => {
    return (
        <section className="about section" id="about">
            {/* ABOUT CONTAINER */}
            <div className="grid about__container container">
                {/* ABOUT DATA */}
                <motion.div 
                    className="about__data"
                    variants={slideIn("left", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >
                    <span className="section__subtitle">
                        About Us
                    </span>

                    <h2 className="about__title section__title">
                        We Provide
                        <br />
                        Healthy Food
                    </h2>

                    <p className="about__description">
                        Food comes to us from our relatives, whether
                        they have wings or roots. This is how we consider
                        food as it also has a culture. It has a history that
                        passes from generation to generation.
                    </p>
                </motion.div>

                <motion.img 
                    src={AboutSushi} 
                    alt="about image" 
                    className="about__img"
                    variants={slideIn("right", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                />
            </div>
            <img src={LeafBranch1} alt="about image" className="about__leaf" />
        </section>
    )
}

export default About