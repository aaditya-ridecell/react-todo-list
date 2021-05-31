import { useState } from "react";
import Todo from "./components/TodoList/Todo";

function App() {
  const [todo, setTodo] = useState([
    {
      id: "e1",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "e2",
      title: "World",
    },
    {
      id: "e3",
      title: "Bam Bam",
    },
  ]);

  const deleteTodo = (index) => {
    setTodo((prevState) => prevState.filter((x) => x.id !== index));
  };

  return (
    <div>
      <div> Hello there</div>
      <Todo todoList={todo} onClickDelete={deleteTodo} />
    </div>
  );
}

export default App;
