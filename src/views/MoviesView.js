import React, {useEffect, useState} from "react";
import api from "../components/ApiService";
import { useParams } from "react-router-dom";
import MovieDetailView from './MovieDetailView';
import SearchView from './SearchView';


export default function () {

    const {movieid} = useParams();
    const [movie, setMovie] = useState(null);
    
    
    useEffect(() => {
        api(movieid).then(data => setMovie(data))
    }, [movieid])
        
    return(
      <>  

        { movieid && movie
        ? <MovieDetailView movie = {movie} />
        : <SearchView />
        }

    </>
    )

} 