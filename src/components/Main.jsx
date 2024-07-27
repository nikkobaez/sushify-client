import Home from "./Home"
import About from "./About"
import Popular from "./Popular"
import Recently from "./Recently"
import Newsletter from "./Newsletter"

const Main = () => {
    return (
        <main className="main">
            <Home />
            <About />
            <Popular />
            <Recently />
            <Newsletter />
        </main>
    )
}

export default Main