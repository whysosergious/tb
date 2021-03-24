/**
 * Board Column
 */
import React, { useEffect } from "react";
import "./Column.css";

// logic
import { useCustomHook, _gc } from "logic/gc";

// components
import Card from "Tab/Card";
import TaskForm from "Modals/TaskForm";

let modals = [];
let count = 0;
const Column = ({ title }) => {
  let comp = title.replace(" ", "");

  const [state, setState] = useCustomHook([], comp);

  const handleCloseModal = () => {
    modals = [];
    renderComponent();
  };
  const handleAddCard = () => {
    let stamp = Date.now() + count++;

    modals = [
      <TaskForm
        key={`modal${stamp}`}
        comp={comp}
        stamp={`${stamp}`}
        close={handleCloseModal}
      />,
    ];
    renderComponent();
  };
  const handleViewCard = (title, desc, i, image) => {
    modals = [
      <TaskForm
        key={`modal${Date.now()}`}
        index={i}
        comp={comp}
        title={title}
        image={image}
        desc={desc}
        close={handleCloseModal}
      />,
    ];
    renderComponent();
  };

  const renderComponent = () => {
    setState(Date.now());
  };

  useEffect(() => {
    _gc[comp].dispatch = renderComponent;
  }, []);

  let cards = _gc[comp].cards.map((card, i) => {
    const { stamp, title, image, desc, comp } = card;
    return (
      <Card
        key={stamp}
        index={i}
        title={title || "Untitled"}
        desc={desc || "No description"}
        image={image}
        column={comp}
        compkey={stamp}
        clicked={handleViewCard}
      />
    );
  });

  return (
    <div className="Column">
      <div className="Column-Title" data-column={comp} data-key={comp}>
        <h1>{title}</h1>
        <h2 onClick={handleAddCard}>+</h2>
      </div>
      {cards}
      <div className="Column-Drop" data-column={comp} data-key="last">
        {modals}
      </div>
    </div>
  );
};

export default Column;
