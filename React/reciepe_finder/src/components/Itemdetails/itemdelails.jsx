import React, { useEffect, useState } from "react";
import "./itemdetails.css";


function Itemdelails({ dishname, onClick }) {
  const [data, setdata] = useState([]);
  const [Ingreadients, setIngeadients] = useState([]);
  const [Ingreadientsclicked, setIngreadientsclicked] = useState(false);
  const [instructionclicked, setinstructionclicked] = useState(false);

  const ingbtnclicked = () => {
    setIngreadientsclicked((prev) => !prev);
  };

  const insbtnclicked = () => {
    setinstructionclicked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishname}`)
      .then((res) => res.json())
      .then((res) => setdata(res.meals));
  }, [data]);
  console.log(data);

  useEffect(() => {
    if (data.length > 0) {
      data.map((meals) => {
        let ingreadientslist = [...Ingreadients];
        for (let i = 0; i < 20; i++) {
          const theingredient = meals[`strIngredient${i}`];
          if (theingredient) {
            ingreadientslist[i] = theingredient;
          }
        }

        setIngeadients(ingreadientslist);
      });
    }
    console.log(Ingreadients);
  }, [data]);

  return (
    <div className="main-div1">
      
      <button className="backbutton" onClick={onClick}>
        Back
      </button>
      {data.map((meals) => {
        return (
          <div className="child-div">
            <div key={meals.idMeal} className="sibling-div-1">
              <div className="img-div">
                <img src={meals.strMealThumb} alt="" className="img" />
              </div>
              <div className="name-div"> {meals.strMeal}</div>
            </div>
            <div className="sibling-div-2">
              <div className="for-ingreadients">
                <button onClick={ingbtnclicked}>Ingreadients</button>

                {Ingreadientsclicked && (
                  <ul>
                    {Ingreadients.slice(1).map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="for-instruction">
                <button onClick={insbtnclicked}>Instruction</button>
                {instructionclicked && <p>{meals.strInstructions}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Itemdelails;
