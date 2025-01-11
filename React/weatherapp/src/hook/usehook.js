import { useEffect, useState } from "react";

function Usehook(location) {
  const [data, setdata] = useState({name:null, temp_c:null,icon:null, time:""});
  useEffect(()=>{ fetch(
    `http://api.weatherapi.com/v1/current.json?key=9be835cfa92842f59b5144829241412&q=${location}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) =>
      setdata({
        name: res.location.name,
        temp_c: res.current.temp_c,
        icon: res.current.condition.icon,
        time: parseInt(res.location.localtime.split(' ')[1].split(':')[0])
      })
    );

  }, [location])
   
 
  
  return data;
}

export default Usehook;
