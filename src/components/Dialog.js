import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Chat.css';

const Dialog = () => {
    return(
        <dialog open>
        <Link to={'/chat?name=Alex&room=1'} target='_blank'>
        <button className="start_chat">Start Chat</button>
        </Link>
        </dialog>
    )
}
export default Dialog;