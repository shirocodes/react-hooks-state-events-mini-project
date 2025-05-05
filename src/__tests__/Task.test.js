import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  const task = { text: "text!", category: "category!" };

  render(<Task task={task} onDeleteTask={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { text: "text!", category: "category!" };

  render(<Task task={task} onDeleteTask={() => {}} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});


test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  
  // Find the "Buy rice" task
  const task = screen.queryByText(/Buy rice/);
  expect(task).toBeInTheDocument();
  
  // Find the delete button associated with this task
  const deleteButton = task.parentElement.querySelector("button");

  // Simulate the click on the delete button
  fireEvent.click(deleteButton);

  // Ensure the task is no longer in the document
  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
