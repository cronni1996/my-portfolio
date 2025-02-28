import React from 'react';
import Header from './components/Header/Header';
import Hero from "@/components/Hero/Hero.jsx";
import Projects from "@/components/Projects/Projects.jsx";
import About from './components/About/About';
import './App.module.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Projects/>
        </div>
    );
}

export default App;