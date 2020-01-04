import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Button, Row, Col, Alert, Jumbotron} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

/*data json */
import dataPlanilla from '../data/planilla.json';
import dataCodPlanilla from '../data/Cod_Planilla.json';
import dataCuadroComparativo from '../data/CuadroComparativo.json';

/*conceptos totales de planilla */
import {arrayAllRules} from '../businessRules/admin/globals';
import { getAllConceptAdmin} from '../businessRules/constrolers';

/*buscando planilla*/
import {getFormtPlanilla, getObjectTable, ordenConceptPlanilla} from '../functions/tableSearch';


class Resultados extends React.Component {

   userPlanilla = [];
   userPlanillaProject = [];

  rowStyleFormat = (row, rowIdx) =>{
   return { color: this.userPlanilla[rowIdx].value !== this.userPlanillaProject[rowIdx].value ? '#FF00F7' : '#000000' };
  }

  render() {
   const {dni}= this.props.location;
   const userPlanillaObject = getObjectTable(dataPlanilla, 'COD-001', dni);
   const userOrdenPlanilla = ordenConceptPlanilla(arrayAllRules, userPlanillaObject);
   this.userPlanilla = getFormtPlanilla(userOrdenPlanilla, dataCodPlanilla);
   const userPlanillaObjectProject = getAllConceptAdmin(dataPlanilla, arrayAllRules, 'COD-001',dni, dataCuadroComparativo);
   this.userPlanillaProject = getFormtPlanilla(userPlanillaObjectProject, dataCodPlanilla);

     return (
        <div>
         <Jumbotron>
            <h1>Bienvenido, {userPlanillaObject['COD-007']}</h1>
            <p><strong>DNI: </strong>{userPlanillaObject['COD-001']}</p>
            <p><strong>Inicio Pension: </strong>{userPlanillaObject['COD-051']}</p>
            <p><strong>Fecha de nacimiento: </strong>{userPlanillaObject['COD-052']}</p>
            <p><strong>Tiempo de servicio: </strong>{userPlanillaObject['COD-053']} años y {userPlanillaObject['COD-054']} meses</p>
            <p><strong>Categoria: </strong>{userPlanillaObject['COD-055']}</p>
         </Jumbotron>
         <Row>
            <Col>
            <Alert variant="info">Planilla Minedu</Alert>
            <BootstrapTable data={this.userPlanilla} id='01'>
               <TableHeaderColumn isKey dataField='code'>Descripcion</TableHeaderColumn>
               <TableHeaderColumn dataField='value'>Valor</TableHeaderColumn>
            </BootstrapTable>
            </Col>
            <Col>
            <Alert variant="info">Pension Proyectada </Alert>
            <BootstrapTable data={this.userPlanillaProject} trStyle={this.rowStyleFormat} id='02'>
               <TableHeaderColumn isKey dataField='code'>Descripcion</TableHeaderColumn>
               <TableHeaderColumn dataField='value' >Valor</TableHeaderColumn>
            </BootstrapTable>
            </Col>           
         </Row>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link> 
        </div>
     )
  }
}

Resultados.propTypes = {
   dni: PropTypes.string
}

export default Resultados;