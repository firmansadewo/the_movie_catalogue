import axios from 'axios'
import { useState, useEffect } from 'react'

const FetchCarousel = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    let url = process.env.BASE_URL
    const abortController = new AbortController()

    const fetchData = async () => {
        try {
            let fetch_mov1 = await axios.get(`${url}&t=luca`)
            let fetch_mov2 = await axios.get(`${url}&?t=black+widow`)
            let fetch_mov3 = await axios.get(`${url}&t=a+quiet+place`)
            let fetch_mov4 = await axios.get(`${url}&t=raya&y=2021`)
            let fetch_mov5 = await axios.get(`${url}&t=conjuring&y=2021`)
            setData(fetch.res)

        } catch (err) {
            setError(err)
        }


    }

    return (

    )
}

return {}