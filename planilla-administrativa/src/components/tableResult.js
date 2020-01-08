import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Button, Row, Col, Alert, Jumbotron} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

/*data json */
import dataPlanilla from '../data/Planilla.json';
import dataCodPlanilla from '../data/Cod_Planilla.json';
import dataCuadroComparativo from '../data/CuadroComparativo.json';

/*conceptos totales de planilla */
import {arrayAllRules} from '../businessRules/admin/globals';
import { getAllConceptAdmin} from '../businessRules/constrolers';

/*buscando planilla*/
import {getFormtPlanilla, getObjectTable, ordenConceptPlanilla} from '../functions/tableSearch';


const matchResult = (arrayConcepts, objPlanillaReal, objPlanillaProject) =>{
   return arrayConcepts.reduce((acumObject, concept)=>{
      if(objPlanillaReal[concept] !== objPlanillaProject[concept]){
         acumObject = {
            ...acumObject,
            [concept]: objPlanillaProject[concept]
         }
      }
      return acumObject;
   },{})
}

export class Resultados extends React.Component {

   userPlanilla = [];

  rowStyleFormat = (row, rowIdx) =>{
   return { 
      backgroundColor: this.userPlanilla[rowIdx].valuePlanilla !== this.userPlanilla[rowIdx].valueProject ? '#FFF700' : 'default',
   };
  }

  render() {
   const {dni}= this.props.location;
   const userPlanillaObject = getObjectTable(dataPlanilla, 'COD-001', dni);
   const userOrdenPlanilla = ordenConceptPlanilla(arrayAllRules, userPlanillaObject);
   const userPlanillaObjectProject = getAllConceptAdmin(dataPlanilla, arrayAllRules, 'COD-001',dni, dataCuadroComparativo);

   this.userPlanilla = getFormtPlanilla(userOrdenPlanilla, userPlanillaObjectProject, dataCodPlanilla);

   const objetResult = matchResult(arrayAllRules, userOrdenPlanilla, userPlanillaObjectProject);

     return (
        <div id= 'bodydy'>
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
            <Jumbotron>
               <h1>¡Bienvenido, {userPlanillaObject['COD-007']}!</h1><br/>
               <p><strong>DNI: </strong>{userPlanillaObject['COD-001']}</p>
               <p><strong>Tiempo de servicio: </strong>{userPlanillaObject['COD-053']} años y {userPlanillaObject['COD-054']} meses</p>
               <p><strong>Categoria: </strong>{userPlanillaObject['COD-055']}</p>
            </Jumbotron>
            <Row>
               <Col>
               <Alert variant="info">Recalculo de Pensión</Alert>
               <BootstrapTable data={this.userPlanilla} id='table-result' trStyle={this.rowStyleFormat}>
                  <TableHeaderColumn width='200' dataField='code' isKey>Descripcion</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valuePlanilla'>Pension Actual</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valueProject'>Pension Recalculada</TableHeaderColumn>
               </BootstrapTable>
               </Col>
            </Row>
         <Link 
            to={{
               pathname: "/devengados",
               objPlanillaProject: userPlanillaObjectProject,
               objTablePP: this.userPlanilla,
               objDiff: objetResult,
               objInfoUser: userPlanillaObject,
            }}>
            <Button variant="outline-info">Emitir Notificación</Button>
         </Link>
        </div>
     )
  }
}

Resultados.propTypes = {
   dni: PropTypes.string
}

export default Resultados;