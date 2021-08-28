import { Link } from 'react-router-dom';



const RecNav = () =>
{
    return(
    <main>
        <nav className="nav d-flex justify-content-evenly">
            <a className="nav-link active" aria-current="page" href="#">Mexican</a>
            <a className="nav-link" href="#">Fusion</a>
            <a className="nav-link" href="#">Asian</a>
            <a className="nav-link" href="#">BBQ</a>
            <a className="nav-link" href="#">Hot Dogs</a>
        </nav>
    </main>
    )
}

export default RecNav;