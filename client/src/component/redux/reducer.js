import { GET_ALL_COUNTRIES, FILTER_CONTINENT, ORDER_COUNTRY,ORDER_POPULATION, FILTER_COUNTRY} from "./actionType";
const initialState = { countries: [], filterCountry: [], countryWname: [] };


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                filterCountry: action.payload,
                
                countries: action.payload
            }
        case FILTER_CONTINENT:
            state.filterCountry = state.countries
            return {
                ...state,
                filterCountry: state.filterCountry.filter(cont => cont.continent === action.payload)
            }


        case ORDER_COUNTRY:
                    return {
                        ...state, filterCountry: action.payload
                    }

        case ORDER_POPULATION: 
        return {
            ...state, filterCountry:action.payload
        }
        case FILTER_COUNTRY:
        state.filterCountry = action.payload  
        console.log("////////////////////////////////////////////////",action.payload);  
        return{
                ...state, countryWname: action.payload
            }
        default:
            return {
                ...state
            }

            break;
    }

}
export default rootReducer;



// case ORDER_TITLE:
//             return {
//                 ...state, foods: (action.payload === 'Ascendente')
//                     ? [...state.foods.sort((a, b) => a.title.localeCompare(b.title))]
//                     : [...state.foods.sort((a, b) => b.title.localeCompare(a.title))],
//                 foodsCopy: (action.payload === 'Ascendente')
//                     ? [...state.foodsCopy.sort((a, b) => a.title.localeCompare(b.title))]
//                     : [...state.foodsCopy.sort((a, b) => b.title.localeCompare(a.title))],
//                 currentPage:0

//             }