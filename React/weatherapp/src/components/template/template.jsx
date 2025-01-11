import { React, useState } from "react";
import "./template.css";
import Searchbox from "../Searchbox/searchbox";
import Usehook from "../../hook/usehook";

function Template() {
  const [location, setLocation] = useState("London");
  const [place, setplace] = useState("");

  const { name, temp_c, icon, time } = Usehook(location);
  //const hour =  time.split(" ")
  console.log(name);

  const daynight = (time > 18 || time<6) ? "night" : "morning";
 

  console.log(daynight);

  const onclick = () => {
    setLocation(place);
    setplace("");
  };
  return (
    <div className={`main-template ${daynight}`}>
      <Searchbox
        value={place}
        onChange={(e) => setplace(e.target.value)}
        onClick={onclick}
        placeholder="type name of the location"
      />
      <div className="sub-template">
        <div>
          <img src={icon} alt="" />
        </div>
        <h1>Location: {name !== null ? name : "N/A"}</h1>
        <h2>Temperature: {temp_c !== null ? `${temp_c} °C` : "N/A"}</h2>
       
        
      </div>
    </div>
  );
}

export default Template;
