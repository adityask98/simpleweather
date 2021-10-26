import React, { useEffect, useState } from "react";
import Axios from "axios";
const apikey = "placeholderAPIkey";

const Weather = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log("Lat: ", lat, "Long: ", lon);
      Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
      ).then((response) => {
        console.log(response);

        setData(response.data);
      });
    });
  }, []);

  if (data) {
    return (
      <div className="container">
        <div className="card">
          <div className="weather">
            Weather {(data.main.temp - 273.15).toPrecision(4)} C
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="icon"
            width="80px"
            height="80px"
          ></img>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default Weather;
