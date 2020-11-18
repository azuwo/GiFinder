import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category, gifsPerPage) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category, gifsPerPage).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category, gifsPerPage]);

  return state;
};

export { useFetchGifs };
