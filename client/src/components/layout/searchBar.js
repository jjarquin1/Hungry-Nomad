import { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getTrucks } from "../../utlis/api";

const SearchBar = () => {
    const history = useHistory();
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getTrucks(location).then(({ data }) => {
            console.log(data);
            history.push('/search', { ...data })

        }).catch(err => console.log(err))
    }

    /**
     * useEffect(() => {
        console.log("search component!")
        getTrucks().then(({ data }) => {
            console.log(data);
        }).catch(err => console.log(err));
    }, []);
    */

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