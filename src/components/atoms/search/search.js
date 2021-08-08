import './search.css'
import searchImg from '../../../assets/img/search.svg'
import { useState, useEffect, useMemo, useRef } from 'react'

const Search = ({ data, placeholder }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [activeItem, setActiveItem] = useState(0)


    const searchResult = useMemo(() => {
        return data.filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    const handleInput = (e) => {
        setSearchTerm(e.target.value)
        setShowOptions(true)
    }

    const handleClick = (item) => {
        setSearchTerm(item.text)
        setShowOptions(true)
        setActiveItem(item.id)
    }


    return (
        <div className="search-bar" onBlur={searchTerm.length == 0 ? () => setShowOptions(false) : () => { }}>
            <input
                className="search-field"
                type="text"
                value={searchTerm}
                onChange={handleInput}
                placeholder={placeholder}
            />
            <img className="search-img" src={searchImg} alt="" />
            {/* section autocompletenya */}
            <div className="dropdown-class" onClick={() => setShowOptions(true)} >
                {showOptions && <ul>
                    {searchResult.length == 0 || searchResult == null ?
                        <li className="item-class">Tidak ada data.</li>
                        : searchResult.filter((_, idx) => idx < 5).map((item, index) =>
                            <li onClick={() => handleClick(item)} className="item-class" key={index}>{item.text}</li>
                        )}
                </ul>}
            </div>
        </div>
    )

}

export default Search