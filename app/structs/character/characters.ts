import { Results } from "./result"

export interface Response {
    info: Info;
    results: Results[];
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}