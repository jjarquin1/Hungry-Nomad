import React from "react";
import Rating from 'react-rating';


export function BusinessRating(props) {
    return (
        <div className='rating'>
            <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                readonly
                initialRating={props.rating}
            />
            <p>{props.reviewCount} Reviews</p>
        </div>
    );
}

export default BusinessRating;