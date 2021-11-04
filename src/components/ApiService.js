
const APIKEY = '6456edf8e78b4973f18f7c8d63cd4cb6';

export default function apiConnect (id = '') {
    try{

        // console.log("length ", id.length);

        if (id.length === 0 ){
   return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`)
            .then(response => response.json())
        }
        if (id.length > 0){
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
            .then(response => response.json()) 
        }

    }
    catch(error){
    return console.log(error);
    }

}


//https://api.themoviedb.org/3/movie/763788?api_key=6456edf8e78b4973f18f7c8d63cd4cb6/p1oXIsU3xgfdtl0gfjovzx1Gj1g.jpg