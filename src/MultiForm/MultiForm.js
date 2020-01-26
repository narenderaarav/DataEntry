import React, {Component} from 'react';
import {Container, Row, Button,Table} from 'react-bootstrap';
import MultiFormInput from "./MultiFormInput"
class MultiForm extends Component{
  state ={
    inputAdd:[
      {
        camera : '',
        name : '',
        email: '',
        phone : ''
      }
    ]
  }

  handleAddData = () => {
    var arr = [...this.state.inputAdd];
    arr.push({
      camera : '',
      name : '',
      email: '',
      phone: '',
    })
    this.setState({inputAdd: arr});
  };


  render(){
    return(
      <Container>
        <Table class="table table-striped">
            <thead>
                <tr>
                  <th>Camera Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.inputAdd.map(data => (
                      <MultiFormInput/>
                  ))
                   
                }
               
              </tbody>
              <tfoot>
            <tr>
              <td colSpan="5">
                <div className="tdSubmit">
                 <Button variant="primary" onClick={this.handleAddData}>Add More</Button>
                 <Button onClick={this.handleSubmit} variant="success">Save Data</Button> 
                </div>  
              </td>  
             
            </tr>
          </tfoot>
        </Table>
      </Container>
    )
  }
}

export default MultiForm;

// https://codepen.io/wintvelt/pen/ZWjQXR?editors=0010