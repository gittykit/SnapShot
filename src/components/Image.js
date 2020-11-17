import React from "react";
import TooltipMap from "./TooltipMap"

import 'rc-tooltip/assets/bootstrap.css';

const Image = ({imageData}) => {
  const farm = imageData.farm;
  const server = imageData.server;
  const id = imageData.id;
  const secret = imageData.secret;
  const title = imageData.title;
  const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

  return (
    <TooltipMap lng={imageData.longitude} lat={imageData.latitude} title={title}>
      <img src={url} alt={title} />
    </TooltipMap>
  )
};

export default Image;
