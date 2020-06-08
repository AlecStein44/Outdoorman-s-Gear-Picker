import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <a className="header-h1" href="https://outdoorgearpicker.now.sh/">Outdoor Gear Picker</a>
            <nav>
                <Link className="header-a" to='/newhuntinglist'>New Hunting List</Link>
                <Link className="header-a" to='/newcampinglist'>New Camping List</Link>
                <Link className="header-a" to='/newhikinglist'>New Hiking List</Link>
                <Link className="header-a" to='/newfishinglist'>New Fishing List</Link>
            </nav>
        </header>
    )
}

export default Header