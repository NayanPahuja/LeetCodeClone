import React, { useState, useEffect } from 'react'
import './dashboard.css'
import NavBar from './navbar'
import ProblemSet from './problemSet'
import { backendUrl } from '../constants';

const Dashboard = () => {
    const [problems, setProblems] = useState([])
    const init = async () => {
        
        try {
          const response = await fetch("https://leetcode-clone-backend.vercel.app/dashboard", {
            method: "GET"
          });
      
          const json = await response.json();
          console.log("Fetched data:", json);
          setProblems(json.problems);
        } catch (error) {
          console.error("Error fetching problems:", error);
        }
      };
      
        useEffect(() => {
            init();
        },[])
  return (
    <div id='dashboard-container'>
        <NavBar/>
        <div class = 'problemDisplay'>
        <ProblemSet/>
        </div>
    </div>
    
  )
}

export default Dashboard