import {Link} from "react-router-dom";
import landing from "../../assets/landing.jpg"
// import styled from "./Landing.module.css"

const Landing = () => {
    return(
        <>
        <Link to="/home">
            <div>
                <img src={landing} />
            </div>
            <button >Home</button>
        </Link>

        </>
    )
}

export default Landing; 