import { FILTER_CONTINENT, GET_ALL_COUNTRIES, ORDER_COUNTRY, ORDER_POPULATION, FILTER_COUNTRY } from "./actionType";
import axios from "axios";

export function getAllCountries() {
    return async (dispatch) => {
        try {
            const results = await axios.get("http://localhost:3001/countries")
            dispatch({ type: GET_ALL_COUNTRIES, payload: results.data })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export function filterContinent(contin) {
    return {
        type: FILTER_CONTINENT, payload: contin

    }
}

export function orderCountry(ordCountry) {
    return {
        type: ORDER_COUNTRY, payload: ordCountry
    }
}

export function orderPopulation(popu) {
    return {
        type: ORDER_POPULATION, payload: popu
    }
}

export function filterCountryByName(nameCountry) {
    return async (dispatch) => {
        try {
            const countryName = await axios.get(`http://localhost:3001/countries?name=${nameCountry}`)
            dispatch({ type: FILTER_COUNTRY, payload: countryName.data })
        } catch (error) {
            console.log("error", error);
        }
    }
}

// export function createActi(form) {
//     return (

//     )
// }

// type: FILTER_COUNTRY, payload: nameCountry