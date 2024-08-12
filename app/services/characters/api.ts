import axios from 'axios';
import { Response } from '../../structs/character/characters'

const API_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters(): Promise<Response> {
    try {
        const response = await axios.get<Response>(API_URL);
        console.log("hola estoy aqui");
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}