import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert, Form} from 'react-bootstrap';

class Hello extends React.Component {
   constructor(props) {
      super(props);
      this.state={formDNI:0}
   }

   myChangeHandler = (event) => {
      let id = event.target.id;
      let val = event.target.value;
      let err = '';
      this.setState({errormessage: err});
      this.setState({[id]: val});
   }
  
   handleSubmit = () =>{
   }

    render() {
     return (    
      <div id='bodydy'>
      <style>
      {`
            #bodydy{
               text-align: center;
               margin-left: auto;
               margin-right: auto;
               padding: 0% 5%;
            }
      `}
      </style>          
         <Alert variant="info" >
            <h1>Minedu</h1>
         </Alert>
         <Form onSubmit={this.handleSubmit} onChange={this.myChangeHandler} >
            <Form.Group controlId="formDNI" >
               <Form.Control type="number" placeholder="Ingrese su DNI" />
            </Form.Group>
            <Link   
            to={{
               pathname: "/resultados",
               dni: this.state.formDNI
            }}
            >
            <Button variant="danger" type="submit"> Submit </Button>
            </Link>
         </Form>    
      </div>
     )
  }
}

 
export default Hello;