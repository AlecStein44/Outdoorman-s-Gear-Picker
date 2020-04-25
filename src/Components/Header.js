import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <a className="header-h1" href="https://outdoorgearpicker.now.sh/">Outdoor's Man Gear List</a>
            <nav>
                <Link className="header-a" to='/newhuntinglist'>New Hunting List</Link>
                <Link className="header-a" to='/newcampinglist'>New Camping List</Link>
                <Link className="header-a" to='/newfishinglist'>New Fishing List</Link>
            </nav>
        </header>
    )
}

export default Header