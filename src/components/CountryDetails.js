import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function CountryDetails() {
    const params = useParams();
    const [country, setCountry] = useState();

    useEffect(() => {
        async function fetchCountry() {
            const url = "https://ih-countries-api.herokuapp.com/countries/" + params.alphaCode;
            const res = await fetch(url);
            const data = await res.json();

            setCountry(data);
        }
        fetchCountry();
    }, [params]);

    return (
        <div>
            {country && <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt={country.name.common}/>}
            <br/>
            <h1>{country && country.name.common}</h1>
            <h2>{country && "Capital: " + country.capital[0]}</h2>
            <h2>{country && "Area: " + country.area}</h2>
        </div>
    );
}