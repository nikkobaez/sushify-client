import { motion } from "framer-motion"
import { slideIn, staggerContainer } from "../utils/motion"
import { popularDishes } from "../constants"

const Popular = () => {
    return (
        <section className="popular section" id="popular">
            <span className="section__subtitle">
                The Best Food
            </span>
            <h2 className="section__title">
                Popular Dishes
                <motion.div 
                    className="grid container popular__container"
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >

                    {popularDishes.map((popularDish) => (
                        <motion.article 
                            className="popular__card"
                            variants={slideIn("down", "tween", 0.25, 1, true)}
                            key={popularDish.id}
                        >
                            <img src={popularDish.image} alt="popular image" className="popular__img" />
                            
                            <h3 className="popular__name">
                                {popularDish.name}
                            </h3>
                            
                            <span className="popular__description">
                                {popularDish.description}
                            </span>

                            <span className="popular__price">
                                {popularDish.price}
                            </span>

                            <button className="popular__button">
                                <i className="ri-shopping-bag-line"></i>
                            </button>
                        </motion.article>
                    ))}
                </motion.div>
            </h2>
        </section>
    )
}

export default Popular