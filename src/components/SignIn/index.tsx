import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSingIn } from '../../features/applicationSlice';
import { useNavigate } from 'react-router-dom';
import "../SignUp/sign.scss"
const SingIn = () => {
    const singingIn = useSelector(state => state.application.singingIn)
    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleSingIn = (e) => {
        e.preventDefault()
        dispatch(authSingIn({login,password}))
    }   

    const handleSetName = (e) => {
        setLogin(e.target.value)
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if(singingIn === true) {
            navigate("/")
      }
    },[singingIn])

    return (
        <form onSubmit={handleSingIn} className="login">
        <input 
        type="text" 
        value={login}
        placeholder="login"
        onChange={handleSetName}/>
        <br />
        <input 
        type="password"
        value={password}
        placeholder="password"
        onChange={handleSetPass} />
        <br />
        <button>Sign In</button>
      </form> 
    );
};

export default SingIn;