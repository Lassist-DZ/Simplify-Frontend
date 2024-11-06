import { useState } from "react";
import Navbar from "../components/navbar";
const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <main className="relative">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </main>
}
export default About