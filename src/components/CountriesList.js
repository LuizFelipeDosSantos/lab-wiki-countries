import { Link } from "react-router-dom";

export function CountriesList({countries}) {
    return (
        <div>
            {countries.map((country) => {
                return (
                    <div className="country" key={country.alpha3Code}>
                        <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt={country.name.common}/>
                        <br/>
                        <Link to={country.alpha3Code}>{country.name.common}</Link>
                    </div>
                )
            })}
        </div>
    )
}