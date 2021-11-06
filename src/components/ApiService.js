
const APIKEY = '6456edf8e78b4973f18f7c8d63cd4cb6';

export default function apiConnect (id = '', actors = false, reviews = false) {
    try{

        id = String(id);

        if (id.length === 0 ){
   return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`)
            .then(response => response.json())
        }

        if (id.length > 0 && actors !== true && reviews !== true ){
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
            .then(response => response.json()) 
        }

        if (actors === true && id.length > 0){
            return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`)
            .then(response => response.json()) 
        }

        if (reviews  === true && id.length > 0){
            return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}`)
            .then(response => response.json()) 
        }

    }
    catch(error){
    return console.log(error);
    }

}


