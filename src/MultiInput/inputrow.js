import React from "react"
import { Button } from 'react-bootstrap';

const inputRow = (props) => {
  return (
    <>
  
    <tr>
      <td>
        <input  onChange={props.changeHandler} 
                type="text" className="form-control"
                name="camera"
                data-id={props.id}
                value={props.csvData}
                disabled={!props.edit}
                placeholder="Camera Id"/>
      </td>
      <td>
        <input onChange={props.changeHandler} 
               type="text" className="form-control" 
               name="name"
               data-id={props.id}
               value={props.name}
               disabled={!props.edit}
               placeholder="Name"/>
      </td>
      <td>
        <input onChange={props.changeHandler} 
               type="text" className="form-control"
               name="email"
               data-id={props.id}
               value={props.email}
               disabled={!props.edit}
               placeholder="Email"/>
      </td>
      <td>
        <input onChange={props.changeHandler} 
               type="text" className="form-control" 
               name="phone"
               value={props.phone}
               data-id={props.id}
               disabled={!props.edit}
               placeholder="Phone No"/>
      </td>
      <td>
        <Button variant="primary" 
                onClick={props.handleEdit}
                data-id={props.id}>Edit</Button> 
        {/* <Button variant="primary" 
                onClick={props.handleDelete}
                data-id={props.id}>Delete</Button> */}
      </td>              
    </tr>
    </>
  )
}

export default inputRow