import './navbar.css'
import logo from '../../../assets/img/logo.png'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


import Search from '../../atoms/search/search'



const NavBar = () => {
    const asd = [{ id: 1, text: "MArni" },
    { id: 2, text: "Sutri" },
    { id: 3, text: "Tejo" },
    { id: 4, text: "Teji Suteji" },
    { id: 5, text: "asdqwe" },
    { id: 6, text: "erwe" },
    { id: 7, text: "dfgdf" }
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