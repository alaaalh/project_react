import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieName({filtter}) {
  
  return (
    <div>

        <Card style={{ width: "30rem" , margin:"auto" }}>
          <Card.Img variant="top" src={filtter.image} />
          <Card.Body>
            <Card.Title>{filtter.name}</Card.Title>
            <Card.Text>{filtter.description}</Card.Text>
          </Card.Body>
        </Card>
   
    </div>
  );
}