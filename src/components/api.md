lat long bulmak için

https://api.openweathermap.org/geo/1.0/direct?q=Denizli&limit=5&appid=22ba6a983a400f6fd7a05c3ddb7d3fe1


     let baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d85a3f0dd4ed112ca2bc9e97032cbd3&units=metric`;
  let baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22ba6a983a400f6fd7a05c3ddb7d3fe1&units=metric`;


{
    "dt": 1634461200,
    "sunrise": 1634444021,
    "sunset": 1634484237,
    "moonrise": 1634480160,
    "moonset": 1634431500,
    "moon_phase": 0.4,
    "temp": {
        "day": 18.81,
        "min": 12.71,
        "max": 20.2,
        "night": 14.06,
        "eve": 18.53,
        "morn": 13.09
    },
    "feels_like": {
        "day": 18.18,
        "night": 13.19,
        "eve": 17.85,
        "morn": 12.67
    },
    "pressure": 1017,
    "humidity": 55,
    "dew_point": 7.84,
    "wind_speed": 1.9,
    "wind_deg": 335,
    "wind_gust": 2.12,
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "clouds": 44,
    "pop": 0.92,
    "rain": 0.19,
    "uvi": 3.95
}