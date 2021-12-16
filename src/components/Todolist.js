/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
export const Todolist = () => {

    const [ data , setData] = useState([])

    
    const handleInput = (event)=>{
        if(event.key === "Enter"){
            setData([...data, event.target.value])
        }
    }

    const deleteList =(e) =>{
      const spl = data.slice((e.target.value , 1));
      setData([...data ,data.slice((e.target.value , 1))])
      console.log(spl)
    }

  return (
    <>
      <input type="text" className="w-50 m-auto form-control my-4" onKeyPress={(e)=>handleInput(e)}/>
      <table className="w-50 m-auto text-center">
        <tr className="border border-dark">
          <th className="border border-dark">list</th>
          <th className="border border-dark">delete</th>
          <th className="border border-dark">update</th>
        </tr>
        {data.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td className='border border-dark'>{listValue}</td>
              <td className='border border-dark'><button className='btn btn-dark text-light' onClick={deleteList} value={index}>{index}delete</button></td>
              <td className='border border-dark'><button className='btn btn-dark text-light'>update</button></td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
