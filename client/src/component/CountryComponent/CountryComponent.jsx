import style from "./CountryComponent.module.css"


const CountryComponent = (props) => {
    return (
        <div className={style.country}>
            
            <img src={props.imgflag} alt={props.name} />
            <p>Oficial Name: {props.name}</p>
            <p>Continent: {props.continent}</p>
            {/* <p>Activities: { */}
                {/* props.activities?.map(d=>{ */}
                    {/* return <span> {d} </span> */}
                {/* }) */}
            {/* } </p> */}
        </div>
    )
}

export default CountryComponent;
