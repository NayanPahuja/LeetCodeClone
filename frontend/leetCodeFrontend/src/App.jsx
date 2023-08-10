import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login'
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import ProblemScreen from './components/ProblemScreen/problemScreen';


const problems = [
  {
      problemId: "1",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4"
  },
  {
      problemId: "2",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300"
  },
  {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true"
  },
  {
      problemId: "4",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3"
  },
  {
      problemId: "1",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4"
  },
  {
      problemId: "2",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300"
  },
  {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true"
  },
  {
      problemId: "4",
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
      <Route path = '/dashboard' Component={Dashboard}/>
      <Route path="/problems/:pid/" element={<ProblemScreen/>} />
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
