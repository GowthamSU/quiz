import React,{useState}from 'react';
import data from './QuizzData.js';
import './Quizz.css'

function Quizz(){
  const[quizData,setQuizData]=useState(data);
  const[start,setStart]=useState(false);
  const[index,setIndex]=useState(0);
  const[marks,setMarks]=useState(0);
  const[showResult,setShowResult]=useState(false)
  console.log(quizData)

  const handleStart=()=>{
      setStart(true);

  }
  const handleClick=(selected)=>{
  if(selected===quizData[index].correct)
  {
    setMarks(marks+1)
  }
  if(index<4){
    setIndex(index+1)
   }
   else{
   setShowResult(true)
   }
}
const handlePlayAgain=()=>{
  setIndex(0)
  setMarks(0)
  setStart(false)
  setShowResult(false)


}
  return(
    <div>
    <h1>  Quiz Competition </h1>
   {!start && <div><button onClick={handleStart}>Start Quiz</button></div>}
    
   {!showResult && <div>{start && <div> <h3>Question {quizData[index].id}: {quizData[index].question}</h3>
    <button onClick={()=>handleClick(quizData[index].op1)}>{quizData[index].op1}</button><br/>
    <button onClick={()=>handleClick(quizData[index].op2)}>{quizData[index].op2}</button><br/>
    <button onClick={()=>handleClick(quizData[index].op3)}>{quizData[index].op3}</button><br/>
    <button onClick={()=>handleClick(quizData[index].op4)}>{quizData[index].op4}</button>  </div> } </div>}
  <h2> {showResult &&  'Your Result:'  + marks  } </h2>
      {showResult &&      <button onClick={handlePlayAgain}>Play Again</button> }

    </div>
  )
}
export default Quizz;