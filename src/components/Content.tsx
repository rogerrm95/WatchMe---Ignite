import { useEffect, useState } from "react";
import { api } from "../services/api";

import { MovieCard } from "./MovieCard";

import '../styles/content.scss';
import { Header } from "./Header";

interface MovieProps {
    Genre_id: number,
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface ContentProps {
    IdGenre: number
}

export function Content({ IdGenre }: ContentProps) {

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${IdGenre}`).then(response => {
            setMovies(response.data);
        });

        api.get<GenreResponseProps>(`genres/${IdGenre}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [IdGenre]);

    return (
        <div className="container">

            <Header title={selectedGenre.title} />

            <main>
                <div className="movies-list">
                    {movies.map(movie => (
                        <MovieCard
                            key={movie.Title}
                            title={movie.Title}
                            poster={movie.Poster} 
                            runtime={movie.Runtime} 
                            rating={movie.Ratings[0].Value} 
                            />
                    ))}
                </div>
            </main>
        </div>
    )
}