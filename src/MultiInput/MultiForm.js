import React, { Component } from 'react';
import Result from './Result'
import {Container, Row, Col, Button,Table} from 'react-bootstrap';


//
//TODO: 
// 1: API call for fetching exiting data "GET"
// 2: API call for sending modified and new Data "POST" and it should return success status.

class MultiForm extends Component{
    state = {
    inputAdd: [
      {
        
        camera : '',
        name : '',
        email: '',
        phone: ''
      }
    ] 
  }

  

  handleAddData = () => {
    this.setState({
      inputAdd: this.state
                    .inputAdd.concat([{ 
                     
                      camera : '',
                      name : '',
                      email: '',
                      phone: '' }])
    });
  };

  handleShareholderCameraChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, camera: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleShareholderPhoneChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, phone: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleShareholderEmailChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, email: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleSubmit = evt => {
    console.log(this.state);
  };
  handleRemoveData = idx => () => {
    this.setState({
      inputAdd: this.state.inputAdd.filter((s, sidx) => idx !== sidx)
    });
  };
  render(){
    return(

    <section className="middlePart">
        <Container>
          <Table striped bordered>
            <thead>
              <tr>
                
                <th>Camera Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th></th>
              
              </tr>
            </thead>
            <tbody>
             
              {this.state.inputAdd.map((data, id) => (
                  <tr>
                  <td><input  onChange={this.handleShareholderCameraChange(id)} type="text" class="form-control" placeholder="Camera Id"/></td>
                  <td><input onChange={this.handleShareholderNameChange(id)} type="text" class="form-control" placeholder="Name"/></td>
                  <td><input onChange={this.handleShareholderEmailChange(id)} type="text" class="form-control" placeholder="Email"/></td>
                  <td><input onChange={this. handleShareholderPhoneChange(id)} type="text" class="form-control" placeholder="Phone No"/></td>
                  <td><Button variant="primary">Edit</Button></td> 
                  <td><Button variant="primary" onClick={this.handleRemoveData(id)}>Delete</Button></td>                
                </tr>
        ))}
              

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

          {/* <Result/> */}

        </Container>
    </section>
  )
}
}
// https://www.youtube.com/watch?v=zifE_wnwnJ8
//https://codepen.io/benhoyle/pen/vyygYN?editors=1010
export default MultiForm;