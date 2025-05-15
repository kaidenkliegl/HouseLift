
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({children}){
    const user = useSelector(state => state.session.user)
    const navigate = useNavigate();

    if(!user){
        navigate('/')
        return null
    }
    return children

}


export default ProtectedRoute