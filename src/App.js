import React from 'react';
import './App.css';
import Header from '../src/components/header/Header';
import Bunner from '../src/components/bunner/Bunner';
import Advantages from '../src/components/advantages/Advantages';
import Menu from '../src/components/menu/Menu';
import Gallery from '../src/components/gallery/Gallery';
import Sets from '../src/components/sets/Sets';
import Contacts from '../src/components/contacts/Contacts';
import Footer from '../src/components/footer/Footer';



function App() {
  return (
    <div className='wrapper'>
        <Header></Header>
        <main>
            <Bunner></Bunner>
            <Advantages></Advantages>
            <Menu></Menu>
            <Gallery></Gallery>
            <Sets></Sets>
            <Contacts></Contacts>
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;