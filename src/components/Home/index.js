import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./home.css";
const Home = () => {
  const [todoAddress, setTodoAddress] = useState("");
  const [todoDecription, setTodoDecription] = useState("");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  // const array = JSON.parse(localStorage.getItem("todos"));
  const addTodo = () => {
    setTodo((todo.address = todoAddress), (todo.description = todoDecription));
    setTodos(todos.push(todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const deleteTodo = () => {
    localStorage.removeItem("address");
    localStorage.removeItem("description");
  };
  return (
    <>
      <div>
        <div>
          <img src="https://us.123rf.com/450wm/tatus/tatus1606/tatus160600036/60238732-welcome-text-in-colorful-polka-dot-design-with-balloons.jpg?ver=6" />
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Todo address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter todo address"
                onChange={(e) => {
                  setTodoAddress(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="todo description"
                onChange={(e) => {
                  setTodoDecription(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={addTodo}>
              Add
            </Button>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{todoAddress}</Card.Title>
                <Card.Text>{todoDecription}</Card.Text>
                <Button variant="primary" type="submit" onClick={deleteTodo}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
