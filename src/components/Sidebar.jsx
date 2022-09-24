import React from "react";
import { ListGroup } from "react-bootstrap";

const rooms = ["Math", "Programming", "Computer Science"];

const Sidebar = () => {
  return (
    <div style={{ padding: "10px 0" }}>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms?.map((room, index) => (
          <ListGroup.Item key={index}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </div>
  );
};

export default Sidebar;