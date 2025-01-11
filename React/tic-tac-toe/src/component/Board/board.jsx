import React, { useEffect, useState } from "react";
import Button from "../Buttons/button";
import "./board.css";
import { useCallback } from "react";

function Board() {
  const [arr, setarr] = useState(Array(9).fill(null));
  const [Xisnext, setXisnext] = useState(false);
  

  const onClick = (index) => {
    if (arr[index] != null) {
      return;
    }
    const newarr = [...arr];
    newarr[index] = Xisnext ? "X" : "O";

    setXisnext((prev) => !prev);
    setarr(newarr);
  };
  
  //console.log(arr);
const reset= ()=>{
  setarr(Array(9).fill(null));
}
  

  const calculate_winner = (arr) => {
  
    const ind = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < ind.length; index++) {
     const [a,b,c]=ind[index]

     if (arr[a] && arr[a]==arr[b] && arr[a]==arr[c]) {
    
        return arr[a]
      
      
     }
      
      
      
    }
  };

  let Status;
  let winner =calculate_winner(arr)

  if (winner) {
    Status = `${winner} has won`;
  } else if (arr.every((cell) => cell !== null)) {
    Status = "Match dishmish";
  } else if (!winner) {
    Status = `next player is ${Xisnext ? "x" : "O"} `;
  }
  



 

  return (
    <div className="main-div" >
      <div className="sub-div">
        {arr.map((sqr, index) => {
          return (
            <div key={index}>
              <Button
                text={sqr}
                onClick={() => onClick(index)}
                disabled={winner || arr.every((cell) => cell !== null)}
              />
            </div>
          );
        })}
      </div>
      <div className="p-div">
        {Status}
      </div>
      <div>
        {(winner || arr.every((cell)=>cell!==null) )&& (<button onClick={reset}>Reset Game</button>)}
      </div>
    </div>
  );
}

export default Board;
