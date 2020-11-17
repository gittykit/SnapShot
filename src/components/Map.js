import React, { useEffect, useRef, useState } from 'react'
import { apiKeyGoogle } from "../api/config";

const Map = ({ options, onMount, className }) => {
  const ref = useRef()
  const [map, setMap] = useState()

  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}`
      document.head.append(script)
      script.async = true;
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
    // eslint-disable-next-line
  }, [])

  if (map && typeof onMount === `function`) onMount(map)

  return (
    <div {...{ ref, className }}
    />
  )
}

export default Map;

Map.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 5,
  },
}
