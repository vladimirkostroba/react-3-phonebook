import React from "react";

const PhoneList = ({contacts}) => {
    return(
        <ul className="PhoneList">
          {contacts.map(({id,name,number}) => {
            return(
                <li key={id}>
                    <p>Name: {name}</p>
                    <p>Number: {number}</p>
                    <button type="button">delate this contact</button>
                </li>
            )
          })}
        </ul>
    )
}

export default PhoneList;