import { useLocation } from 'react-router-dom';
import BusinessRating from '../components/layout/businessRating';
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
                                    src={trucks.image_url}
                                    alt='https://via.placeholder.com/150'
                                    className='round-img'
                                    style={{ width: '210px', height: '210px', boarderRadis: '200px' }}
                                />
                            </div>
                            <div className='col'>
                                <p>{trucks.location.display_address}</p>
                                {/* <p>{trucks.categories}</p> */}
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