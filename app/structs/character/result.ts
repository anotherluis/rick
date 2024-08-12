export interface Results {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Info;
    location: Info;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Info {
    name: string;
    url: string;
}