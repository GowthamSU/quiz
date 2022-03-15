import React,{useState} from 'react';
import {Routes,Route,Link} from "react-router-dom";
import Quiz from './Quiz';
import Home from './Home';
function App(){
  return(
    <div>
      <h2>Quiz Competition</h2>

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
     
    </div>
  )
}
export default App;