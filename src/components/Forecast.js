// import clear from "../img/weather-icons/clear.svg";
// import "./Forecast.css";
// import { converter } from "../App";


// function Forecast({data}) {
// console.log(data)
// const Times=["6:00",'9:00','12:00','15:00','18:00','21:00'];

//   //get Data on specific time 
//   // const neededData = props.list.filter(elt => (new Date(elt[0]*1000)).getHours() === ( "6:00"| '9:00' | '12:00' | '15:00' | '18:00'));

//   //map into this data to create repeated section
//   const forecastSections = data.map((elt, i) =>
//     <div className="time_1" key={i}>
//       <time className="time" dateTime={Times[i]}>{Times[i]}</time>
//       {/* <img className="icon" src={`../img/weather-icons/${elt.weather.icon}.svg`} alt={elt.main.description} /> */}
//     <img src={clear} alt="weather status"/>
//       <p className="temperature">{converter(elt.main.temp_max)}°c</p>
//     </div>
//   );


//   return (
//     <section className="weather-forecast">
//       {forecastSections}
//       {/* <div className="time_1">
//         <time className="time" dateTime="9:00">09:00</time>
//         <img className="icon" src={clear} alt="Sunny" />
//         <p className="temperature">{converter(temp_max)}°c</p>
//       </div> */}

//       {/* <div className="time_2">
//           <time className="time" dateTime="6:00">06:00</time>
//           <img className="icon" src={clear} alt="Cloudy" />
//           <p className="temperature">68°c</p>
//         </div>

//         <div className="time_3">
//           <time className="time" dateTime="9:00">09:00</time>
//           <img className="icon" src={clear} alt="Cloudy" />
//           <p className="temperature">68°c</p>
//         </div>

//         <div className="time_4">
//           <time className="time" dateTime="12:00">12:00</time>
//           <img className="icon" src={clear} alt="Cloudy" />
//           <p className="temperature">68°c</p>
//         </div>

//         <div className="time_5">
//           <time className="time" dateTime="15:00">15:00</time>
//           <img className="icon" src={clear} alt="Cloudy" />
//           <p className="temperature">68°c</p>
//         </div>

//         <div className="time_6">
//           <time className="time" dateTime="18:00">18:00</time>
//           <img className="icon" src={clear} alt="Cloudy" />
//           <p className="temperature">68°c</p>

//         </div>

//         <div className="time_7">
//           <time className="time" dateTime="21:00">21:00</time>
//           <img className="icon" src={clear} alt="Cloudy" />
//           <p className="temperature">68°c</p>
//         </div> */}

//     </section>
//   )
// }
// export default Forecast;


import clear from "../img/weather-icons/clear.svg";
import "./Forecast.css";
// import { converter } from "../App";


function Forecast({data}) {
console.log(data)
const Times=["6:00",'9:00','12:00','15:00','18:00','21:00'];

  //get Data on specific time 
  // const neededData = props.list.filter(elt => (new Date(elt[0]*1000)).getHours() === ( "6:00"| '9:00' | '12:00' | '15:00' | '18:00'));

  //map into this data to create repeated section
  const forecastSections = data.map((elt, i) =>
    <div className="time_1" key={i}>
      <time className="time" dateTime={Times[i]}>{Times[i]}</time>
      {/* <img className="icon" src={`../img/weather-icons/${elt.weather.icon}.svg`} alt={elt.main.description} /> */}
    <img src={clear} alt="weather status"/>
      <p className="temperature">{Math.round(elt.main.temp_max)}°c</p>
    </div>
  );


  return (
    <section className="weather-forecast">
      {forecastSections}
      {/* <div className="time_1">
        <time className="time" dateTime="9:00">09:00</time>
        <img className="icon" src={clear} alt="Sunny" />
        <p className="temperature">{converter(temp_max)}°c</p>
      </div> */}

      {/* <div className="time_2">
          <time className="time" dateTime="6:00">06:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_3">
          <time className="time" dateTime="9:00">09:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_4">
          <time className="time" dateTime="12:00">12:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_5">
          <time className="time" dateTime="15:00">15:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_6">
          <time className="time" dateTime="18:00">18:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>

        </div>

        <div className="time_7">
          <time className="time" dateTime="21:00">21:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div> */}

    </section>
  )
}
export default Forecast;