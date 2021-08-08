import './navbar.css'
import logo from '../../../assets/img/logo.png'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


import Search from '../../atoms/search/search'



const NavBar = () => {
    const asd = [
        { id: 1, text: "Batman" },
        { id: 2, text: "Spiderman" },
        { id: 3, text: "Superman" },
        { id: 4, text: "IronMan" },
        { id: 5, text: "Thor" },
        { id: 6, text: "Hulk" },
        { id: 7, text: "Captain America" }
    ]


    const history = useHistory()

    return (
        <div className="navbar">
            <div className="nav-wrapper">
                <Link to="/">
                    <div className="logo-nav-wrapper">
                        <img className="logo-nav" src={logo} alt="tmc_logo" />
                    </div>
                </Link>

                <div className="nav-menu">
                    <p className="menu" onClick={() => history.push('/filter')}>Advance Filter</p>
                </div>
                {/* search bar */}
                <div className="search-wrapper">
                    <Search placeholder="Search Movies" data={asd} />
                </div>
            </div>
        </div>
    )
}

export default NavBar