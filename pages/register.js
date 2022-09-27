import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { app } from '../firebaseConfig'
import {getAuth,
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        GithubAuthProvider,
        signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Register(){
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const router = useRouter();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signUp = () =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((response) =>{
            console.log(response.user);
            sessionStorage.setItem('Token',response.user.accessToken);
            router.push('/');
        }).catch(() =>{
            alert('email already exists');
        })
    }
    const signUpWithGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then((response) =>{
            console.log(response.user);
            sessionStorage.setItem('Token',response.user.accessToken);
            router.push('/');
        })
    }
    const signUpWithGithub = () =>{
        signInWithPopup(auth,githubProvider)
        .then((response) =>{
            console.log(response.user);
            sessionStorage.setItem('Token',response.user.accessToken);
            router.push('/');
        })
    }
    useEffect(() => {
        let token = sessionStorage.getItem('Token');
        if(token){
            router.push('/');
        }
    }, [])
    
    return(
        <div>
           <div className={styles.container}>
                <Head>
                    <title>Next CRUD AUTH</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1>Register</h1>

                    <input placeholder='Email'
                    type='email'
                    className={styles.inputbox}
                    onChange={(event) =>setEmail(event.target.value)}
                    value={email}
                    />

                    <input placeholder='Password'
                    type='password'
                    className={styles.inputbox}
                    onChange={(event) =>setPassword(event.target.value)}
                    value={password}
                    />
                    
                    <button className={styles.button}
                    onClick={signUp}>SignUp</button>
                    <hr/>
                    <button className={styles.googleAlt}
                    onClick={signUpWithGoogle}> Sign Up with Google</button>
                    <hr/>
                    <button className={styles.googleAlt}
                    onClick={signUpWithGithub}> Sign Up with Github</button>
                </main>
            </div>
        </div> 
    )
}