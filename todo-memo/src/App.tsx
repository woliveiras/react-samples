import React, { useState, useCallback, useMemo } from "react";
import List, { Todo } from "./List";

const initialTodos = [
  { id: 1, task: "Get my cat in the Judo class" },
  { id: 2, task: "Clear the shit I did in my room" },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState("");
  const [term, setTerm] = useState("");

  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo: Todo) =>
      todo.task.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }, [term, todoList]);

  const handleSearch = () => {
    setTerm(task);
  };

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };

    setTodoList([...todoList, newTodo]);
    setTask("");
    setTerm("");
  };

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <>
      <input
        type="text"
        placeholder="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => setTerm("")}>Clear Search</button>
      {filteredTodoList ? (
        filteredTodoList.map((item) => <p key={item.id}>{item.task}</p>)
      ) : (
        <List todoList={todoList} handleDelete={handleDelete} />
      )}
    </>
  );
}

export default App;
