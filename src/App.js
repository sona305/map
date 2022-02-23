import React, { useEffect, useState } from "react";
//import { NavLink } from "react-router-dom";
import "./map.css"; 
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import axios from "axios";
import "./App.css";


function Map({uid}) {
  const url = "https://apis.intangles.com/vehicle/getlist?pnum=1&psize=10&lastloc=true&drivers=true&get_account_names=true&only_owner=true&token=amAIZY2JHdAuy-Se7BotfvB3XpUM_O3j_OL4H0SrgQbMZZ5NjYWuIR-hbjI6BHsS&acc_id=643140934522896384";

  var [laty, setLat] = useState(""); 
  var [longy, setLong] = useState("");

  useEffect(()=>{
    axios.get(url).then((res) => { 
      setLat(parseFloat(res.data.v[0].location[1]));
      setLong(parseFloat(res.data.v[0].location[0]));
    
      })

  },[])
  console.log(laty,longy);
  return (
    <>
    {
    laty && longy &&
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: parseFloat(laty), lng: parseFloat(longy) }}
      className="map-div"
    >
      <Marker  position={{ lat: parseFloat(laty) , lng:parseFloat(longy) }} />

    </GoogleMap>
    }
    </>
  );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));
 function Location() {
  return (    
      <div className="map-div" >
        <WrapperMap
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBfhicwwr3M4WD9FzcPVUH_bnRE0sONWu4"
          }
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    
  );
}

export default Location;
