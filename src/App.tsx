import { Route, Routes } from 'react-router'
import './App.css'

import Home from './components/Home/Home'
import { FullPage } from './components/FullPage'
import Header from './components/Header/Header'
import CardsProperty from './components/CardsProperty'
import SignUp from './components/SignUp'
import SingIn from './components/SignIn'
import { useEffect } from 'react'
import { getUser } from './features/applicationSlice'
import { useDispatch, useSelector } from 'react-redux'
import socketIO from "socket.io-client"
import FormChat from './components/FormChat'
import ChatPage from './components/Chat'
import Sell from './components/Sell'

const socket = socketIO.connect("http://localhost:3030")

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.application.token)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch, token])
	return (
		<>
    <Header/>
    <Routes>
			<Route path="/" element={<Home/>}/>
      <Route path="/cardsProperty" element={<CardsProperty/>} />
      <Route path='/fullpage/:id' element={<FullPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SingIn/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/formChat" element={<FormChat socket={socket}/>}/>
      <Route path="/chat" element={<ChatPage socket={socket}/>}/>
    </Routes>
		</>
	)
}

export default App
