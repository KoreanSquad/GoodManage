import React from 'react';
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import { useState } from 'react';

const MainContainer = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="main-Container">
      <h1>Good Manage</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList inputText={inputText} />
    </div>
  );
};

export default MainContainer;
