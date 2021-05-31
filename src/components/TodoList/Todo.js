import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
import Container from "@material-ui/core/Container";

const Todo = (props) => {
  return (
    <Container maxWidth="md">
      <div>
        {props.todoList.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </div>
    </Container>
  );
};

export default Todo;
