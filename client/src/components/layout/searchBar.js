import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrucks } from "../../utlis/api";

const SearchBar = () => {

    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    useEffect(() => {
        console.log("search component!")
        getTrucks().then(({ data }) => {
            console.log(data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div id="searchDiv">
            <form onSubmit={handleSubmit} className='form' >
                <input
                    type='text'
                    name='text'
                    placeholder='Please enter zip,city, or state...'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                ></input>
                <Link to='/search'>
                    <input
                        type='submit'
                        value={'search'}
                        className='btn btn-dark btn-block'
                    ></input>
                </Link>
            </form>
        </div>
    );
}

export default SearchBar;