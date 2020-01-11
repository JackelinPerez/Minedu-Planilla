import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Button, Row, Col, Alert, Jumbotron} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

/*data json */
import dataPlanilla from '../../data/Planilla.json';
import dataCodPlanilla from '../../data/Cod_Planilla.json';
import dataCuadroComparativo from '../../data/CuadroComparativo.json';

/*conceptos totales de planilla */
import {arrayAllRules, arrayAllRulesV} from '../../utils/admin/globals';
import { getAllConceptAdmin} from '../../businessRules/constrolers';

/*buscando planilla*/
import {getFormtPlanilla, getObjectTable, ordenConceptPlanilla} from '../../functions/admin/tableSearch';

import '../../css/tableResult-style.css'

const resultNotif = (key) =>{
   let result = {};

   switch (key) {
      case 0:
         result.value = 'Se verificó que la pensión que viene recibiendo es la CORRECTA';
         result.style = 'warning';
         break;
   
      default:
         result.value = 'Se verifico que el calculo es INCORRECTO. Puede observarlo en cada concepto resaltado. Se procedera a regularizar su pago ';
         result.style = 'danger';
         break;
   }
   return result;
}

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

const artificioView = (objPlanillaReal, objPlanillaProject) =>{
   let objViewPlanillaP = {...objPlanillaProject};
   const sumPensionBasica = objPlanillaProject['COD-027'] + objPlanillaProject['COD-XXX'];
   if(objPlanillaReal['COD-027'] === sumPensionBasica) {
      objViewPlanillaP['COD-027'] = sumPensionBasica;
   }
   return objViewPlanillaP;
}

export class Resultados extends React.Component {

   userPlanilla = [];

  rowStyleFormat = (row, rowIdx) =>{
   return { 
      backgroundColor: this.userPlanilla[rowIdx].valuePlanilla !== this.userPlanilla[rowIdx].valueProject ? '#FFF700' : 'default',
      // fontWeight: 'bold',
   };
  }

  render() {
   const {dni}= this.props.location;
   const userPlanillaObject = getObjectTable(dataPlanilla, 'COD-001', dni);
   const userOrdenPlanilla = ordenConceptPlanilla(arrayAllRules, userPlanillaObject);
   const userPlanillaObjectProject = getAllConceptAdmin(dataPlanilla, arrayAllRules, 'COD-001',dni, dataCuadroComparativo);

   const userOrdenPlanillaV = ordenConceptPlanilla(arrayAllRulesV, userPlanillaObject);
   const userPlanillaObjectProjectV = artificioView(userOrdenPlanilla, userPlanillaObjectProject);
   const userPlanillaObjectProjectVV = ordenConceptPlanilla(arrayAllRulesV, userPlanillaObjectProjectV);

   this.userPlanilla = getFormtPlanilla(userOrdenPlanillaV, userPlanillaObjectProjectVV, dataCodPlanilla);

   const objetResult = matchResult(arrayAllRulesV, userOrdenPlanillaV, userPlanillaObjectProjectVV);
   const resultProyectada = resultNotif(Object.keys(objetResult).length);

   console.log('Hubo recalculo= '+ Object.keys(objetResult).length);
   Object.keys(objetResult).forEach(element => {
      console.log('['+element+']'+'= '+ objetResult[element]);
   });
     return (
        <div className="table-result">     
               <section className = "header">
                  <h1 className = "headerH">¡Bienvenido, {userPlanillaObject['COD-007']}!</h1><br/>
                  <div className = "dataUser">
                     <p><strong>DNI: </strong>{userPlanillaObject['COD-001']}</p>
                     <p><strong>Tiempo de servicio: </strong>{userPlanillaObject['COD-053']} años y {userPlanillaObject['COD-054']} meses</p>
                     <p><strong>Categoría: </strong>{userPlanillaObject['COD-055']}</p>
                  </div>
               </section>
               <div className ="titleR">Recálculo de Pensión</div>
               <Alert variant={resultProyectada.style}>{resultProyectada.value}</Alert>
               <BootstrapTable data={this.userPlanilla} id='table-result' trStyle={this.rowStyleFormat} variant="tableS">
                  <TableHeaderColumn width='200' dataField='code' isKey>Descripción</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valuePlanilla'>Pensión Actual</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valueProject'>Pensión Recalculada</TableHeaderColumn>
               </BootstrapTable>
         <Link 
            to={{
               pathname: "/devengados",
               objPlanillaProject: userPlanillaObjectProjectVV,
               objTablePP: this.userPlanilla,
               objDiff: objetResult,
               objInfoUser: userPlanillaObject,
            }}>
            <Button variant="outline-info" variant="boton">Emitir Notificación</Button>
         </Link>
        </div>
     )
  }
}

Resultados.propTypes = {
   dni: PropTypes.string
}

export default Resultados;