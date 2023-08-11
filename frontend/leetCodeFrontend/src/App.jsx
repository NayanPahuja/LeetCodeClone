import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login'
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import ProblemScreen from './components/ProblemScreen/problemScreen';
import RandomProblem from './components/randomProblem/randomProblem';
import ContactMe from './components/ContactMe/contactMe';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={SignUp}/>
      <Route path = '/dashboard' Component={Dashboard}/>
      <Route path="/problems/:pid/" element={<ProblemScreen/>} />
      <Route path="/random" element={<RandomProblem />} />
      <Route path="/about" element={<ContactMe />} />
      </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App;

//npm run
