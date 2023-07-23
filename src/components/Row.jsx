import React, { useEffect, useState } from "react";
import "../style/row.css";
import axios from "./../axios/axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {/* title  */}
      <h2>{title}</h2>
      {/* movies  */}
    </div>
  );
}

export default Row;
