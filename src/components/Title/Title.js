import React from "react";
import "./Title.css";
const Title = props => (


  <div className="title container">
    <div className="lead"><h2>Click on an image to earn points, Click it twice you lose!</h2></div>
    <div ><h4>Score: <span>{props.score}</span></h4></div>
    <div ><h4>Highest Score: <span>{props.highestScore}</span></h4></div>
 </div>

)


export default Title;