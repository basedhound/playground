import { useState } from "react";

// Could replace "string" by "T" for generic type
const useTodos = (): [string[], (value: string) => void] => {
  // Typer useState
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (value: string) => {
    setTodos((curr) => [...curr, value]);
  };
  return [todos, addTodo];
};

export const Todos = () => {
  const [todos, addTodo] = useTodos();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget
      .elements as typeof e.currentTarget.elements & {
      todo?: HTMLInputElement;
    };

    const todoValue = (elements.todo as HTMLInputElement).value;
    console.log(elements);

    if (!todoValue) {
      return;
    }

    // setTodos(curr => [...curr, todoValue]);
    addTodo(todoValue);
    console.log(elements);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input name="todo" />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </div>
  );
};
