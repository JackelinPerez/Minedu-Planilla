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
   Object.keys(objDiff).forEach(element => {
      console.log('Pension proyectada: ['+ element +']'+'= '+objDiff[element]);
   });

     return (
      <div>
         <Preview id={'out-admin'} >
            <PrintAdmin></PrintAdmin>
         </Preview>
         <button onClick={()=>print('pruebita', 'out-admin')}> Imprimete!</button>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link>
      </div>
     )
  }
}

Devengados.propTypes = {
   objPlanillaProject: PropTypes.object,
   objDiff: PropTypes.object
}

export default Devengados;