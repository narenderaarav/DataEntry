import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemoveFormat, faTrash } from '@fortawesome/free-solid-svg-icons'


const MultiFormInput = () => {
  return (
    <>
        <tr>
          <td>
             <input  
                  type="text" 
                  name="mobile"
                  className="form-control" 
                  placeholder="Mobile Id"/>
          </td>
          <td>
             <input  
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Name"/>
          </td>
          <td>
             <input  
                  type="text" 
                  name="email"
                  className="form-control" 
                  placeholder="Email Id"/>
          </td>
          <td>
             <input  
                  type="text" 
                  name="phone"
                  className="form-control" 
                  placeholder="Phone"/>
          </td>
          <td>
            <Button variant="info" title="Edit"><FontAwesomeIcon icon={faEdit} /></Button>
            <Button className="mrgL" variant="danger" title="Delete"><FontAwesomeIcon icon={faTrash} /></Button>
          </td>
          
        </tr>
    </>
  )
}

export default MultiFormInput;