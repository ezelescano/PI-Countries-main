import style from "./CountryComponent.module.css"


const CountryComponent = (props) => {
    return (
        <div className={style.country}>
            
            <img src={props.imgflag} alt={props.name} />
            <p>Oficial Name: {props.name}</p>
            <p>Continent: {props.continent}</p>
            <p>Activities: {props.activities.length && props.activities[0]?.name }</p> 
            {console.log("////////////////7\\\\\\\\\\\\\\", JSON.stringify(props.activities[0]?.name))}
        </div>
    )
}

export default CountryComponent;
