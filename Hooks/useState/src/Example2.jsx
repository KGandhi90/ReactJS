// Managing Multiple State Variables

import React, { useState } from 'react';

const Example2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div>
            Name : <input type="text" onChange={(e) => setName(e.target.value)} /><br />         
            Email : <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <p>Name : {name}</p>          
            <p>Email : {email}</p>          
        </div>
    )
}

export default Example2;