import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./problemScreen.css"
import NavBar from '../navbar'
import { backendUrl } from "../../constants.js";
import { Navigate } from 'react-router-dom';


const ProblemScreen = ({}) => {
    const [CodeSeg, setCodeSeg] = useState("") ;
    const { pid } = useParams() ;
    const cleanId = pid.substring(1) ;
    const [problem, setProblem] = useState(null);
    const [submission, setSubmission] = useState("");
  
    // console.log(cleanId) ;
    const init = async () => {
      const response = await fetch(`https://leetcode-clone-backend.vercel.app/problem/`+ cleanId, {
        method: "GET",
      });

      const json = await response.json();
      setProblem(json.problem);
    // const problem = problems.find((prob)=>{
    //   return prob.problemId===cleanId;
    // })
    }

    useEffect(() => {
      init()
    },[])
  
    const handleKey = (event) => {
      if (event.key == "Tab"){
        event.preventDefault() ;
        const { selectionStart , selectionEnd , value } = event.target ;
        const val = value.substring(0,selectionStart) + "\t" + value.substring(selectionStart) ;
        event.target.value = val;
        event.target.selectionStart = event.target.selectionEnd = selectionStart+1;
      }
      setCodeSeg(event.value) ;
    }
  
    return (
        <div>
            <NavBar/>
        
      <div>
  
        {
          problem? (
            <div id="problempage" className='flex-row'>
              <div className="ques">
                <h1>{problem.title}</h1>
                <h5>Description</h5>
                <p>{problem.description}</p>
                <h5>Example</h5>
                <code className='example'>Input : {problem.exampleIn}</code>
                <code className='example'>Output : {problem.exampleOut}</code>
              </div>
              <div className="code">
                <h1>Code Here</h1>
                <div className='code-form'>
                  <textarea onChange={(e) => {
                    setSubmission(e.target.value)
                  }} name="SolvedCode" onKeyDown={ (event) => handleKey(event) }></textarea>
                  <button type="submit" id="submit" onClick={async () => {
                  const response = await fetch(`https://leetcode-clone-backend.vercel.app/submission`, {
                    method: "POST",
                    headers: {
                      "authorization": localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                      problemId: cleanId,
                      submission: submission
                    })
                  });

                  const json = await response.json();
                  
                  if(json.msg === 'Incorrect token'){
                    alert('Please Login First!')
                  }

                  if(json.status === 'WA'){
                    alert('Wrong Answer. Try Again!')
                  }
                  if(json.status === 'AC'){
                    alert('Submission Accepted!')
                  }
                  console.log(json);

                }}>SubmitCode</button>
                </div>
              </div>
            </div>
          ) :
          
          (
          <div class = 'anim-container'>
          <div className="loading-spinner"></div>
          </div>)
        }
  
      </div>
      </div>
      
    )
}

export default ProblemScreen