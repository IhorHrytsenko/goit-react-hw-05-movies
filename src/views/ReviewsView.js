import React, {useEffect, useState} from 'react';
import api from '../components/ApiService';

export default function (movie) {

    const {movieId} = movie; 
    const [reviews, setReviews] = useState(null);



    useEffect(() => {
        api(movieId, false, true).then(data => setReviews(data.results)
    );}, [movieId]) 


    return (

        <ul>
            {reviews && reviews.length > 0 ?
            reviews.map(review => <li key={review.id}>
            <p>Автор: {review.author}</p>
            <p>{review.content}</p>    
            </li>)
            : <p>К сожалению, отзывов по данному фильну нет</p>
            }
        </ul>

    )

}
