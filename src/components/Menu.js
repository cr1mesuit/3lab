import React from 'react';

const Menu = ({ onSelectLab }) => {
    const labs = [
        'Лабораторная работа 1',
        'Лабораторная работа 2',
    ];

    return (
        <aside style={{ padding: "10px", background: "#f0f0f0", width: "200px" }}>
            <h3>Меню</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {labs.map((lab, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        <button
                            onClick={() => onSelectLab(lab)}
                            style={{ width: "100%", padding: "5px", cursor: "pointer" }}
                        >
                            {lab}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Menu;
