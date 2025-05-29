import { Link } from "react-router-dom";

export default function GetStartedBtn() {

    return(
        <div>
            <Link to="/search">
                <button type="button" className="getStarted" >Get Started</button>
            </Link>
        </div>
    );
};