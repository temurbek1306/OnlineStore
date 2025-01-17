import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Redirect from './components/Redirect'
import Details from './Pages/Details'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/details/:id'  element={<Details/>}/>
      <Route path='/*'  element={<Redirect/>}/>
     </Routes>
    </>
  )
}

export default App
