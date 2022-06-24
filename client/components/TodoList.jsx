import React from 'react';
import { useState, useEffect } from 'react';

const TodoList = ({ inputText }) => {
  // const [todo, setTodo] = useState('');
  // useEffect(() => {
  //   setTodo('Clean my room');
  // }, []);

  return (
    <ul>
      <li>{inputText}</li>
    </ul>
  );
};

export default TodoList;
