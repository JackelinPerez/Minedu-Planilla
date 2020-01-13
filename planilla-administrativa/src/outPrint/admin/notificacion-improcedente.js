import React from 'react';
import PropTypes from 'prop-types';
import {getDay} from '../../utils/utils';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import '../../css/not-proced.css'
export class NotifImProcedente extends React.Component {
    render(){
        const dataUser= this.props.objDataUser;
        const dataProyecPlanilla = this.props.tableView;
        const day= getDay();        
        return(
            <div className='not-proc'>
            <div>
                <p className= 'headerN'><strong><u>NOTIFICACIÓN</u></strong></p>
                <p><strong>Fecha:</strong> {day} </p>
                <p><strong>Señor(a):</strong> {dataUser['COD-004']}</p>
                <p><strong>Expediente Nº: </strong></p>
                <p><strong>Regimen: </strong> {dataUser['COD-055']}</p>
                <p><strong>Entidad: </strong> UNIDADES EJECUTORAS DEL MINISTERIO DE EDUCACIÓN</p>
            </div>
            <section>
                <p>En atención a su solicitud presentada el <strong>31 octubre de 2019</strong>, le manifestamos lo siguiente:</p>
                <p>Al efectuar la revisión de su expediente administrativo se verificó que la pensión que viene recibiendo es la correcta de conformidad a la <strong>Resolución</strong> la cual le otorga la pensión <strong>Viudez / Cesantía</strong> bajo el régimen del Decreto Ley N° 20530.</p>
                <p>Asimismo, se ha efectuado la revisión a los parámetros de su pensión, concluyéndose que el monto que viene percibiendo, es el correcto:</p>
            </section>

            <BootstrapTable data={dataProyecPlanilla} className='divToPrint'>
                <TableHeaderColumn width='200' dataField='code' isKey>Descripcion</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='valueProject'>Pension Recalculada</TableHeaderColumn>
            </BootstrapTable>

            <section>
                <p>En tal sentido, la pensión mensual que viene percibiendo está conforme a Ley.</p>
                <p>Atentamente,</p>
            </section>   
            </div>            
        )
    }
}

NotifImProcedente.propTypes ={
    objPlanilla: PropTypes.object,
    objDataUser: PropTypes.object,
    tableView: PropTypes.array
}

export default NotifImProcedente;