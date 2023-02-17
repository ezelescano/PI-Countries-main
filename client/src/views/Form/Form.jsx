import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
// import { useDispatch,useSelector} from "react-redux";
// import { createActi } from "../../component/redux/actions";

// "name", "dificulty", "duration", "season"
export const validate = ({ name, dificulty, duration, season, countryId }) => {
    const errors = {};
    errors.name = name === "" ? "Need a name" : errors.name;
    errors.dificulty = dificulty > 0 || dificulty <= 5 ? errors.dificulty : "Only between 1 and 5";
    errors.duration = typeof (duration) != "number" ? "Activity duration" : errors.duration;
    errors.season = !season ? "A season is required" : errors.season;
    errors.countryId = countryId.length < 3 ? "Coutry without 3 letters" : errors.countryId;
    
    return errors;
}
export default function Form() {
    const history = useHistory();
    const [inputs, setInputs] = React.useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countryId: ""
    });
    const [errors, setErrors] = React.useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countryId: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        setErrors(validate({ ...inputs, [property]: value }))
        setInputs({ ...inputs, [property]: value })
    }

    
    const submitHandler = (event) => {
        event.preventDefault()
         axios.post("http://localhost:3001/activities", inputs)
         history.push("/home")
         
    }

const handlerselect = (event)=>{
    const property = event.target.name
    const value = event.target.value

    setErrors(validate({ ...inputs, [property]: value }))
    setInputs({ ...inputs, [property]: value })
}

        return (

            <div>
                <h1>ESTO ES  EL FORMULARIO</h1>
                <form onSubmit={submitHandler} >

                    <label>Name:</label>
                    <input type="text" onChange={changeHandler} value={inputs.name} name="name"></input>
                    <label>Dificulty:</label>
                    <input type="number" onChange={changeHandler} value={inputs.dificulty} name="dificulty"></input>
                    <label>Duration:</label>
                    <input type="text" onChange={changeHandler} value={inputs.duration} name="duration"></input>
                    <label>Country:</label>
                    <input type="text" onChange={changeHandler} value={inputs.countryId} name="countryId"></input>
                    <label>Season</label>
                    <select >
                        <option value=""></option>
                        <option value="winter" onChange={changeHandler}>Winter</option>
                        <option value="summer" onChange={changeHandler}>Summer</option>
                        <option value="autumn" onChange={changeHandler}>Autumn</option>
                        <option value="spring" onChange={changeHandler}>Spring</option>
                    </select>
                    <button type="submit">Create</button>
                </form>
            </div>

        )
    }

