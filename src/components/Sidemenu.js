import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Sidemenu = ({name}) => {
    
    const [url, setURL] = useState('');

    return(
        <div className="side_container">
        <i className="contact_menu fa fa-bars"></i>
        <Link className="sidemenu_link" to={url}>
        <i className="contact_home fa fa-home" />
        <i className="contact_home sidebar fa fa-user"   onMouseOver={((event) => {setURL(`/home?name=${name}`)})}/>
        <i className="contact_home fa fa-comments-o"  onMouseOver={((event) => {setURL(`/chat?name=${name}&room=1`)})}/>
        </Link>
        </div>
    );
}
export default Sidemenu;