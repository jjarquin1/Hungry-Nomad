import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getRecommend } from '../../utlis/api';

const recNavs = [
    {
        id: 1,
        title: 'Mexican',
    },
    {
        id: 2,
        title: 'Fusion',
    },
    {
        id: 3,
        title: 'Asian',
    },
    {
        id: 4,
        title: 'BBQ',
    },
    {
        id: 5,
        title: 'Hot Dogs',
    },
];

const RecNav = ({ onNavChanged }) => {


    const onClickHandler = (title) => {
        onNavChanged(title)
    }
    return (
        <main>
            <nav className='recCats nav d-flex justify-content-evenly'>
                {recNavs.map((nav) => (
                    <a key={nav.id} className='nav-link ' aria-current='page' onClick={() => onClickHandler(nav.title)}>
                        {nav.title}
                    </a>
                ))}
            </nav>
        </main>
    );
};


export default RecNav;
