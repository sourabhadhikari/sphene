import React, {useState, useEffect} from 'react';
import fire from '../firebase'

import LoginPage from './LoginPage'
import FirstPage from '../FirstPage'
const Login = () => {
    const [user, setUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
    const [signedUpSuccess, setsignedUpSuccess] = useState(false);
    const [userName, setUserName] = useState('');
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    localStorage.setItem('Theme','#4fb77a')
    const clearInput = () =>{
        setEmail('');
        setPassword('');
        setUserName('');
    }
    const clearError = ()=>{
        setEmailError('');
        setPasswordError('');
    }
    const handleLogin = () =>{
        clearError();
        setLoggedIn(true) ;
        setsignedUpSuccess(false);
        fire    
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(err => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }
    const handleSignUp = () =>{
        clearError();
        setsignedUpSuccess(true);
        // setSignUp(false);
        setLoggedIn(false);
        fire    
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch(err => {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                    
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
        
    }
    const handleLogout = () =>{
        // setLoggedIn(false) ;
        // setsignedUpSuccess(false);
        
        fire.auth().signOut();
    }
    const authListener = () => {
        fire.auth().onAuthStateChanged(user =>{
            if(user){
                clearInput();
                setUser(user);
                
                
            }
            else{
                setUser("");
            }
        })
    };
    useEffect(()=>{
        authListener();

    },[])
    return(
        <>
        {user&&loggedIn ? (
            <FirstPage handleLogout={handleLogout}/>
        ) : (
            <LoginPage 
            email={email} 
            setEmail={setEmail} 
            password={password}
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSignUp={handleSignUp} 
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            signedUpSuccess={signedUpSuccess}
            setsignedUpSuccess={setsignedUpSuccess}
            userName={userName}
            setUserName={setUserName}
        />
        )
        
        }
        
        
        </>
    )
}

export default Login;