import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  // write you js code and function here
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText }]);
    setInputText('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="todoInputBox"
          placeholder="Type your task"
          onChange={inputTextHandler}
          value={inputText}
        />
        <button type="submit" onClick={submitTodoHandler}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
