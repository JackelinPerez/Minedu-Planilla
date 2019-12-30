import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Form, Button, Nav, Table, Alert} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import dataPlanilla from '../data/Planilla.json';
import dataCodPlanilla from '../data/Cod_Planilla.json';
// import dataCuadroComparativo from '../data/CuadroComparativo.json';
// import dataCodCuadroComparativo from '../data/Cod_CuadroComparativo.json';
import PropTypes from 'prop-types';

/*buscando planilla*/
import {getFormtPlanilla} from '../functions/tableSearch';

class Resultados extends React.Component {

  render() {
   const {dni}= this.props.location;
   const userPlanilla = getFormtPlanilla(dataPlanilla,dataCodPlanilla,'COD-001',dni);
     return (       
      <div >
         <Alert variant="info">PLANILLA MINEDU</Alert>
         <BootstrapTable data={userPlanilla} striped hover>
            <TableHeaderColumn isKey dataField='code'>Descripcion</TableHeaderColumn>
            <TableHeaderColumn dataField='value' >Valor</TableHeaderColumn>
         </BootstrapTable>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link>
      </div>
     )
  }
}

Resultados.propTypes = {
   dni: PropTypes.string
}

export default Resultados;