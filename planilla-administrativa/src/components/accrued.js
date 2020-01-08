import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Preview, print } from 'react-html2pdf';

// import {printPDF} from '../outPrint/control'

import { PrintAdmin} from '../outPrint/admin/notificacion'

class Devengados extends React.Component {

   render() {
   const {objDiff}= this.props.location;
   const {objPlanillaProject} = this.props.location;
   const {objInfoUser} = this.props.location;
   const {objTablePP} = this.props.location;

   Object.keys(objDiff).forEach(element => {
      console.log('Pension proyectada: ['+ element +']'+'= '+objDiff[element]);
   });

     return (
      <div>
      <style>
        {`
            #main-crued{
                display: block;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }
        `}
        </style>
         <Preview id={'out-admin'} >
            <PrintAdmin objPlanilla={objPlanillaProject} objDataUser={objInfoUser} tableView={objTablePP}></PrintAdmin>
         </Preview>
         <div id='main-crued'>         
         <Button variant="outline-info" onClick={()=>print('pruebita', 'out-admin')}> Imprimir</Button>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link>         
         </div>    
      </div>
     )
  }
}

Devengados.propTypes = {
   objPlanillaProject: PropTypes.object,
   objDiff: PropTypes.object,
   objInfoUser: PropTypes.object,
   objTablePP: PropTypes.array
}

export default Devengados;