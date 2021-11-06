import React, {useEffect, useState} from "react";
import api from "../components/ApiService";
import { useParams, useLocation, useHistory } from "react-router-dom";
import MovieDetailView from './MovieDetailView';
import SearchView from './SearchView';


export default function () {

    const {movieid} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const history = useHistory()

    const firstQuery = location.search.substring(7, location.search.length);

    
    useEffect(() => {
        api(movieid).then(data => setMovie(data))
    }, [movieid])

    function HistorySearch(query){

        history.push({
            ...location,
           search: `query=${query}`});
    }

    console.log(firstQuery);

    return(
      <>  

        { movieid && movie
        ? <MovieDetailView movie = {movie} 
                firstQuery= {firstQuery}
        />
        : <SearchView firstQuery = {firstQuery}
                HistorySearch = {HistorySearch}
        />
        }

    </>
    )

} 