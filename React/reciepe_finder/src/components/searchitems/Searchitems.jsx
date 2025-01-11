import React, { useEffect, useState } from 'react'
import Itemdelails from '../Itemdetails/itemdelails';

function Searchitems({dishname}) {
    const [data,setdata] = useState([])
     const [itameclicked, setitameclicked] = useState(false);
     const [mealname, setmealname] = useState("");
     useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishname}`)
          .then((res) => res.json())
          .then((res) => setdata(res.meals));
      }, [data]);

      console.log(data);

       const clickedonitem = (mealsname) => {
         setmealname(mealsname);
         setitameclicked(true);
       };
        const goback = () => {
          setitameclicked(false);
        };
      
  return (
    <div className="main-div">
      {itameclicked ? (
        <Itemdelails
          dishname={mealname}
          itemclicked={itameclicked}
          onClick={goback}
        />
      ) : (
       data? (data.map((meals) => {
          return (
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
        })):(
            <div>
                <p>dish not found</p>
            </div>
        )
      )}
    </div>
  );
}

export default Searchitems
