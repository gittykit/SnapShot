import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;

  if (results.length === 0) {
    return (
    <div>
      <NoImages />
    </div>
    )
  }

  return (
    <div>
      <ul>{results.map(image => (
        <li key={image.id}>
          <Image imageData={image} />
        </li>))}
      </ul>
    </div>
  );
};

export default Gallery;
