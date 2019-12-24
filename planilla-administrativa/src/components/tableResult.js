import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Form, Button, Nav, Table, Alert} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import dataJson from '../data/planilla.json'

class Resultados extends React.Component {
  render() {
     return (       
      <div class="text-center">
         <Alert variant="info" className="text-center">PLANILLA MINEDU</Alert>
         <BootstrapTable data={dataJson} striped hover>
            <TableHeaderColumn isKey dataField='COD_001'>DNI</TableHeaderColumn>
            <TableHeaderColumn dataField='COD_004'>Apellidos y Nombres</TableHeaderColumn>
            <TableHeaderColumn dataField='COD_049'>Monto</TableHeaderColumn>
         </BootstrapTable>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link>
      </div>
     )
  }

}

export default Resultados;