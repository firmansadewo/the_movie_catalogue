import './carousel.css'
import axios from 'axios'
import Slider from '../../atoms/slider/slider'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Carousel = ({ category }) => {
    const [dataLatest, setDataLatest] = useState(null)
    const [dataPopular, setDataPopular] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    let url = 'https://www.omdbapi.com?apikey=faf7e5bb'
    const abortController = new AbortController()

    const fetchData = async () => {
        try {
            const data_latest = await axios.get(`${url}&s=adventure&y=2020&page=1&type=movie`, { signal: abortController.signal })
            const data_popular = await axios.get(`${url}&s=journey&page=1&type=movie`, { signal: abortController.signal })

            // prevention kalau api 'omdb' terlimit request nya dan tidak bisa digunakan
            if (data_latest.status != 200 || data_popular.status != 200) {
                const data_latest = await axios.get(`/latest`, { signal: abortController.signal })
                const data_popular = await axios.get(`/popular`, { signal: abortController.signal })

                setDataLatest(data_latest.data)
                setDataPopular(data_popular.data)

            } else {
                setDataLatest(data_latest.data.Search)
                setDataPopular(data_popular.data.Search)
            }

            setisLoading(false)
        } catch (err) {
            setError(err)
            setisLoading(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 700)
        return () => abortController.abort()
    }, [])

    return (
        <section>
            {category == 'latest' ?
                // section untuk latest movies
                <section>
                    <span className="section-title">
                        <p className="section-mark">.</p>
                        <p>Latest Movies</p>
                    </span>
                    <div className="movie-wrapper">
                        {isLoading ? <div className="loading-wrapper">
                            <div className="loading" />
                        </div> :
                            <Slider data={dataLatest != null && dataLatest.map((item, index) =>
                                <Link to={`/${item.imdbID || item.id}`}>
                                    <div key={index}>
                                        {item.Poster != 'N/A' ? <img className="movie-poster" src={item.Poster} alt="movie-poster" />
                                            : <div className="no-poster">'Poster Not Found'</div>}
                                        <p className="movie-title">{item.Title}</p>
                                        <p className="movie-released">{item.Year}</p>
                                    </div>
                                </Link>
                            )}></Slider>}
                    </div>
                </section>
                :
                // section untuk popular movies
                <section>
                    <span className="section-title">
                        <p className="section-mark">.</p>
                        <p>Popular Movies</p>
                    </span>
                    <div className="movie-wrapper">
                        {isLoading ? <div className="loading-wrapper">
                            <div className="loading" />
                        </div> :
                            <Slider data={dataPopular != null && dataPopular.map((item, index) =>
                                <Link to={`/${item.imdbID || item.id}`}>
                                    <div key={index}>
                                        {item.Poster != 'N/A' ? <img className="movie-poster" src={item.Poster} alt="movie-poster" />
                                            : <div className="no-poster">'Poster Not Found'</div>}
                                        <p className="movie-title">{item.Title}</p>
                                        <p className="movie-released">{item.Year}</p>
                                    </div>
                                </Link>
                            )}></Slider>}
                    </div>
                </section>
            }
        </section>
    )
}

export default Carousel