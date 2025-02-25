import React from 'react';
import labContent from '../labContent';

const Content = ({ selectedLab }) => {
    return (
        <main style={{ padding: "10px", flexGrow: 1 }}>
            <h2>{selectedLab || "Выберите лабораторную работу"}</h2>
            {selectedLab ? (
                <p>{labContent[selectedLab]}</p>
            ) : (
                <p></p>
            )}
        </main>
    );
};

export default Content;
