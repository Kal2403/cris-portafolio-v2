import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const App = () => {

    return (
        <main className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default App
