import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
import Map from "./Map";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  if (loading) {
    return <Loader />
  }

  const mapProps = {
      options: {
        center: { lat: 38, lng: 44 },
        zoom: 10,
        disableDefaultUI: true,
      }
    }

  return (
    <div className="photo-container">
      <Map className="map" {...mapProps} />
      <Gallery data={images} />
    </div>
  );
};

export default Container;
