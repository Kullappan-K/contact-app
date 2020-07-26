import React, { useState } from 'react';

import {Link} from 'react-router-dom';

const UserList = ({contactList}) => {

    const [name, setName] = useState('');

    return(
    <Link to={`/home?name=${name}`} target="_blank" className="link_remove">
    {contactList.map((contact, index) => (
        <button key={index} className="left" onMouseOver={(event) => {setName(event.target.textContent);}}>{contact}</button>
    ))
    }
    </Link>
    )
}
export default UserList;