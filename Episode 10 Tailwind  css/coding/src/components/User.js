import { useState } from "react";




const User= ({company , location , name }) =>{
    const [count1 ] = useState(1);
    const [count2 ] = useState(1);

    return (
        <div className="user-card">
            <h1>count1 ={count1} count2 = {count2} </h1>
            <h1>{company}</h1>
            <h2>{location}</h2>
            <h3>{name}</h3>
        </div>
    )
};

export default User;