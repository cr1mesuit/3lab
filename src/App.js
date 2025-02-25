import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
    const [selectedLab, setSelectedLab] = useState('');

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navigation />
            <Header />
            <div style={{ display: "flex", flexGrow: 1 }}>
                <Menu onSelectLab={setSelectedLab} />
                <Content selectedLab={selectedLab} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
