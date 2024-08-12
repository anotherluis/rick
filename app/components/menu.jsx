"use client"

import React, { useState } from 'react';

const Menu = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-2">
                <ul className="flex space-x-4">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="block py-2 px-4 text-blue-300 hover:bg-gray-700 rounded">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
