import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function MovieDetails({details}) {
  return (
    <div>
      
      <Card style={{ width: "30rem" , margin:"auto" }}>
        <Card.Img variant="top" src={details.image} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>
              {details.description}
          </Card.Text>
        </Card.Body>
      </Card>
     
    </div>
  );
}
