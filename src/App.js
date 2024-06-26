import React, { useState } from 'react';
import './App.css';
import Header from '../src/components/header/Header';
import Bunner from '../src/components/bunner/Bunner';
import Advantages from '../src/components/advantages/Advantages';
import Menu from '../src/components/menu/Menu';
import Gallery from '../src/components/gallery/Gallery';
import Sets from '../src/components/sets/Sets';
import Contacts from '../src/components/contacts/Contacts';
import Footer from '../src/components/footer/Footer';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import sun from './components/icons/headerImg/sun1.png';
import moon from './components/icons/headerImg/moon.png';


function App() {

    const [theme, setTheme] = useState(lightTheme);
    const [icon, setIcon] = useState(sun);


    const toggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme);
            setIcon(moon);
        } else {
            setTheme(lightTheme);
            setIcon(sun);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className='wrapper'>
                <Header toggleTheme={toggleTheme} icon={icon} />
                <Bunner />
                <Advantages />
                <Menu />
                <Gallery />
                <Sets />
                <Contacts />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;