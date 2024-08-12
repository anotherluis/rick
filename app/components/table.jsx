"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Table = ({ data }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCharacterClick = (character) => {
        if (selectedCharacter && selectedCharacter.id === character.id) {
            setSelectedCharacter(null);
        } else {
            setSelectedCharacter(character);
        }
    };

    const filteredData = () => {
        return data.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData().slice(startIndex, endIndex);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar personajes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded w-full text-black bg-white"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getPaginatedData().map(character => (
                    <div
                        key={character.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                        onClick={() => handleCharacterClick(character)}
                    >
                        <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-black">{character.name}</h2>
                            <p className="text-gray-700">Status: {character.status}</p>
                            <p className="text-gray-700">Species: {character.species}</p>
                            <p className="text-gray-700">Location: {character.location.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 rounded border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} hover:bg-blue-600 hover:text-white`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {selectedCharacter && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-black p-6 rounded-lg shadow-lg w-1/2 max-w-md">
                        <h2 className="text-2xl text-black font-bold mb-4">{selectedCharacter.name}</h2>
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-full h-64 object-cover mb-4" />
                        <p className="text-gray-700 text-black"><strong>Status:</strong> {selectedCharacter.status}</p>
                        <p className="text-gray-700 text-black"><strong>Species:</strong> {selectedCharacter.species}</p>
                        <p className="text-gray-700 text-black"><strong>Gender:</strong> {selectedCharacter.gender}</p>
                        <p className="text-gray-700 text-black"><strong>Type:</strong> {selectedCharacter.type}</p>
                        <p className="text-gray-700 text-black"><strong>Origin:</strong> {selectedCharacter.origin.name}</p>
                        <p className="text-gray-700 text-black"><strong>Location:</strong> {selectedCharacter.location.name}</p>
                        <p className="text-gray-700 text-black"><strong>Episodes:</strong> {selectedCharacter.episode.length}</p>
                        <p className="text-gray-700 text-black"><strong>Created:</strong> {selectedCharacter.created}</p>
                        <button
                            onClick={() => setSelectedCharacter(null)}
                            className="mt-4 bg-blue-500  px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
    })).isRequired,
};

export default Table;