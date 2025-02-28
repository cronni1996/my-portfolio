//import React from 'react';
import Header from './components/Header/Header';
import Hero from "@/components/Hero/Hero.jsx";
import Projects from "@/components/Projects/Projects.jsx";
import About from './components/About/About';
import Contact from "@/components/Contact/Contact.jsx";
import './App.module.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Projects/>
            <About/>
            <Contact/>
        </div>
    );
}

export default App;