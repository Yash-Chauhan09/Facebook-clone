import React from 'react'
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import './Login.css'
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
         dispatch({
             type :actionTypes.SET_USER,
             user : result.user,
         });
        }
        )
            .catch((error) => alert(error.message));
    }
return (
    <div className="login">
        <div className="login__container">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" alt="facebook logo" />

            <div className="login__text">
                <h1> Facebook
                    </h1>
            </div>
            <Button onClick={signIn}>
                Sign In With Google
            </Button>
        </div>
    </div>
)
}
export default Login
