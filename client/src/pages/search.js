import { useLocation } from 'react-router-dom';
import { FOOD_TRUCK } from '../utlis/mutations';
import BusinessRating from '../components/businessRating';
import { useState, useEffect } from 'react';

const Search = () => {
    const location = useLocation();
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        console.log(location.state.businesses)

        if (location.state.businesses) {
            setBusinesses(location.state.businesses)
        }
    }, [])


    return (
        <div>
            {
                businesses.map(trucks => (
                    <div className="container card">
                        <div class="row align-items-start">

                            <div className='col'>
                                <h3>{trucks.name}</h3>
                                <img
                                    //src='https://via.placeholder.com/150'
                                    src={trucks.image_url}
                                    alt='https://via.placeholder.com/150'
                                    className='round-img'
                                    style={{ width: '210px', height: '210px', boarderRadis: '200px' }}
                                />
                            </div>
                            <div className='col'>
                                <p>{trucks.rating}</p>
                                <p>{trucks.location.address1}</p>
                                <p>{trucks.location.city}</p>
                                <p>{trucks.location.state}</p>
                                <button className='button'> URL </button>
                            </div>

                        </div>
                    </div>



                ))
            }
        </div >
    );
}

export default Search;