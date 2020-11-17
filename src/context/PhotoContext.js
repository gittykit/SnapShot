import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKeyFlickr } from "../api/config";
export const PhotoContext = createContext();
const promiseCache = {}

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
  if (!promiseCache[query]){
    promiseCache[query]= axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKeyFlickr}&tags=${query}&has_geo=1&extras=geo&per_page=24&format=json&nojsoncallback=1`
    )
  }
  promiseCache[query]
    .then(response => {
      setImages(response.data.photos.photo);
      setLoading(false);
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
