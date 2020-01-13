import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Preview, print } from 'react-html2pdf';

import { NotifImProcedente} from '../../outPrint/admin/notificacion-improcedente';
import { NotifProcedente} from '../../outPrint/admin/notificacion-procedente';

import Background from '../../image/impresora.png';
import '../../css/accrued-style.css'

const resultPP = (objPP, objP, objInfoUser) =>{
   return (parseFloat(objInfoUser["COD-049"]) === objP["COD-049"]) ? 
   <NotifImProcedente objPlanilla={objP} objDataUser={objInfoUser} tableView={objPP}></NotifImProcedente>:
   <NotifProcedente objPlanilla={objP} objDataUser={objInfoUser} tableView={objPP}></NotifProcedente>;
}

class Devengados extends React.Component {

   render() {
   const {objDiff} = this.props.location;
   const {objPlanillaProject} = this.props.location;
   const {objInfoUser} = this.props.location;
   const {objTablePP} = this.props.location;
     return (
      <div className='main-crued'>
         <Preview id={'out-admin'} >
            {resultPP(objTablePP, objPlanillaProject, objInfoUser)}
         </Preview>
         <div className= 'img-button'>
         <img src={Background} alt="Logo" /><br/>
         <Button variant="outline-info" onClick={()=>print('pruebita', 'out-admin')}> Imprimir</Button><br/><br/>
         <Link to="/"><Button variant="outline-dark">Salir</Button></Link>         
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