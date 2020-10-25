import React from 'react'
import * as styles from './styles'
import logo from '../Assets/Images/logo-2.png'


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
        passwordError}
         = props;
    return(
        <div>
            <styles.loginImage></styles.loginImage>
            <styles.header>
                    <styles.logo src={logo}></styles.logo>
                <styles.heading>Login and Register</styles.heading>
            </styles.header>
            <styles.login_container>
                {/* <styles.label>Email</styles.label>            */}
                <styles.input placeholder="email" type="text" autoFocus required vaule={email} onChange={e=>setEmail(e.target.value)}/>
                <p>{emailError}</p>
                {/* <styles.label>Password</styles.label>             */}
                <styles.input placeholder="password" type="password" autoFocus required vaule={password} onChange={e=>setPassword(e.target.value)}/>
                <p>{passwordError}</p>
                <div>
                    {hasAccount ? (
                        <>
                            <styles.button onClick={handleLogin}>Sign In</styles.button>
                            <styles.text><styles.span>Dont have an acccount ?</styles.span><styles.change onClick={()=>setHasAccount(!hasAccount)}>Sign Up</styles.change></styles.text>
                        </>
                        ) : (
                        <>
                            <styles.button onClick={handleSignUp}>SignUp</styles.button>
                            <styles.text><styles.span>Have an account ?</styles.span><styles.change onClick={()=>setHasAccount(!hasAccount)}>Sign In</styles.change></styles.text>
                        </>
                        
                    )}
                </div>

            </styles.login_container>
        </div>
    )
}
export default LoginPage;