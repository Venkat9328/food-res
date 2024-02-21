import { Routes ,Route} from "react-router-dom";
import Signup from "../login/login";
import App from "../App";

export default function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/app" element={<App/>}/>
        </Routes>
        </>
    );
}