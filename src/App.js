import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Modules/CityComponent";
import WeatherInfo from "./Modules/WeatherInfo";

const API_KEY = "b59a47d7dbc5018f670eff96feb04727";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 500px;
  background: transparent;
  font-family: montsserrat;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
    `);
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherInfo weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
