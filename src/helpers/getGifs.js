import { config } from "../data/data";

const getGifs = async (category) => {
  ///api.giphy.com/v1/gifs/search
  const url = `https://api.giphy.com/v1/gifs/search?api_key=t1u6zhsZEpFSfiSzx3EoxtryNUej1oCs&q=${encodeURI(
    category
  )}&limit=${config.limit}`;
  const reps = await fetch(url);
  const { data } = await reps.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export { getGifs };
