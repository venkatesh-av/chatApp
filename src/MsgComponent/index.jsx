import React, { useState } from 'react';
import './index.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const user_color = ['red', 'blue', 'green', 'skyblue', 'lightgreen', 'pink'];

const MsgContent = (props) => {
  const { messagesList } = props;
  const [likeCount, setLikeCount] = useState(0);

  let randomNumber;
  if (messagesList.length < 70) {
    randomNumber = Math.floor(messagesList.length / 10);
  } else if (messagesList.length <= 100) {
    randomNumber = Math.floor(messagesList.length / 20);
  } else {
    randomNumber = Math.floor(Math.random() * 6); // Generates a random number between 0 and 5
  }
  const randomColor = user_color[randomNumber];
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className='chat-container'>
      <div>
        <span className='chatProfile' style={{ backgroundColor: randomColor }}>{user_list[randomNumber][0]}</span>
      </div>
      <div>
        <div className='chatPTime'>
          <h1 className="chatPName">{user_list[randomNumber]}</h1>
          <p className='time-Change'>{`${hours}:${minutes}`}</p>
        </div>
        <div className='chatBox'>
          <p>{messagesList}</p>
        </div>
      </div>
      <div>
        <button className='button-edit' onClick={handleLike}>
          Like <span>({likeCount})</span>
        </button>
      </div>
    </div>
  );
};

export default MsgContent;
