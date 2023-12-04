import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSingUp } from '../../features/applicationSlice';
import "./sign.scss"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const singingUp = useSelector(state => state.application.singingUp)
    const navigate = useNavigate()
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const [avatar, setAvatar] = useState(null)
    const dispatch = useDispatch()

    const handleSetName = (e) => {
        setLogin(e.target.value)
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const handleSingUp = (e) => {
        e.preventDefault()
        dispatch(authSingUp({login,password,avatar}))
    }
    useEffect(() => {
        if(singingUp === true) {
          navigate("/signin")
        }
      },[singingUp])
    return (
        <form className="login" onSubmit={handleSingUp}>
        <input 
        type="text"  
        value={login}
        placeholder="name"
        onChange={handleSetName}/>
        <br />
        <input
        type="password"
        value={password}
        placeholder="password"
        onChange={handleSetPass}/>
        <br />
          <div className="file-input">
              <input onChange={(e)=> setAvatar(e.target.files[0])} type="file" id="file" className="file" />
              <label htmlFor="file">Select file</label>
          </div>
        <button>Sing Up</button>
      </form> 
    );
};

export default SignUp;