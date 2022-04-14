import React, { Component, useState } from "react";
import './Component.css';

export function LikeCounter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    
    const reset=()=>{
        setCount(0)
    }
  
    return (
      <div className="count">
        <div>{count}</div>
        <button className="count_btn" onClick={increment}>👍</button>
        <button className="count_btn" onClick={reset}>reset</button>
      </div>
    );
  }

  export function DislikeCounter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    
    const reset=()=>{
        setCount(0)
    }
  
    return (
      <div className="count">
        <div>{count}</div>
        <button className="count_btn" onClick={increment}>👎</button>
        <button className="count_btn" onClick={reset}>reset</button>
      </div>
    );
  }  

