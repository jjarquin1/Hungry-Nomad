import { Link } from 'react-router-dom';


const RecNav = () =>{
    return(
        <nav class="nav d-flex justify-content-evenly">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    )
}

export default RecNav;