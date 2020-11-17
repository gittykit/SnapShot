import React, { Component } from "react";
import RCTooltip from 'rc-tooltip'

import Map from './Map'

class TooltipMap extends Component {
  render() {
    const {children, lat, lng, title} = this.props
    const coords = {
      lat: Number(lat),
      lng: Number(lng)
    }

    const mapProps = {
      options: {
        center: coords,
        zoom: 10,
        disableDefaultUI: true,
      },
      onMount: this.getMarker(coords, title)
    }

    const tooltipContent= (
      <div className="tooltipMap-wrapper">
        <div className='tooltipMap-title'>{title}</div>
        <Map className="tooltipMap-map" {...mapProps} />
      </div>
    )

    return (
      <RCTooltip
        overlay={tooltipContent}
        destroyTooltipOnHide={false}
        mouseEnterDelay={0.1}
        mouseLeaveDelay={0.1}
        placement={'top'}
      >
        {children}
      </RCTooltip>
    );
  }

  getMarker(coords, title) {
    return (map) => {
      new window.google.maps.Marker({
        map,
        position: coords,
        label: '',
        title: title,
      });
    };
  }
}

export default TooltipMap;
