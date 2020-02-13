import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    };
  }
  render() {
    return <div className="Contact">
      <img className="avatar" src={this.props.avatar} />
      <div>
        <h4 className="name">{this.props.name}</h4>
        <div className="status"
          onClick={event => {
            const newState = !this.state.online
            this.setState({ online: newState })
          }}>
          <p className={this.state.online ? "status-online" : "status-offline"}></p>
          <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </div>
  }
}

export default Contact;