import "./App.css";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});

  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((response) => response.json())
      .then((result) => {
        //console.log("Result is result", result);
        setCityWeather(result);
      });
  };
  return (
    <>
      <h2>hello</h2>
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      {/* Use city Weather data to show it on the screen */}
      {/* <CityWeather /> */}
    </>
  );
}

export default App;
