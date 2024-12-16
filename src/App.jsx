import styles from "./App.module.css"
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/contact";
import { Projects } from "./components/Projects/Projects";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/navbar";
import { Experience } from "./components/Experience/Experience";


function App() {

  return ( 
    <div className={styles.App}>
        <Navbar/> 
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/> 

        
    </div>
  );
}

export default App
