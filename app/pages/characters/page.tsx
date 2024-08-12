"use server";
import Menu from "../../components/menu";
import Table from '../../components/Table';
import { fetchCharacters } from "../../services/characters/api";
import { Response } from '../../structs/character/characters';
import { Results } from "../../structs/character/result";

export default async function characters() {
    let data: Results[] = [];
    let error: string | null = null;

    try {
        const response: Response = await fetchCharacters();
        data = response?.results || [];
    } catch (err) {
        console.error('Error fetching characters:', err);
        error = 'Failed to load characters';
    }

    const menuItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Personajes', href: '#' },
    ];

    return (
        <main className="bg-gray-100 min-h-screen p-6">
            <Menu items={menuItems} />
            <div className="max-w-7xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Personajes</h1>
                {error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <Table data={data} />
                )}
            </div>
        </main>
    );
}