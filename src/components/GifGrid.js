import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
      <br />
      <button>Next</button>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
