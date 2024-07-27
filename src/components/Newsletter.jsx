import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { NewsletterSushi } from "../assets"

const Newsletter = () => {
    return (
        <section className="newsletter section">
            {/* NEWSLETTER CONTAINER */}
            <motion.div 
                className="container newsletter__container"
                variants={slideIn("down", "tween", 0.25, 1, false)} 
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.10}}
            >
                {/* NEWSLETTER DATA */}
                <div className="grid newsletter__content">
                    <img src={NewsletterSushi} alt="newsletter image" className="newsletter__img"/>
                    <div className="newsletter__data">
                        <span className="section__subtitle">
                            Newsletter
                        </span>
                        
                        <h2 className="section__title">
                            Subscribe For 
                            <br />
                            Offer Updates
                        </h2>

                        <form action="" className="newsletter__form">
                            <input type="email" placeholder="Email Address" className="newsletter__input" />
                            
                            <a href="#" className="button newsletter__button">
                                Subscribe <i className="ri-send-plane-line"></i>
                            </a>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Newsletter