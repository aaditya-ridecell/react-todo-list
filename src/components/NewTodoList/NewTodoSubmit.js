import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";

const NewTodoSubmit = (props) => {
  const [goal, setGoal] = useState("");

  const goalInput = (event) => {
    setGoal(event.target.value);
  };

  const addGoal = () => {
    props.onClickAddGoal(goal);
    setGoal("");
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Add Goal"
            value={goal}
            multiline
            fullWidth
            variant="outlined"
            error={false}
            onChange={goalInput}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" onClick={addGoal}>
            Add Goal
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewTodoSubmit;
