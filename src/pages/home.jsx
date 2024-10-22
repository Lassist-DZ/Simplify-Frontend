import CTA_Btn from "../components/cta_button"
import About from "../components/home/about"
import Navbar from "../components/navbar"

const Home = () => {
    return <main>
        <Navbar/>
        {/* <CTA_Btn text={"Explore Now"} type={"cta_hero"}/> */}
        <About/>
    </main>
}
export default Home