import { useEffect, useRef } from "react"
import { Logo, LeafBranch4, LeafBranch3 } from "../assets"

const Header = () => {
    const navMenuRef = useRef(null)
    const headerRef = useRef(null)
    const themeRef = useRef(null)

    useEffect(() => {
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')
        
        const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? 'dark' : 'light'
        const getCurrentIcon = () => themeRef.current.classList.contains("ri-sun-line") ? 'ri-moon-line' : 'ri-sun-line'

        // We validate if the user previously chose a topic
        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
            themeRef.current.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove']( 'ri-sun-line')
        }

        const handleTheme = () => {
            document.body.classList.toggle('dark-theme')
            themeRef.current.classList.toggle('ri-sun-line')
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        }


        const handleScroll = () => {
            if (window.scrollY >= 50) {
                headerRef.current.classList.add("bg-header")
            } else {
                headerRef.current.classList.remove("bg-header")
            }
        }

        window.addEventListener("scroll", handleScroll)
        themeRef.current.addEventListener("click", handleTheme)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            themeRef.current.removeEventListener("click", handleTheme)
        }
    }, [])

    return (
        <header ref={headerRef} className='header' id="header">     
            {/* NAV CONTAINER */}
            <nav className='container nav'>
                {/* NAV LOGO */}
                <a href="#" className="nav__logo">
                    <img src={Logo} alt="logo image" />
                    SUSHIFY
                </a>

                {/* NAV MENU  */}
                <div ref={navMenuRef} className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                About
                            </a>
                        </li>   
                        <li className="nav__item">
                            <a href="#popular" className="nav__link">
                                Popular
                            </a>
                        </li>   
                        <li className="nav__item">
                            <a href="#recently" className="nav__link">
                                Recently
                            </a>
                        </li>     
                    </ul>

                    {/* CLOSE BUTTON */} 
                    <div onClick={() => navMenuRef.current.classList.remove("show-menu")} className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>

                    <img src={LeafBranch4} alt ="nav image" className="nav__img-1"/>
                    <img src={LeafBranch3} alt ="nav image" className="nav__img-2"/>
                </div>

                {/* NAV BUTTONS */}
                <div className="nav__buttons">
                    {/* THEME CHANGE BUTTON */}
                    <i ref={themeRef} className="change-theme ri-moon-line" id="theme-button"></i>

                    {/* TOGGLE BUTTON */}
                    <div onClick={() => navMenuRef.current.classList.add("show-menu")} className="nav__toggle" id="nav-toggle">
                        <i className="ri-apps-2-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header