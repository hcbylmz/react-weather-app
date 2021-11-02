import React, { useState, useEffect } from "react";
import axios from "axios";
//import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

function Weather() {
  const [tempCity, setTempCity] = useState("");
  const [temp, setTemp] = useState(18);
  const [weatherForecast, setWeatherForecast] = useState([
    {
      dt: 100,
      temp: {
        day: 18.81,
        min: 12.71,
        max: 20.2,
        night: 16.31,
        eve: 18.53,
        morn: 13.09,
      },
    },
  ]);
  const [city, setCity] = useState("Denizli");
  const [lat, setLat] = useState(37.78);
  const [lon, setLon] = useState(29.09);
  const [date, setDate] = useState(9);
  const [currentTemp,setCurrentTemp] = useState(10);

  const handleChange = (event) => {
    setTempCity(event.target.value);
  };

  //new api call
  const getLatLon = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=22ba6a983a400f6fd7a05c3ddb7d3fe1`;
  const baseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=22ba6a983a400f6fd7a05c3ddb7d3fe1&units=metric`;
  function getDate(date) {
    const dayy = new Date(date);
    return dayy.getDay();
  }

  useEffect(() => {
    axios.get(getLatLon).then((response) => {
      setLat(response.data[0].lat);
      setLon(response.data[0].lon);
      return axios.get(baseURL).then((response) => {
        setWeatherForecast(response.data.daily);
        setDate(getDate(response.data.daily[0].dt));
      
        //console.log(response.data.daily);
        console.log(response.data);
        setCurrentTemp(response.data.current.temp);
        setTemp(Math.floor(Math.round(response.data.current.temp)));
      });
    });
  }, [city]);

  function convertTime(time) {
    let newDate = new Date(time * 1000);

    return newDate.toGMTString().substring(0, 12);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <Box sx={{ width: '50%', mx:"auto"}}>
        <Stack direction="column" spacing={2}>
        <TextField
          helperText="eg:Denizli"
          id="city"
          label="City name"

          value={tempCity}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            setCity(tempCity);
          }}
        >
          Get Weather
        </Button>
        </Stack>
     </Box>

      <h1>{<p>{city} - {Math.floor(currentTemp)}<sup>o</sup>C</p>}</h1>
    
      <Box
        sx={{
          mx: "auto",
          bgcolor: "primary.main",
          color: "#fff",

          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          flexGrow:1,
        }}
      >
        <Grid container   spacing={{ xs: 2, md: 2}}>
          {weatherForecast.map((day, index) => (
            <Grid item xs={6} sm={4} lg={3}  key={index}>
            <Card sx={{mx:"auto"}} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                
                  image={day.weather == null ? `https://openweathermap.org/img/wn/04d@4x.png`:`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {<p>{Math.floor(day.temp.day)}<sup>o</sup>C</p>}
                

                  </Typography>
                  <Typography variant="h5" noWrap="true">
                  {day.weather == null ? "test" : day.weather[0].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {convertTime(day.dt)}
                   
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
          ))}
      </Grid>
      </Box>
    </div>
  );
}
export default Weather;
