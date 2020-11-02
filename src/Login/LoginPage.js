import React from 'react'
import * as styles from './styles'
import logo from '../Assets/Images/logo-2.png'
import styled from 'styled-components';


const LoginPage = (props) =>{
    const {
        email, 
        setEmail, 
        password,
        setPassword, 
        handleLogin,
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
        signedUpSuccess,
        setsignedUpSuccess,
        userName,
        setUserName,
        // signUp,
        // setSignUp
    }
         = props;
    return(
        <div>
            <styles.container>
            <styles.loginImage></styles.loginImage>
            <styles.Login>
                <styles.header>
                        <styles.logo src={logo}></styles.logo>
                    <styles.heading>Login and Register</styles.heading>
                </styles.header>
                <styles.login_container>
                    {hasAccount ?  (<></>):(<styles.input placeholder="username" type="text" autoFocus required value ={userName} onChange={e=>setUserName(e.target.value)} />) }
                    {/* <styles.label>Email</styles.label>            */}
                    <styles.input placeholder="email" type="text" autoFocus required value={email} onChange={e=>setEmail(e.target.value)}/>
                    <styles.p>{emailError}</styles.p>
                    {/* <styles.label>Password</styles.label>             */}
                    <styles.input placeholder="password" type="password" autoFocus required value={password} onChange={e=>setPassword(e.target.value)}/>
                    <styles.p>{passwordError}</styles.p>
                    <div>
                        {hasAccount ? (
                            <>
                                <styles.button onClick={handleLogin}>Log In</styles.button>
                                <styles.cont><styles.span>Dont have an acccount ?</styles.span><styles.change onClick={()=>{setHasAccount(!hasAccount);  }}>Sign Up</styles.change></styles.cont>
                            </>
                            ) : (
                            <>
                                <styles.button onClick={handleSignUp}>SignUp</styles.button>
                                <styles.cont><styles.span>Have an account ?</styles.span><styles.change onClick={()=>{setHasAccount(!hasAccount);  setsignedUpSuccess(false) }}>Log In</styles.change></styles.cont>
                            </>
                            
                        )}
                    </div>
                    {signedUpSuccess ? (<styles.success>You have signed up successfully !!</styles.success>):(<p></p>)}

                </styles.login_container>
            </styles.Login>
            </styles.container>
        </div>
    )
}
export default LoginPage;