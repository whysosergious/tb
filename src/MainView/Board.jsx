/**
 * Board view
 */
import React from "react";
import "./Board.css";

// components
import Column from "./Column";

const Board = () => {
  return (
    <section>
      <Column title="Backlog" />
      <Column title="To do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </section>
  );
};

export default Board;
