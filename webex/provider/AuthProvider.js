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

	useEffect(()=>{
		onAuthStateChanged(auth, (user)=>{
			console.log(user)
			if(user){
				setLoggedIn(true)
			}else{
				setLoggedIn(false)
			}
		})
	})

	const HandleLogin = async (event) =>{
		event.preventDefault();
		const resultado = await signInWithEmailAndPassword(auth, "usertest@test.com", "11223344")
		console.log(resultado)
	}

	const HandleLogout = async () =>{
		await signOut(auth)
	}

     return(
        <AuthContext.Provider value={{loggedIn, HandleLogin, HandleLogout}}>
            {props.children}
        </AuthContext.Provider>
     )
}

export default AuthContextProvider