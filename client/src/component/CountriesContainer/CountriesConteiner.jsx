import CountryComponent from "../CountryComponent/CountryComponent"
import style from "./CountriesConteiner.module.css"

const CountriesConteiner = () => {
    const countries = [
        {
            "imgflag": "https://flagcdn.com/tf.svg",
            "name": "French Southern and Antarctic Lands",
            "continent": "Antarctica"
        },
        {
            "imgflag": "https://flagcdn.com/cu.svg",
            "name": "Cuba",
            "continent": "North America"
        },
        {
            "imgflag": "https://flagcdn.com/kw.svg",
            "name": "Kuwait",
            "continent": "Asia"
        },
        {
            "imgflag": "https://flagcdn.com/bg.svg",
            "name": "Bulgaria",
            "continent": "Europe"
        },
        {
            "imgflag": "https://flagcdn.com/ng.svg",
            "name": "Nigeria",
            "continent": "Africa"
        },
        {
            "imgflag": "https://flagcdn.com/fm.svg",
            "name": "Micronesia",
            "continent": "Oceania"
        },
        {
            "imgflag": "https://flagcdn.com/uz.svg",
            "name": "Uzbekistan",
            "continent": "Asia"
        },
        {
            "imgflag": "https://flagcdn.com/mc.svg",
            "name": "Monaco",
            "continent": "Europe"
        },
        {
            "imgflag": "https://flagcdn.com/ni.svg",
            "name": "Nicaragua",
            "continent": "North America"
        },
        {
            "imgflag": "https://flagcdn.com/hu.svg",
            "name": "Hungary",
            "continent": "Europe"
        },
        {
            "imgflag": "https://flagcdn.com/ph.svg",
            "name": "Philippines",
            "continent": "Asia"
        },
        {
            "imgflag": "https://flagcdn.com/ie.svg",
            "name": "Ireland",
            "continent": "Europe"
        },
        {
            "imgflag": "https://flagcdn.com/tw.svg",
            "name": "Taiwan",
            "continent": "Asia"
        },
        {
            "imgflag": "https://flagcdn.com/bf.svg",
            "name": "Burkina Faso",
            "continent": "Africa"
        },
        {
            "imgflag": "https://flagcdn.com/sc.svg",
            "name": "Seychelles",
            "continent": "Africa"
        },
        {
            "imgflag": "https://flagcdn.com/es.svg",
            "name": "Spain",
            "continent": "Europe"
        }]
    return (
        <div className={style.conteiner}>
            
            {

                countries.map( country => {
                    return <CountryComponent
                      imgflag={country.imgflag}
                      name={country.name}
                      continent={country.continent}  
                    />
                    
                })
            
            }

        </div>
    )
}

export default CountriesConteiner;