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
                businesses.map(biz => (
                    <div className='card text-center'>
                        <h3>{biz.name}</h3>
                        <img
                            //src='https://via.placeholder.com/150'
                            src={biz.image_url}
                            alt=''
                            className='round-img'
                            style={{ width: '210px', height: '210px', boarderRadis: '200px' }}
                        />
                        <div></div>
                        <p>info here</p>
                        <p>{biz.location.address1}</p>
                        {/* <p><BusinessRating /></p> */}
                    </div>
                ))
            }
        </div>
    );
}

export default Search;