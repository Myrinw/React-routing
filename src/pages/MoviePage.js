import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function MoviePage() {
    const route_parameters = useParams()
    let imdb_id = route_parameters.something;
    const [movieData, set_movieData] = useState('');

    console.log(imdb_id);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://omdbapi.com/?apikey=d176fc84&i=${imdb_id}`).then(r => r.json());
            console.log("data", data);
            set_movieData(data);
        }
        fetchData();
    }, [imdb_id]);

    console.log('movie data: ', movieData)
    return <div>
        {!movieData ? <p>loading...</p>
            : <div>
                <h1>{movieData.Title}</h1>
                <img src={movieData.Poster} />
                <p>{movieData.Plot}</p>
                
            </div>}
    </div>
}