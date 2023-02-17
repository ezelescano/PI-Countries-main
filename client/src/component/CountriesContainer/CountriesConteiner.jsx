import CountryComponent from "../CountryComponent/CountryComponent"
import style from "./CountriesConteiner.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCountries, filterContinent, orderCountry, orderPopulation, filterCountryByName, getAllActivities } from "../redux/actions";
import Pagination from "../Pagination/Pagination";


const CountriesConteiner = () => {

    const countryWname   = useSelector(state => state.countryWname)
    
    const [currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())
    }, [dispatch])

    const countries = useSelector(state => state.countries)
    const filterCountry = useSelector(state => state.filterCountry)

    const handlerChange = (event) => {
        dispatch(filterContinent(event.target.value))
    }

    const upOrderHand = (event) => {

        if (event.target.value === "upward") {
            const countriesOrdenados = [...filterCountry].sort((a, b) => a.name.localeCompare(b.name))
            dispatch(orderCountry(countriesOrdenados))
        }

        if (event.target.value === "falling") {
            const countriesOrdenados = [...filterCountry].sort((a, b) => b.name.localeCompare(a.name))
            dispatch(orderCountry(countriesOrdenados))
        }
    }


    const popOrderHand = (event) => {
        if (event.target.value === "maxPoblation") {
            const maxPobCountry = [...filterCountry].sort((a, b) => b.population - a.population)
            dispatch(orderPopulation(maxPobCountry))
        }
        if (event.target.value === "minPoblation") {
            const maxPobCountry = [...filterCountry].sort((a, b) => a.population - b.population)
            dispatch(orderPopulation(maxPobCountry))
        }
    }

    const [searchQuery, setSearchQuery] = useState("");

    const byNameHandler = (event) => {
setSearchQuery(event.target.value);
    }
    const countryN = (event) =>{
        event.preventDefault()
        dispatch(filterCountryByName(searchQuery))
    }


    return (
        <div className={style.conteiner}>
            <form >
                <input type="search" value={searchQuery} onChange={byNameHandler} />
                <button type="submit" onClick={countryN}>Buscar</button>
                <select onChange={handlerChange}>
                    <option value=""></option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="North America">North America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="South America">South America</option>
                </select>

                <select onChange={upOrderHand}>
                    <option value=""></option>
                    <option value="upward">Upward</option>
                    <option value="falling">Falling</option>

                </select>

                <select onChange={popOrderHand}>
                    <option value=""></option>
                    <option value="maxPoblation">MaxPoblation</option>
                    <option value="minPoblation">MinPoblation</option>
                </select>
            </form>

            <Pagination currentPage={currentPage}
                setCurrentPage={setCurrentPage} countries={filterCountry} />
            {
                console.log(filterCountry)
            }

        </div>
    )
}

export default CountriesConteiner;