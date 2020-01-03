import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert, Form} from 'react-bootstrap';

import dataCuadroComparativo from '../data/CuadroComparativo.json';
import dataPlanilla from '../data/Planilla.json';
import {rulesBusinnnes} from '../businessRules/admin/control'

/*Pruebando todos los conceptos de pago */
import {arrayAllRules} from '../businessRules/admin/allRulesP';
import { getAllConceptAdmin} from '../businessRules/constrolers';

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
      <div>
         <Alert variant="info" >Hello Katapulta</Alert>
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