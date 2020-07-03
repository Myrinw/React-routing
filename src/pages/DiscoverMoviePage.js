import React, { useState, useEffect } from "react";
import './DiscoverMoviePage.scss';
import Movie from '../components/Movie';
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";


export default function DiscoverMoviesPage() {
    const [searchText, set_searchText] = useState("");
    const [searchStatus, set_searchStatus] = useState("");
    let movieArr = '';
    const history = useHistory();
    const route_parameters = useParams();
    const params = route_parameters.searchtext;


    const navigateToSearch = () => {
        const routeParam = encodeURIComponent(searchText);
        history.push(`/discover/${routeParam}`);
    }

    useEffect(() => {
        async function search() {
            set_searchStatus({ status: "searching..." })

            const data = await fetch(
                `https://omdbapi.com/?apikey=d176fc84&s=${params}`
            ).then(r => r.json());

            set_searchStatus({ status: "done", data: data });
        }
        search();
    },
        [route_parameters]
    )

    console.log(route_parameters);
    if (searchStatus.status === "done") {
        // const fetchedMovies = searchStatus.data.Search;
        // console.log(fetchedMovies);
        // movieArr = fetchedMovies.map(function (data) {
        //     return data.title
        // })
        const test = searchStatus.data.Search;
        movieArr = test.map(function (data) {
            return <Movie id={data.imdbID} title={data.Title} year={data.Year} img={data.Poster} />
        })
        console.log(test);
        console.log(movieArr);
    }
    //console.log(movieArr);


    //console.log(searchStatus);

    return (
        <div>
            <h1>Discover some movies!</h1>
            <p>{searchStatus.status}</p>
            <p>
                <input
                    value={searchText}
                    onChange={e => set_searchText(e.target.value)}
                />
                <button onClick={navigateToSearch}>Search</button>
            </p>
            <div className="movies">{searchStatus.status === "done" ? movieArr : ""}</div>
        </div>
    );
}