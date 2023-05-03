import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor(); //1. helper functon to generate random color
  const [color, setColor] = useState(randomColor); //1. The Parent component has a state variable called color that is initially set to a random color.
  const [childrenColor, setChildrenColor] = useState("#FFF"); //2.when ether Child component is clicked, it should change its own background color to a random color, and the other Child component should change to that same color

function handleChangeColor(newChildColor) { //2. adding (newChildColor) takes in argument, then use that variable to update state of Child component
  const newRandomColor = getRandomColor();
  setColor(newRandomColor); //1. update color state to new value
  setChildrenColor(newChildColor); //2. change the childrenColor as well as color state
}
//1. we want to run this handleChangeColor() function when either Child component is clicked. 
//1. to do this: pass this state changing function {handleChangeColor} as a prop (onChangeColor)to both Child components: see below 
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} /> 
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;

//1. onChangeColor is a now prop that is now a function for the Child. it is the same function object as our Parent's handleChangeColor function but it's the Child prop 
//2. the data that represents the color of the two Child components lvies in Parent, we pass that data down as props aka add color={childrenColor} then go to Child component to actually use that props data...