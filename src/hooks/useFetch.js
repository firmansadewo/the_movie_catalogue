import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(id, title, year) {
  const [data, setData] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  let url = 'https://www.omdbapi.com?apikey=faf7e5bb'

  const getData = useCallback(async () => {
    try {
      setisLoading(true)
      let movieId = id != '' || id.length != 0 ? `&i=${id}` : ''
      let judul = title != '' || title.length != 0 ? `&s=${title}` : ''
      let tahun = year != '' || year.length != 0 ? `&y=${year}` : ''

      let find = movieId + judul + tahun

      let finding = await axios.post(`${url}${find}`)

      setData(finding.data.Search)

      setisLoading(false)

    } catch (err) {
      setError(err);
    }
  }, [id, title, year]);

  useEffect(() => {
    getData(id);
  }, [id, getData, title, year]);

  return { data, setData, isloading, error };
}

export default useFetch;
