import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Button, Row, Col, Alert} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

/*data json */
import dataPlanilla from '../data/Planilla.json';
import dataCodPlanilla from '../data/Cod_Planilla.json';
import dataCuadroComparativo from '../data/CuadroComparativo.json';

/*conceptos totales de planilla */
import {arrayAllRules, arrayIndexCss} from '../businessRules/admin/globals';
import { getAllConceptAdmin} from '../businessRules/constrolers';

/*buscando planilla*/
import {getFormtPlanilla, getObjectTable, ordenConceptPlanilla, getIndexCuadroComparativo} from '../functions/tableSearch';

function rowStyleFormat(row, rowIdx) {
   return { color: rowIdx % 2 === 0 ? '#FF00F7' : '#00F7FF' };
 }

class Resultados extends React.Component {

  render() {
   const {dni}= this.props.location;
   const userPlanillaObject = getObjectTable(dataPlanilla, 'COD-001', dni);
   const userOrdenPlanilla = ordenConceptPlanilla(arrayAllRules, userPlanillaObject);
   const userPlanilla = getFormtPlanilla(userOrdenPlanilla, dataCodPlanilla);
   const userPlanillaObjectProject = getAllConceptAdmin(dataPlanilla, arrayAllRules, 'COD-001',dni, dataCuadroComparativo);
   const userPlanillaProject = getFormtPlanilla(userPlanillaObjectProject, dataCodPlanilla);

   const pruebita = getIndexCuadroComparativo(userPlanilla, userPlanillaProject);

   console.log('diferencias: '+pruebita + '; longitud='+pruebita.length);
   

     return (
        <div>
         <Row>
            <Col>
            <Alert variant="info">Planilla Minedu</Alert>
            <BootstrapTable data={userPlanilla} id='01' trStyle={rowStyleFormat}>
               <TableHeaderColumn isKey dataField='code'>Descripcion</TableHeaderColumn>
               <TableHeaderColumn dataField='value'>Valor</TableHeaderColumn>
            </BootstrapTable>
            </Col>
            <Col>
            <Alert variant="info">Pension Proyectada </Alert>
            <BootstrapTable data={userPlanillaProject}  id='02'>
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