import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The hungry nomads</h1>
            <div className='links'>
                <Link to='/'>Sign up</Link>
                <Link
                    to='/create'
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px',
                    }}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;