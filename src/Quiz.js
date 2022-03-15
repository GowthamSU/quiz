import React,{useState} from "react";
function Quiz(){
  const[index,setIndex]=useState(0);
  const[score,setScore]=useState(0);
  const[showResult,setShowResult]=useState(false);
  const[allQuestions,setAllQuestions]=useState([
   {id:1,question:"Who is the inventor of Radio?",
   op1:"Thomas",op2:"Marconi",op3:"Franklin",op4:"Alexander",
  correct:"Marconi"},
  {id:2,question:"What is the Resolution of the Human Eye?",
   op1:"556MP",op2:"562MP",op3:"578MP",op4:"576MP",
  correct:"576MP"},
  {id:3,question:"How much is the Earth Worth?",
   op1:"2.5-3.5 quadrillion pounds",op2:"2.8-3.5 quadrillion pounds",
   op3:"3.0-4.4 quadrillion pounds",op4:"3.5-4.5 quadrillion pounds",
  correct:"3.0-4.4 quadrillion pounds"},
  {id:4,question:"Which came first- The Egg or the Chicken?",
   op1:"Hypothetical",op2:"The Egg",op3:"The Chicken",op4:"I dont know",
  correct:"The Egg"},
  {id:5,question:"Most War-stricken country in the world?",
   op1:"Syria",op2:"China",op3:"Pakistan",op4:"Russia",
  correct:"Syria"} ])
  //  console.log('allQuestion',allQuestions)
   const handleClick=(selectedAnswer)=>
   {
     if(selectedAnswer===allQuestions[index].correct){
       setScore(score+1)
     }
     if(index<4){
        setIndex(index+1)
     }else{
       setShowResult(true)
     }
    }
    console.log(score);
   return(
    <div>
       {!showResult && ( <div>
    <h3>Question{allQuestions[index].id}: {allQuestions[index].question}</h3>
    <button onClick={()=>handleClick(allQuestions[index].op1)}>{allQuestions[index].op1}</button><br/>
    <button onClick={()=>handleClick(allQuestions[index].op2)}>{allQuestions[index].op2}</button><br/>
    <button onClick={()=>handleClick(allQuestions[index].op3)}>{allQuestions[index].op3}</button><br/>
    <button onClick={()=>handleClick(allQuestions[index].op4)}>{allQuestions[index].op4}</button> </div> )}
    <h2>{showResult && 'your score is:' + score }</h2>
    </div>
  )
}
export default Quiz;