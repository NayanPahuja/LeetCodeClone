import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './problemSet.css'
const ProblemSet = () => {
  const [problems, setProblems] = useState([]);
        const init =  async() => {
          const response = await fetch("http://localhost:3000/dashboard", {
            method: "GET"
          })
      
          const json = await response.json()
          setProblems(json.problems)
        }
        useEffect(() => {
            init();
        },[problems])
  return (
    <div id="allproblems">
      <table>
        <tbody>

          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>

          {problems.map((prob) => (
            <tr>
              <Link className = 'links'to={`/problems/:${prob.problemId}`}>
                <td>{prob.title}</td>
              </Link>
              <td className={`${prob.difficulty}`} >{prob.difficulty}</td>
              <td className={`${prob.difficulty}`} >{prob.acceptance}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default ProblemSet