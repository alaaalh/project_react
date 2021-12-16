import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartAction } from "../../redux/actions/cart";

export default function MovieCard({ movies }) {

  const carts = useSelector(state => state.carts.currentGoots);
  const dispatch = useDispatch();
  
  const handleAddToCart = (e)=>{
    dispatch(cartAction(carts + 1))
    localStorage.setItem('data' , movies.id)
    console.log(localStorage.getItem('data'))
  }

  return (
    <div>
      {/* <Link to={`/two/${movies.id}`}> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movies.image} />
          <Card.Body>
            <Card.Title>{movies.name}</Card.Title>
            <Card.Text>{movies.description}</Card.Text>
            <Button variant="primary" onClick={handleAddToCart}>add to cart</Button>
         </Card.Body>
        </Card>
      {/* </Link> */}
    </div>
  );
}
