import React from "react";

export default function TodoCount({ todos }) {
    const count = todos.length;

    return <p>Total Todos: {count}</p>;
}
