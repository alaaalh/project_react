/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
import React from "react";
import { useDispatch } from "react-redux";
import { increament } from './../redux/actions/increament';
import { useSelector } from 'react-redux';

export default function ChangeCounter() {

    const calc = useSelector(state => state.increament.currentCounter);
    const dispatch = useDispatch();
 
   

    const handleIncreament = ()=>{
        dispatch(increament(calc + 1))
    }
    
    const handleDecreament = () =>{
        if(calc > 0){
            dispatch(increament(calc - 1)) 
        }

    }

    return (
        <div>
            <h2>{calc}</h2>
            <button onClick={handleIncreament}>+</button>
            <button onClick={handleDecreament}>-</button>
        </div>
    )
}
