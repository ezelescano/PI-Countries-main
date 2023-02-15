import React from "react";
import axios from "axios";
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

    // const submitHandler = async (event) => {
    //     event.preventDefault()
    //     const result = await axios.post("http://localhost:3001/activities", inputs)
    //     dispatch(createActi(result.data))
    // }
        return (

            <div>
                <h1>ESTO ES  EL FORMULARIO</h1>
                <form >

                    <label>Name:</label>
                    <input type="text" onChange={changeHandler} value={inputs.name} name="name"></input>
                    <label>Dificulty:</label>
                    <input type="number" onChange={changeHandler} value={inputs.dificulty} name="dificulty"></input>
                    <label>Duration:</label>
                    <input type="text" onChange={changeHandler} value={inputs.duration} name="duration"></input>
                    <label>Country:</label>
                    <input type="text" onChange={changeHandler} value={inputs.countryId} name="country"></input>
                    <label>Season</label>
                    <select >
                        <option value=""></option>
                        <option value="winter">Winter</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                        <option value="spring">Spring</option>
                    </select>
                    <button>Create</button>
                </form>
            </div>

        )
    }

