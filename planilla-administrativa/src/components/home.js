import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert, Form} from 'react-bootstrap';
import {getObjectTable} from '../functions/tableSearch';

import dataCuadroComparativo from '../data/CuadroComparativo.json';
import dataPlanilla from '../data/Planilla.json';
import {rulesBusinnnes} from '../businessRules/admin/rules'
import {fcl} from '../businessRules/admin/FCL';

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
      // console.log('Resultado: '+ getObjectTable(dataCuadroComparativo, 'COD-CP-01', 'F-8')['COD-CP-02']);
      // console.log('rules_1: '+ rulesBusinnnes(dataPlanilla, 'COD-012', 'COD-001','6023682', ''));
      // console.log('rules_2: '+ rulesBusinnnes(dataPlanilla, 'COD-017', 'COD-001','6023682', ''));
      // console.log('rules_3: '+ rulesBusinnnes(dataPlanilla, 'COD-027', 'COD-001','6023682', dataCuadroComparativo));
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