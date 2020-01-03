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
import {arrayAllRules} from '../businessRules/admin/allRulesP';
import { getAllConceptAdmin} from '../businessRules/constrolers';

/*buscando planilla*/
import {getFormtPlanilla, getObjectTable} from '../functions/tableSearch';

class Resultados extends React.Component {

  render() {
   const {dni}= this.props.location;
   const userPlanillaObject = getObjectTable(dataPlanilla, 'COD-001', dni);
   const userPlanilla = getFormtPlanilla(userPlanillaObject, dataCodPlanilla,'COD-001',dni);
   const userPlanillaObjectProject = getAllConceptAdmin(dataPlanilla, arrayAllRules, 'COD-001',dni, dataCuadroComparativo);
   const userPlanillaProject = getFormtPlanilla(userPlanillaObjectProject, dataCodPlanilla,'COD-001',dni);
     return (
        <div>
         <Row>
            <Col>
            <Alert variant="info">Planilla Minedu</Alert>
            <BootstrapTable data={userPlanilla} striped hover id='01'>
               <TableHeaderColumn isKey dataField='code'>Descripcion</TableHeaderColumn>
               <TableHeaderColumn dataField='value' >Valor</TableHeaderColumn>
            </BootstrapTable>
            </Col>
            <Col>
            <Alert variant="info">Pension Proyectada </Alert>
            <BootstrapTable data={userPlanillaProject} striped hover id='02'>
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