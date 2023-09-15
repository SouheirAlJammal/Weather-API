import "./App.css";
import Search from './components/Search.js'
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
import FakeWeather from "./fakeWeatherData.json";


  //converter fct from kelvin to degree 
  export const converter=(temperature)=>{
    return parseInt(temperature-273);
   }
function App() {


//Data for current weather
  // const currentData=FakeWeather.list.filter(elt => (new Date(elt[0]*1000)).getHours() === (new Date().getHours()));
  //use useState() to target any change in the input text
  return (
    <div className="app">
      <Search />
      <main>
      <CurrentWeather main={FakeWeather.list[0].main} weather={FakeWeather.list[0].weather[0]}/>
      <Forecast data={FakeWeather.list.slice(1,7)}/>
    </main>
</div>

  )
}

export default App;