import React from 'react';
import { useState, useEffect } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState('');
    useEffect(() => {
        setTodo('Clean my room')

    }, [])
    

	return (
		<ul>
      		<li>{todo}</li>
    	</ul>
	)
}

export default TodoList;