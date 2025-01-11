import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Searchbox from "./components/searchbox/searchbox";
import Template from "./components/Template/template";
import Searchitems from "./components/searchitems/Searchitems";

function App() {
  const [menu, setmenu] = useState("");
  const [searchitem, setsearchitem] = useState("");
  //const [search,setsearch]=useState(true)
  const [searchbtnclicked, setsearchbtnclicked] = useState(false);

  const handlesearch = () => {
    if (!menu.trim()) return;

    setsearchitem(menu);
    setsearchbtnclicked(true);

    setmenu("");
  };
  console.log({ menu, searchitem });

  return (
    <div className="main">
      <Searchbox
        onclick={handlesearch}
        value={menu}
        ontextchange={(e) => setmenu(e.target.value)}
      />
      {searchbtnclicked ? <Searchitems dishname={searchitem} /> : <Template showsearcheitem={searchbtnclicked}/>}
    </div>
  );
}

export default App;
