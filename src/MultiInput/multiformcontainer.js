import React, { Component } from 'react';
import Result from './Result'
import InputRow from "./inputrow"
import {Container, Row, Col, Button,Table} from 'react-bootstrap';
// import { CSVLink, CSVDownload } from "react-csv";
// import CSVReader from './CSVReader'
// const csvData = [
//   ["CameraId", "name", "email", "phone"],
//   ["011", "Nokia", "ah@smthing.co.com","988989898"],
//   ["012", "Kodak", "rl@smthing.co.com","988989898"],
//   ["013", "Sony", "ymin@cocococo.com","988989898"]
// ];

export default class MultiForm extends Component {
  state = {
    inputAdd: [
      {
        id:new Date().getTime()+"",
        camera : '',
        name : '',
        email: '',
        phone: '',
        edit:true,
      }
    ]
  }

  handleInputChange = (event) => {
    let id = event.target.getAttribute("data-id");
    let key = event.target.name;
    let value = event.target.value;
    // first clone of array
    let arr = [...this.state.inputAdd];
    let index = arr.findIndex(data => {
      return data.id === id;
    })
    // console.log('index', index)
    // for(let i = 0; i < arr.length; i++){
    //   if(arr[i].id === id){
    //     console.log(i);
    //     break;
    //   }
    // }


    // clone of object inside the array
    let dataObject = {...arr[index]};
    dataObject[key] = value;

    arr[index] = dataObject

    this.setState({inputAdd:arr})



  }

  handleSubmit = evt => {
    console.log(this.state);
    var arr = this.state.inputAdd.map(data => {
      return {...data, edit:false}
    });
    this.setState({inputAdd: arr});
  };

  handleAddData = () => {
    var arr = [...this.state.inputAdd];
    arr.push({
      id: new Date().getTime()+"",
      camera : '',
      name : '',
      email: '',
      phone: '',
      edit: true
    })

    this.setState({inputAdd: arr});
  };
  
  handleEdit = (event) => {
    let id = event.target.getAttribute("data-id");
    // first clone of array
    let arr = [...this.state.inputAdd];

    let index = arr.findIndex(data => {
      return data.id === id;
    })

    let dataObject = {...arr[index]};
    dataObject.edit = true;

    arr[index] = dataObject

    this.setState({inputAdd:arr})
    
  }
  
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inputAdd.map(data => (
              <InputRow {...data} key={data.id}
                        changeHandler={this.handleInputChange}
                        handleEdit={this.handleEdit}/>
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
        {/* <CSVLink data={csvData}>Download me</CSVLink>; */}
        {/* <CSVDownload data={csvData} target="_blank" />; */}

      </Container>
  </section>
    )
  }
}