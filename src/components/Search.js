
import { useState}from "react";
// import clear from "../img/weather-icons/clear.svg";
import "./Search.css";




function Search({setCity}){


const [search,setSearch]=useState('');
    return (
      <header className="app__header">
      <nav>
        <form className="formSearching">
          <input value={search}
            className="citySearch"
            placeholder="Type in a city Name"
            onChange={(e)=>setSearch(e.target.value)} />
          <input value="FIND WEATHER" type="button" className="buttonSearch"  onClick={()=>setCity(search)} />
        </form>
      </nav>
    </header>

    );
  }

export default Search;