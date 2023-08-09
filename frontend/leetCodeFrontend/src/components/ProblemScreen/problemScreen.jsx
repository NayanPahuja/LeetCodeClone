import React , { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./problemScreen.css"
import NavBar from '../navbar'



const ProblemScreen = ({problems}) => {
    const [CodeSeg, setCodeSeg] = useState("") ;
    const { pid } = useParams() ;
    const cleanId = pid.substring(1) ;
  
    // console.log(cleanId) ;
  
    const found = problems.find((prob)=>{
      return prob.problemId===cleanId;
    })
  
  
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
          found? (
            <div id="problempage" className='flex-row'>
              <div className="ques">
                <h1>{found.title}</h1>
                <h5>Description</h5>
                <p>{found.description}</p>
                <h5>Example:</h5>
                <code className='example'>Input : {found.exampleIn}</code>
                <code className='example'>Output : {found.exampleOut}</code>
              </div>
              <div className="code">
                <h1>Code Here</h1>
                <form className='code-form' method="post" action='/runprogram' >
                  <textarea name="SolvedCode" onKeyDown={ (event) => handleKey(event) }></textarea>
                  <button type="submit" id="test">Test</button>
                  <button type="submit" id="submit">Submit</button>
                </form>
              </div>
            </div>
          ) :
          (<div>The searched Question Doesn't exist</div>)
        }
  
      </div>
      </div>
      
    )
}

export default ProblemScreen