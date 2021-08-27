import { Link } from 'react-router-dom';


const RecNav = () =>{
    return(
        <nav className="nav">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    )
}

export default RecNav;