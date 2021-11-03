
const APIKEY = '6456edf8e78b4973f18f7c8d63cd4cb6';

export default function apiConnect () {
    try{
   return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`)
            .then(response => response.json())
    }
    catch(error){
    return console.log(error);
    }

}
