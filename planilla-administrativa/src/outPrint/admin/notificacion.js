import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {getDay} from '../../functions/utils';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class PrintAdmin extends React.Component {

    render(){
        const dataUser= this.props.objDataUser;
        const dataProyecPlanilla = this.props.tableView;
        const day= getDay();
        
        return(
        <div id='bodydy'>
         <style>
        {`
            th, td{
                border: 1px solid black;
            }
            #divToPrint{
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }
            #cabecera{
                text-align: center;
            }
            #bodydy{
                padding: 8%;
            }
            
        `}
        </style>
            <div>
                <p id= 'cabecera'><strong><u>NOTIFICACIóN</u></strong></p>
                <p><strong>Fecha:</strong> {day} </p>
                <p><strong>Señor(a):</strong> {dataUser['COD-004']}</p>
                <p><strong>Expediente Nº: </strong></p>
                <p><strong>Regimen: </strong> {dataUser['COD-055']}</p>
                <p><strong>Entidad: </strong> UNIDADES EJECUTORAS DEL MINISTERIO DE EDUCACIÓN</p>
            </div>
            <div>
                <p>En atención a su solicitud presentada el <strong>31 octubre de 2019</strong>, le manifestamos lo siguiente:</p>
            </div>

            <div>
                <p>Al efectuar la revisión de su expediente administrativo se verificó que la pensión que viene recibiendo es la correcta de conformidad a la <strong>Resolución</strong> la cual le otorga la pensión <strong>Viudez / Cesantía</strong> bajo el régimen del Decreto Ley N° 20530.</p>
            </div>

            <div>
                <p>Asimismo, se ha efectuado la revisión a los parámetros de su pensión, concluyéndose que el monto que viene percibiendo, es el correcto:</p>
            </div>

            <BootstrapTable data={dataProyecPlanilla} id='01' id='divToPrint'>
                  <TableHeaderColumn width='200' dataField='code' isKey>Descripcion</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='valueProject'>Pension Recalculada</TableHeaderColumn>
            </BootstrapTable>

            <div>
                <p>En tal sentido, la pensión mensual que viene percibiendo está conforme a Ley.</p>
            </div>
            <div>
                <p>Atentamente,</p>
            </div>          
        </div>
        )
    }
}

PrintAdmin.propTypes ={
    objPlanilla: PropTypes.object,
    objDataUser: PropTypes.object,
    tableView: PropTypes.array
}

export default PrintAdmin;