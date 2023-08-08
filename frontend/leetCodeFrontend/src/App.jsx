import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login'
import SignUp from './components/signup';
import Dashboard from './components/dashboard';


const problems = [{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%"
}, {
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "412%"
},
{
  title: "202. Happy Number",
  difficulty: "Easy",
  acceptance: "54.9%"
},
{
  title: "203. Remove Linked List Elements",
  difficulty: "Hard",
  acceptance: "42%"
}];

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={SignUp}/>
      <Route path = '/dashboard' Component={ Dashboard }/>
      
      </Routes>
        
      </BrowserRouter>
    </div>
  )
}



function ProblemStatement(props) {
  const { title, acceptance, difficulty } = props;

  return (
    <tr>
      <td>
        {title}
      </td>
      <td>
        {acceptance}
      </td>
      <td>
        {difficulty}
      </td>
    </tr>
  );
}

export default App;
