import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState([
    { id: 1, value: "homework", checked: false },
    { id: 2, value: "home clean", checked: false },
    { id: 3, value: "food", checked: false },
  ]);
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setTodo([
            ...todo,
            {
              id: todo.length != 0 ? todo[todo.length - 1].id + 1 : 1,
              value: input,
              checked: false,
            },
          ]);
          setInput("");
        }}
      >
        add
      </button>
      <ul>
        {todo.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.checked}
              onClick={() => {
                setTodo(
                  todo.map((row) => {
                    if (row.id == item.id) {
                      return { ...row, checked: !row.checked };
                    } else return row;
                  }),
                );
              }}
            />
            <span
              style={item.checked ? { textDecoration: "line-through" } : {}}
            >
              {item.value}
            </span>
            <button
              onClick={() => {
                setTodo(
                  todo.filter((row) => {
                    if (row.id == item.id && row.checked) {
                      return false;
                    } else return true;
                  }),
                );
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

