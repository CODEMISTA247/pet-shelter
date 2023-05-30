import React from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='d-flex justify-content-around mx-auto text-bg-secondary p-0' >
            <h1 className=''>Pet Shelter</h1>
            <Link to={'/petForm'}>add a pet to the shelter</Link>
        </div>
    )
}

export default Nav;
