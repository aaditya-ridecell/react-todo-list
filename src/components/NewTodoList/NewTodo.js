import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";
import NewTodoSubmit from "./NewTodoSubmit";

const NewTodo = (props) => {
  const addGoalHandler = (goal) => {
    let data = {
      id: "e" + props.currId,
      title: goal,
    };
    console.log(data);
    props.onClickAdd(data);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "1rem", margin: "1rem" }}>
        <h2>Add Goal</h2>
        <NewTodoSubmit onClickAddGoal={addGoalHandler} />
      </Paper>
    </Container>
  );
};

export default NewTodo;
