import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { HomeSushiRolls, HomeSushiTitle, LeafBranch2, LeafBranch4 } from "../assets"

const Home = () => {
    return (
        <section className="home section" id="home">
            {/* HOME CONTAINER */}
            <div className="grid container home__container">
                {/* HOME IMAGE */}
                <motion.img 
                    variants={slideIn("down", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                    src={HomeSushiRolls} 
                    alt="home image" 
                    className="home__img"
                />
                
                {/* HOME DATA */}
                <motion.div 
                    className="home__data"
                    variants={slideIn("up", "tween", 0.25, 1, false)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >
                    <h1 className="home__title">
                        Enjoy Delicious
                        <div>
                            Sushi & More
                            <img src={HomeSushiTitle} alt="home image" />
                        </div>
                    </h1>

                    <p className="home__description">
                        Enjoy a good dinner with the best dishes in 
                        the restaurant and improve your day
                    </p>

                    <a href="#" className="button">
                        Order Now <i className="ri-arrow-right-line"></i>
                    </a>
                </motion.div>
            </div>

            <img src={LeafBranch2} alt="home image" className="home__leaf-1" />
            <img src={LeafBranch4} alt="home image" className="home__leaf-2" />
        </section>
    )
}

export default Home