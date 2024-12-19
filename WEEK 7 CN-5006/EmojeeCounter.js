
import React, { useState, useEffect } from 'react';
import './App.css';
import Love from './Love.png';
import Sad from './sad.png';
import Like from './like.png';

function EmojeeCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [pic, setPic] = useState(Love);

  useEffect(() => {
    if (text.toLowerCase() === 'love') {
      setPic(Love);
    } else if (text.toLowerCase() === 'like') {
      setPic(Like);
    } else if (text.toLowerCase() === 'sad') {
      setPic(Sad);
    }
  }, [text]);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Emoji Counter</h1>
      <input
        type="text"
        placeholder="Type 'Love', 'Like', or 'Sad'"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />
      <div>
        <p>
          Current Emoji: <strong>{text || 'None'}</strong>
        </p>
        <img src={pic} alt="emoji" style={{ width: '100px', height: '100px' }} />
        <div>
          <button onClick={clickHandler} style={{ marginTop: '10px', padding: '10px', fontSize: '16px' }}>
            Click Me: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmojeeCounter;
