import React from "react";
import './Filter.css'

const Filter = ({onChangeFilter,value}) => {
   return(
       <div className="Filter">
        <input
        name="filter"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        
        />
       </div>
   )
}

export default Filter;