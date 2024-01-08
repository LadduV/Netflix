import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import { firebaseAuth } from '../utils/firebase-config';

const SignUp = ()=>{
    const[showPassword, setShowPassword]=useState(false);
    const [formValues, setFormValues] = useState({email:"", password:"",});
    const navigate = useNavigate();
    
      const handleSignIn = async ()=>{
        try {
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
            
        } catch (error) {
            console.log(error);
        }
      }

      onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser)navigate('/')
      })
    return(
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header login/>
                <div className="body">
                    <div className="text">
                        <h1>Unlimited Movies,TV Shows and More</h1>
                        <h4>Watch Anywhere, Cancel Anytime</h4>
                        <h6>Ready To Watch,Login or Register New User</h6>
                    </div>
                    <div className="form">
                        {
                            showPassword ? (<input type="password" placeholder='password' name='password' value={formValues.password} onChange={(e)=>setFormValues({...formValues, [e.target.name]: e.target.value})}/>) :( <input type="email" placeholder='email' name='email' value={formValues.email} onChange={(e)=>setFormValues({...formValues, [e.target.name]: e.target.value})}/>)
                        }
                       
                       {
                        !showPassword ? ( <button onClick={()=>setShowPassword(true)}>Get Started</button>):( <button onClick={handleSignIn}>Sign Up</button>)
                       }
                       
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
position: relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        color: White;
    }
    h1{
        padding: 0 16rem;
    }
    h4{
        margin-top:-1.5rem;
    }
    h6{
        margin-top: -1.5rem;
    }
}
.form{
    display: grid;
    width: 60%;
    grid-template-columns: ${({showPassword})=>showPassword ?"1fr 1fr":"2fr 1fr"};
    input{
        color: black;
        padding: 1.5rem;
        font-size: 1.2rem;
        width: 45rem;
        &:focus{
            outline: none;
        }
}
button{
    padding: .5rem 1rem;
    background-color: red;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.05rem;
    width: 10rem;
}
}
`;

export default SignUp;