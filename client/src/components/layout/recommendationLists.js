import React from 'react'
import BusinessRating from './businessRating'

function recommendationLists({ data, loading }) {
    if (loading) return (
        <h3>Loading...</h3>
    )
    return (

        <div className="searchResults">
            {
                data.map(ele => (
                    <div className="container card">
                        <div class="row align-items-start">

                            <div className='col'>
                                <h3>{ele.name}</h3>
                                <img
                                    src={ele.image_url}
                                    alt='https://via.placeholder.com/150'
                                    className='round-img'
                                    style={{ width: '210px', height: '210px', boarderRadis: '200px' }}
                                />
                            </div>
                            <div className='col'>

                                <p>{ele.location.display_address}</p>
                                <BusinessRating reviewCount={ele.review_count} rating={ele.rating} />
                                <p></p>
                                <p>{ele.phone}</p>
                                <button id="favorites">Add to Favorites</button>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div >


    )
}

export default recommendationLists
