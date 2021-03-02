import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
// import {useHistory} from 'react-dom'
const Login = () => {
	const [state, dispatch] = useStateValue();
	// const history = useHistory();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				// console.log(result)
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
		// history.replace('/');
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
					alt=""
				/>
				<img
					src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
					alt=""
				/>
			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
};

export default Login;
