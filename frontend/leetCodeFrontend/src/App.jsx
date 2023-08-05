import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/login" Component={Login}/>
          {/* Add more routes here */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

function Login() {
  const [userEmail, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmailID">Username:</label>
          <input type="text" id='userEmailID' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="userPassID">Password:</label>
          <input type="text" id='userPassID' value={password} onChange={e => setUserPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
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
