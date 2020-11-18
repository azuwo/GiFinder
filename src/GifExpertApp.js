import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = ["useless"] }) => {
  //const categories = ['One Punch', 'Samurai X','Dragon Ball']
  //const [categories, setCategories] = useState(['One Punch'])

  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Gif Finder No One Will Ever Use</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
