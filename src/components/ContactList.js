import React from 'react';
import './Contact.css';

const ContactList = () => {

  const contact = [
    {
      name: "Milton Fleming",
      picture: "https://i.postimg.cc/1XqMP8ym/Milton-Fleming.jpg",
      online: true
    },
    {
      name: "Eli Rivera",
      picture: "https://i.postimg.cc/xjwt53Pc/Eli-Rivera.jpg",
      online: true
    },
    {
      name: "Noah Gilbert",
      picture: "https://i.postimg.cc/R0ggTrPB/Noah-Gilbert.jpg",
      online: false
    },
    {
      name: "Brett Silva",
      picture: "https://i.postimg.cc/mDqV0Yfp/Brett-Silva.jpg",
      online: true
    },
    {
      name: "Catherine Bank",
      picture: "https://i.postimg.cc/mZ7hJTqg/francoise.jpg",
      online: false
    }
  ];

  return (
    <div>
      {contact.map(member => (
        <div className="Contact">
          <img className="avatar" src={member.picture} />
          <div>
            <h4 className="name">{member.name}</h4>
            <div className="status">
              <p className={member.online ? "status-online" : "status-offline"}></p>
              <p className="status-text">{member.online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
        </div>
      )
      )
      }
    </div>
  )
}

export default ContactList;