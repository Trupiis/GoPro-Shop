"use client"
import { createContext } from "react";
import { signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    } from "firebase/auth";
import { auth } from "@/db/firebase";
import { useEffect, useState } from "react";

export const AuthContext = createContext();

const {Provider} = AuthContext;


const AuthContextProvider = (props) =>{

    const [loggedIn, setLoggedIn] = useState (false)
	const [currentUser, setCurrentUser] = useState(null)
	const [error, setError] = useState("")

	useEffect(()=>{
		onAuthStateChanged(auth, (user)=>{
			console.log(user)
			if(user){
				setLoggedIn(true)
				setCurrentUser(user)
			}else{
				setLoggedIn(false)
				setCurrentUser(null)
			}
		})
	})

	const HandleLogin = async (email, password) =>{
		setError("");

		try{
			const userAcount = await signInWithEmailAndPassword(auth, email, password)
					setCurrentUser(userAcount.currentUser)
					return{success : true}
		}catch(error){
			setError("Correo o contraseña incorrectos");
			return {success : false, message: "Correo o contraseña incorrectos"}
		}
		
	}

	const HandleLogout = async () =>{
		await signOut(auth)
	}

    return(
        <AuthContext.Provider value={{currentUser, loggedIn, HandleLogin, HandleLogout, error}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider