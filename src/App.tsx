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
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
	return (
		<>
    <Header/>
    <Routes>
			<Route path="/" element={<Home/>}/>
      <Route path="/cardsProperty" element={<CardsProperty/>} />
      <Route path='/fullpage/:id' element={<FullPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SingIn/>}/>
    </Routes>
		</>
	)
}

export default App
