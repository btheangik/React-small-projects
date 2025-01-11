import React, { useEffect, useState } from "react";
import "./template.css";
import Itemdelails from "../Itemdetails/itemdelails";

function Template({ showsearcheitem }) {
  const [data, setdata] = useState([]);
  const [mealname, setmealname] = useState("");
  const [itameclicked, setitameclicked] = useState(false);

  const clickedonitem = (mealsname) => {
    setmealname(mealsname);
    setitameclicked(true);
  };

  const goback = () => {
    setitameclicked(false);
  };
  console.log(data);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((res) => setdata(res.meals));
  }, [data]);

  return (
    <div className="main-div">
      {itameclicked ? (
        <Itemdelails
          dishname={mealname}
          itemclicked={itameclicked}
          onClick={goback}
        
        />
      ) : (
        data.map((meals) => {
         return(
            <div
              key={meals.idMeal}
              className="sub-divs"
              onClick={() => clickedonitem(meals.strMeal)}
            >
              <div className="img-div">
                <img src={meals.strMealThumb} alt="" className="img" />
              </div>
              <div className="name-div"> {meals.strMeal}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Template;
