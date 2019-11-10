export interface SearchApiResponse {
    page?: number;
    total_pages?: number;
    total_results?: number;
    results?: MovieDetail[];
}

export interface MovieDetailsApiResponse {
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    imdb_id: string;
}

export interface MovieDetail {
    id: number;
    title: string;
    release_date?: string;
    overview: string;
    poster_path: string;
}

export enum ErrorStates {
    "NO_DATA",
    "UNEXPECTED_ERROR"
}