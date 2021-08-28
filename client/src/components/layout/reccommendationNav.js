import { Link } from 'react-router-dom';


const RecNav = () =>{
    return(
// fridayFront
//         <navbar class="nav d-flex justify-content-evenly">
//             <a class="nav-link active" aria-current="page" href="#">Active</a>
//             <a class="nav-link" href="#">Link</a>
//             <a class="nav-link" href="#">Link</a>
//             <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </navbar>
      
        <nav className="nav">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
//  main
    )
}

export default RecNav;