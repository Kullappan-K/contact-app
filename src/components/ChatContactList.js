import React from 'react';

const ChatContactList =({contactList}) => {
    return(
    <div className="chat_column">
    {contactList.map( (contact, index) =>( 
    <div key={index} className="row_data chat_contact_hover_op">
        <img className="round"/>
        <h5 className="col_name">{contact}</h5>
    </div>
    ))}
</div>
    )

}
export default ChatContactList;