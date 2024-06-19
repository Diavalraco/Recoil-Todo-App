import React from 'react';
import { useRecoilState } from 'recoil'; 
import { todoState } from '../state/atoms/TodoState';
import { useState } from 'react';
import Todo from './Todo';
import styled, { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled-components for different elements
const Container = styled.main`
  padding: 20px;
  max-width: 500px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ddd;
  }
  &.add {
    background-color: #4caf50;
    color: white;
  }
  &.clear {
    background-color: #f44336;
    color: white;
  }
`;

const TodoList = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  animation: ${fadeIn} 0.5s ease-in-out;
  &:hover {
    background-color: #f1f1f1;
  }
  &.removed {
    animation: ${fadeOut} 0.5s ease-in-out;
  }
`;

const TodoText = styled.p`
  margin: 0;
`;

export default function Todos() {
    const [todos, setTodos] = useRecoilState(todoState);
    const [inputText, setInputText] = useState(''); 

    function addTodo() {
        if (inputText.trim()) { 
            setTodos((prevTodos) => [
                ...prevTodos,
                { id: Math.random(), text: inputText }
            ]);
            setInputText(''); 
        }
    }

    function clearTodos() {
        setTodos([]); 
    }

    function handleInputChange(e) {
        setInputText(e.target.value);
    }

    return (
        <Container>
            <Input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                id="todoInput"
                placeholder="Enter a todo..."
            />
            <div>
                <Button onClick={addTodo} className="add">Add Todos</Button>
                <Button onClick={clearTodos} className="clear">Clear Todos</Button>
            </div>
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.id}>
                        <TodoText>{todo.text}</TodoText>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </TodoItem>
                ))}
            </TodoList>
        </Container>
    );

    function removeTodo(id) {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }
}

