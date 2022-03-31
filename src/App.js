import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { Navbar } from './components/Navbar';
//import countries from './countries.json';
import { useState, useEffect } from 'react';

function LayoutPage() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  )
}

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries(){
      const url = "https://ih-countries-api.herokuapp.com/countries";
      const res = await fetch(url);
      const data = await res.json();

      setAllCountries(data.sort((countryA, countryB) => {
        if (countryA.name.common > countryB.name.common) {
          return 1;
        } else if (countryA.name.common < countryB.name.common) {
          return -1;
        } else {
          return 0;
        }
      }));
    }
    fetchCountries();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route element={<LayoutPage/>}>
          <Route path="/" element={<CountriesList countries={allCountries}/>} />
          <Route path="/:alphaCode" element={<CountryDetails /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
