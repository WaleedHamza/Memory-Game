import React from "react";
import "./Title.css";
const Title = props => (

<div className="jumbotron jumbotron-fluid">
  <div className="title container">
    <h2 className="lead">Click on an image to earn points, but don't click on it twice if you do you will lose!</h2>
    <div ><h3>Score: <span>{props.score}</span></h3></div>
    <div ><h3>Highest Score: <span>{props.highestScore}</span></h3></div>
 </div>
</div>
)


export default Title;