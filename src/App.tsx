import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import { FullPage } from './components/FullPage'
import Header from './components/Header/Header'
import CardsProperty from './components/CardsProperty'

function App() {
	return (
		<>
    <Header/>
    <Routes>
			<Route path="/" element={<Home/>}/>
      <Route path="/cardsProperty" element={<CardsProperty/>} />
      <Route path='/fullpage/:id' element={<FullPage/>}/>
    </Routes>
		</>
	)
}

export default App
