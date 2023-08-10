import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './problemSet.css';

const ProblemSet = () => {
  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/dashboard", {
        method: "GET"
      });

      const json = await response.json();
      console.log("Fetched problems:", json.problems);
      setProblems(json.problems);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching problems:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderProblems = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
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
              <tr key={prob.problemId}>
                <Link className='links' to={`/problems/:${prob.problemId}`}>
                  <td>{prob.title}</td>
                </Link>
                <td className={`${prob.difficulty}`} >{prob.difficulty}</td>
                <td className={`${prob.difficulty}`} >{prob.acceptance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {renderProblems()}
    </div>
  );
};

export default ProblemSet;
