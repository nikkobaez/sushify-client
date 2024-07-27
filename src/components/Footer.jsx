import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"
import { Logo, LeafBranch4, FooterCard1, FooterCard2, FooterCard3, FooterCard4 } from "../assets"

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div 
                className="grid container footer__container"
                variants={slideIn("down", "tween", 0.25, 1, false)} 
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.10}}
            >
                <div>
                    <a href="#" className="footer__logo">
                        <img src={Logo} alt="logo image" /> 
                        SUSHIFY
                    </a>
                    
                    <p className="footer__description">
                        Food for the body is just not 
                        <br />
                        enough as there must also be 
                        <br />
                        food for the soul.
                    </p>
                </div>

                <div className="footer__content">
                    <div>
                        <h3 className="footer__title">
                            Main Menu
                        </h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Menus
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Offer
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">
                            Information
                        </h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Order & Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">
                                    Reservation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">
                            Address
                        </h3>
                        <ul className="footer__links">
                            <li className="footer__information">
                                1234 Main Street 
                                <br />
                                Houston, Texas 77001 
                            </li>
                            <li className="footer__information">
                                8AM - 6PM
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">
                            Social Media
                        </h3>

                        <ul className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                <i className="ri-instagram-fill"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </ul>
                    </div>
                </div>
                <img src={LeafBranch4} alt="footer leaf" className="footer__leaf" />
            </motion.div>

            <div className="container footer__info">
                <motion.div 
                    className="footer__card"
                    variants={slideIn("right", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >
                    <img src={FooterCard1} alt="footer image" />
                    <img src={FooterCard2} alt="footer image" />
                    <img src={FooterCard3} alt="footer image"/>
                    <img src={FooterCard4} alt="footer image" />
                </motion.div>

                <motion.span 
                    className="footer__copy"
                    variants={slideIn("left", "tween", 0.25, 1, false)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.10}}
                >
                    &#169; Copyright Nikko Baez. All rights reserved
                </motion.span>
            </div>
        </footer>
    )
}

export default Footer