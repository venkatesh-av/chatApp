import React, { Component } from 'react';
import './App.css';
import MsgContent from './MsgComponent/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

library.add(faPeopleGroup);

class App extends Component {
  state = {
    messagesList: [],
    userList: ["Alan", "Bob", "Carol", "Dean", "Elin"], 
    showUserList: false,
  };

  personChats = (event) => {
    if (event.key === 'Enter' && event.target.value!=="") {
      const { value } = event.target;
      this.setState((prevState) => ({
        messagesList: [...prevState.messagesList, value],
      }));
      event.target.value = ''; // Clear the input field after pressing Enter
    }
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    const showUserList = value.endsWith('@');
    this.setState({
      showUserList,
    });
  };

  handleUserSelection = (user) => {
    const { messagesList } = this.state;
    const updatedMessage = `${messagesList[messagesList.length - 1]} @${user}`;

    this.setState((prevState) => ({
      messagesList: [...prevState.messagesList.slice(0, -1), updatedMessage],
      showUserList: false,
    }));
  };

  render() {
    const { messagesList, showUserList, userList } = this.state;

    return (
      <div className="main-background">
        <h1 className="main-heading">Introductions</h1>
        <div className="top-section">
          <p className="main-description">This Channel is For Company Wide Chatter</p>
          <p className="main-description">3|100 <FontAwesomeIcon icon="fa-solid fa-people-group" /></p>
        </div>
        <hr />
        <br />
        <div className='chatBlock'>
          {messagesList.map((message, index) => (
            <MsgContent key={index} messagesList={message} />
          ))}
        </div>
        <div className="footer-sec">
          <input
            type="text"
            placeholder="Type Message"
            className="TextField"
            onKeyDown={this.personChats}
            onChange={this.handleInputChange}
          />
          {showUserList && (
            <div className="user-list">
              {userList.map((user) => (
                <div key={user} className="user-list-item" onClick={() => this.handleUserSelection(user)}>
                  {user}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
