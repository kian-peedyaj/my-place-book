import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    console.log("center", center);
    console.log("zoom", zoom);
    // Initialize and add the map
    let map;

    async function initMap() {
      // The location of Uluru
      //   const position = { lat: -25.344, lng: 131.031 };

      // Request needed libraries.
      //@ts-ignore
      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary(
        "marker"
      );

      // The map, centered at Uluru
      map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: center,
        mapId: "DEMO_MAP_ID",
      });

      // The marker, positioned at Uluru
      new AdvancedMarkerElement({
        map: map,
        position: center,
        title: "Uluru",
      });
    }
    initMap();
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
