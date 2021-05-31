import { Grid, Tooltip } from "@material-ui/core";
import "./TodoItem.css";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { useState } from "react";

const TodoItem = (props) => {
  const [buttonStyle, setStyle] = useState({
    style: {
      display: "none",
      height: "100%",
      color: "black",
    },
  });

  const deleteTodoItem = () => {
    props.onClickDelete(props.id);
  };

  return (
    <div
      className="todoitem"
      onMouseEnter={(e) => {
        setStyle((prevStyle) => ({
          style: {
            ...prevStyle.style,
            display: "block",
          },
        }));
      }}
      onMouseLeave={(e) => {
        setStyle((prevStyle) => ({
          style: {
            ...prevStyle.style,
            display: "none",
          },
        }));
      }}
    >
      <Grid container spacing={2}>
        <Grid
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingLeft: "0.5rem",
          }}
          item
          xs={11}
        >
          {props.title}
        </Grid>
        <Grid item xs={1}>
          <Tooltip title="Delete" placement="right" arrow>
            <IconButton
              style={buttonStyle.style}
              color="secondary"
              aria-label="Delete"
              onClick={deleteTodoItem}
            >
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoItem;
