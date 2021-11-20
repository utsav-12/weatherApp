import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    display: flex;
    margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px
  border-radius: 2px
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  & input{
      padding: 10px;
      font-size: 14px;
      outline: none;
      font-weight: bold;
      border: none;
  }

  & button{
      padding: 10px;
      font-size: 14px;
      color: white;
      background-color: black;
      border: none;
      outline: none;
      font-weight: bold;
      cursor: pointer;
  }
`;


const CityComponent = (props) => {

    const {updateCity , fetchWeather} = props;
    return (
        <div>
            <WeatherLogo src="/icons/perfect-day.svg"/>
            <ChooseCityLabel>Find Weather Of Your City</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input 
                    placeholder = "City"
                    onChange={(e) => updateCity(e.target.value)}
                />
                <button type = "submit">Search</button>
            </SearchBox>
        </div>
    );
}

export default CityComponent;
