import About from "../components/home/about"
import Hero from "../components/home/hero"
import Testimonial from "../components/home/testimonial"
import Navbar from "../components/navbar"

const Home = () => {
    return <main>
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonial/>
    </main>
}
export default Home