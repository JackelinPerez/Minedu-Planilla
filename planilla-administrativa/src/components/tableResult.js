import React from 'react';
import {Link} from "react-router-dom";

/*Table */
import {Form, Button, Nav, Table, Alert} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import dataJson from '../data/planilla.json'
import dataCodTable from '../data/CodPlanilla.json'
import PropTypes from 'prop-types';

const getCodRules = (codRules) =>{
   return Object.keys(dataCodTable[0]).reduce((ele1,eleMain)=>{
      if(eleMain === codRules) ele1 = dataCodTable[0][eleMain];
      return ele1;
   },'')
}

const getPlanilla = (arrayObjData, codDni, dataDni) =>{
   const objUserPlanilla = [];
   const objUser = arrayObjData.filter((ele)=> ele[codDni] === dataDni);
   Object.keys(objUser[0]).forEach((ele)=>{
      objUserPlanilla.push({
         code: getCodRules(ele),
         value: objUser[0][ele]
      })
   })
   return objUserPlanilla;
}


class Resultados extends React.Component {

  render() {
   const {dni}= this.props.location;
   const userPlanilla = getPlanilla(dataJson,'COD_001',dni);
     return (       
      <div >
         <Alert variant="info">PLANILLA MINEDU</Alert>
         <BootstrapTable data={userPlanilla} striped hover>
            <TableHeaderColumn isKey dataField='code' >Descripcion</TableHeaderColumn>
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