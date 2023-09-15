// import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import "./CurrentWeather.css"
import clear from '../img/weather-icons/clear.svg'
import {converter} from '../App'

function CurrentWeather({main:{temp_min,temp_max,pressure,humidity},weather:{description,icon}}){
  


  return(
        <section className="currentWeather">
   <img src={clear} alt="weather status" width={150} height={150}/>
    <section className="weatherDescription">
      <p className="weatherStatus">{description}</p>
      <p><span className="temperatureProperty">temperature</span> {converter(temp_min)}°C to {converter(temp_max)}°C </p>
      <p><span className="humidityProperty">Humidity </span>{humidity}%<span className="pressureProperty"> Pressure </span>{pressure}</p>
    </section>

  </section>
    )
}

export default CurrentWeather;