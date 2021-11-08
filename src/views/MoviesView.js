import React, {useEffect, useState, lazy, Suspense} from "react";
import api from "../components/ApiService";
import { useParams, useLocation, useHistory } from "react-router-dom";

const MovieDetailView = lazy(() => import('./MovieDetailView.js'));
const SearchView = lazy(() => import('./SearchView.js'));

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

    return(
      <>  

        { movieid && movie
        ? <Suspense fallback={<h1>AAAAAaaaaaaa.....</h1>}> <MovieDetailView movie = {movie} 
                    location = {location}
                    firstQuery = {firstQuery}
        /> </Suspense>
        : <Suspense fallback={<h1>AAAAAaaaaaaa.....</h1>}> <SearchView firstQuery = {firstQuery}
                HistorySearch = {HistorySearch}
        /></Suspense>
        }

    </>
    )

} 