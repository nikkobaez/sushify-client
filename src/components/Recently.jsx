import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { LeafBranch2, LeafBranch3, RecentlySalmonSushi } from "../assets"

const Recently = () => {
    return (
        <section className="recently section" id="recently">
            {/* RECENTLY CONTAINER */}
            <div className="grid container recently__container">
                {/* RECENTLY DATA */}
                <motion.div 
                    className="recently__data"
                    variants={slideIn("left", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >
                    <span className="section__subtitle">
                        Recently Added
                    </span>

                    <h2 className="section__title">
                        Sushi Samurai
                        <br />
                        Salmón Cheese
                    </h2>

                    <p className="recently__description">
                        Take a look at what's new and do not deprive
                        yourself of a good meal. Just enjoy and be happy
                    </p>

                    <a href="#" className="button">
                        Order Now <i className="ri-arrow-right-line"></i>
                    </a>
                </motion.div>

                <motion.img 
                    src={RecentlySalmonSushi} 
                    alt="recently image" 
                    className="recently__img"
                    variants={slideIn("right", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                />
            </div>
            <img src={LeafBranch2} alt="recently image" className="recently__leaf-1"/>
            <img src={LeafBranch3} alt="recently image" className="recently__leaf-2"/>
        </section>
    )
}

export default Recently