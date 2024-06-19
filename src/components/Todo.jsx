import React from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

export default function Todo({ text, id }) {
  const setTodos = useSetRecoilState(todoState);

  function deleteTodo() {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}
