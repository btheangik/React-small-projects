import React from 'react'

function Searchbox({ classname, onclick, value, ontextchange }) {
  return (
    <div>
      <input type="text" className="search" value={value} onChange={ontextchange} />
      <button className="btn" onClick={onclick}>
        Search
      </button>
    </div>
  );
}

export default Searchbox
