import React, { useState } from "react";
import "./cal.css";

function Calculator() {
  const value = [7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "%", "/",'(',')'];
  const [displayvalue, setdisplayvalue] = useState([]);

  const handleclick = (val) => {
    const newval = [...displayvalue];
    newval.push(val);
    setdisplayvalue(newval);
  };

  const erasedata = () => {
    setdisplayvalue([]);
  };
  console.log(displayvalue);

  const eleminate = () =>{
    const newval = [...displayvalue];
    newval.pop();
    setdisplayvalue(newval)


  }
  const isequalto = () => {
    let num = "";
    const numarr = [];
    const operatorarr = [];
    for (let i = 0; i < displayvalue.length; i++) {
      let element = displayvalue[i];
      if (!isNaN(element) || element == ".") {
        num += element;
      } else if (
        element == "+" ||
        element == "-" ||
        element == "X" ||
        element == "/" ||
        element == "%"
      ) {
        operatorarr.push(element);
        if (num !== " ") {
          numarr.push(parseFloat(num));
        }

        num = "";
      }
    }
    numarr.push(num);
    console.log(numarr);
    console.log(operatorarr);
    let currnum = numarr[0];
    const newnumarr = [];
    const newoperatorarr = [];

    for (let i = 0; i < operatorarr.length; i++) {
      console.log(currnum);

      let nextnum = numarr[i + 1];
      let curropr = operatorarr[i];
      if (curropr == "X" || curropr == "/" || curropr == "%") {
       
          switch (curropr) {
            case "X":
              currnum *= nextnum;
              break;
            case "/":
              currnum /= nextnum;
              break;
            case "%":
              currnum %= parseFloat(nextnum);
              break;
          }
        } else {
          newnumarr.push(currnum);
          newoperatorarr.push(curropr);
          currnum = nextnum;
        }
      
    }
    newnumarr.push(currnum);
    let result = newnumarr[0];

    for (let i = 0; i < newoperatorarr.length; i++) {
      const nextnum = newnumarr[i + 1];
      const oprtr = newoperatorarr[i];
     
        switch (oprtr) {
          case "+":
            result += parseFloat(nextnum);
            break;
          case "-":
            result -= parseFloat(nextnum);
            break;
        }
      
    }
    console.log(newnumarr);
    console.log(newoperatorarr);
    console.log(result);
    setdisplayvalue([result.toString()]);
  };

  return (
    <div className="main-div">
      <div className="screen-container">
        <div className="screen">{displayvalue}</div>
      </div>

      <div className="button-board">
        {value.map((val, index) => {
          return (
            <button
              onClick={() => handleclick(val)}
              key={index}
              className="buttons"
            >
              {val}
            </button>
          );
        })}
        <button className="buttons" onClick={isequalto}>
          =
        </button>
        <button className="buttons" onClick={erasedata}>
          AC
        </button>
        <button className="buttons" onClick={eleminate}>
          x
        </button>
      </div>
    </div>
  );
}
export default Calculator