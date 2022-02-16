import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD92JajgrtPLjkN57bzli0RDhCf65tjwFc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `50%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 18.616091666666666, lng: 73.84651833333334 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 18.616091666666666, lng: 73.84651833333334}} />
    )}
  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
