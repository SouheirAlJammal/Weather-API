
import "./App.css";
import Search from './components/Search.js'
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
import { useEffect, useState } from "react";
const API = '88261ccf2fba00edc999da2dd8e376aa';


// export function getSrc(){
// const description = datahandel.description;
// let weatherImage;

// switch (description) {
//   case 'clear sky':
//     weatherImage = (
//       <img src={clear} alt="weather status" width={150} height={150} />
//     );
//     break;
//   case 'cloudy':
//     weatherImage = (
//       <img src={cloudy} alt="weather status" width={150} height={150} />
//     );
//     break;
//   case 'sunny':
//     weatherImage = (
//       <img src={sunny} alt="weather status" width={150} height={150} />
//     );
//     break;
//   default:
//     weatherImage = "it's true";
// }

// return weatherImage;}


function App() {


  const [datahandel, setDatahandel] = useState(null);
  //use state to track nme of city from the input 
  const [city, setCity] = useState('Beirut')


  //get Data
  useEffect(() => {
    const fetchingData = async () => {

     try {const resp = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API}`)
      const data = await resp.json();
      setDatahandel(data);
    }catch(error)
  {console.error('Error')}
  
  };
    fetchingData();
  }
    , [city])


  console.log(datahandel)

  return (
    datahandel ? (<div className="app">
      <Search setCity={setCity} />
      <main>
        <CurrentWeather main={datahandel.list[0].main} weather={datahandel.list[0].weather[0]}/> 
    <Forecast data={datahandel.list.slice(1,7)}/>
      </main>
    </div>) : 
  
  (<div>No Data yet</div>)
  )
}

export default App;