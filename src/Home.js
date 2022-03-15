import React,{ useState } from 'react';
import {Link} from "react-router-dom";
function Home(){
  return(
    <div>
      <Link to="/quiz"><button>Start Quiz</button></Link>
    
    </div>
  )
}
export default Home;
