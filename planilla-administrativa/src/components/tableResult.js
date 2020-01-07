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

/*Convirtiendo de html to pdf */
import { Preview, print } from 'react-html2pdf';

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
        <div>
         <Preview id={'out-admins'} style={{width: "50%", height: "50%"}}>
            <Jumbotron>
               <h1>¡Bienvenido, {userPlanillaObject['COD-007']}!</h1><br/>
               <p><strong>DNI: </strong>{userPlanillaObject['COD-001']}</p>
               <p><strong>Tiempo de servicio: </strong>{userPlanillaObject['COD-053']} años y {userPlanillaObject['COD-054']} meses</p>
               <p><strong>Categoria: </strong>{userPlanillaObject['COD-055']}</p>
            </Jumbotron>
            <Row>
               <Col>
               <Alert variant="info">Calculo devengados</Alert>
               <BootstrapTable data={this.userPlanilla} id='01' trStyle={this.rowStyleFormat}>
                  <TableHeaderColumn width='200' dataField='code' isKey>Descripcion</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valuePlanilla'>Planilla</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valueProject'>Proyectada</TableHeaderColumn>
               </BootstrapTable>
               </Col>
            </Row>
         </Preview>   
         <Link 
            to={{
               pathname: "/devengados",
               objPlanillaProject: userPlanillaObjectProject,
               objDiff: objetResult
            }}>
            <Button variant="outline-info">Emitir Notificación</Button>
         </Link>
         <button onClick={()=>print('pruebita', 'out-admins')}> Imprimete!</button>
        </div>
     )
  }
}

Resultados.propTypes = {
   dni: PropTypes.string
}

export default Resultados;