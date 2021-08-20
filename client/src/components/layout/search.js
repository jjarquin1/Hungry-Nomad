import { useState, useEffect } from "react";
import { getTrucks } from "../../utlis/api";

const SearchBar = () => {

    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    useEffect(() => {
        getTrucks().then(({ data }) => {
            console.log(data);
        });
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Please enter zip,city, or state...'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                ></input>
                <input
                    type='submit'
                    value={'search'}
                    className='btn btn-dark btn-block'
                ></input>
            </form>
        </div>
    );
}

export default SearchBar;