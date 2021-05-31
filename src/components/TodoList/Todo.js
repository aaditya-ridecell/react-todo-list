import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
import Container from "@material-ui/core/Container";

const Todo = (props) => {
  const deleteTodoItem = (id) => {
    props.onClickDelete(id);
  };

  return (
    <Container maxWidth="md">
      <div>
        {props.todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onClickDelete={deleteTodoItem}
          />
        ))}
      </div>
    </Container>
  );
};

export default Todo;
