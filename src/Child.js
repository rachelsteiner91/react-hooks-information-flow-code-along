import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) { //2. add color here and to the style aka props data
  //1. check work with console.log(onChangeColor);
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
        onClick={handleClick} //2. change to {handleClick}
        className="child" 
        style={{ backgroundColor: color }} />
  )}

export default Child;

//1. we can now use this onChangeColor prop as an event handler 
//1. onClick{onChangeColor}

//OVERVIEW OF THOSE STEPS DELIVERABLE 1
//When the div in the Child component is clicked, it will use the onChangeColor variable to determine what function to run
// onChangeColor is a prop that is passed down from the Parent component, which references the handleChangeColor function
// The handleChangeColor function is the function that will actually run when the div is clicked, and will update state in the Parent component

//2. Now that the function takes in an argument, we can create a new function in our Child component that invokes onChangeColor and passes in a random color as the argument; we also need to update the component's onClick callback to be that new function