import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {getDay} from '../../utils/utils';

import '../../css/not-improced.css'

export class NotifProcedente extends React.Component {

    render(){
        const dataUser= this.props.objDataUser;
        const dataProyecPlanilla = this.props.tableView;
        const day= getDay();
        
        return(
            <div className='not-improc'>
                <section>
                    <p>La solicitud presentada por <strong>{dataUser['COD-004']}</strong>, Identificada con Documento Nacional de Identidad Nº 07551573, sobre recalculo de pensión de cesantía del Régimen del Decreto Ley Nº 20530, correspondiente a la ADMINISTRACION DE PENSIONES LAS UNIDADES EJECUTORAS DEL MINISTERIO DE EDUCACIÓN, y;</p>                    
                    <p><strong>CONSIDERANDO:</strong></p>
                </section>
                <section>
                    <p>Que, mediante Resolución Directoral Nº 104-91/MINEDU-10.3, de fecha 19 de abril de 1991, expedida por el Ministerio de Educación, se otorgó pensión de cesantía / viudez bajo el régimen del Decreto Ley Nº 20530, a <strong>{dataUser['COD-004']}</strong>, a partir del 03 de mayo de 1991, con el cargo de Asesor II, Categoría <strong>{dataUser['COD-055']}</strong>, / V Nivel Magisterial con Jornada Laboral 30 horas, en base a los <strong>{dataUser['COD-053']} años y {dataUser['COD-054']}</strong> dias </p>
                    <p>Que, <strong>{dataUser['COD-004']}</strong>, mediante escrito presentado el <strong>{day}</strong>, solicita recalculo de su pensión de cesantía, al no estar conforme con el monto;</p>
                    <p>Que, se ha verificado que, el monto de su pensión fue calculado de forma <strong>Incorrecta</strong>, en vista que se ha considerado de forma errónea categoría / fecha de inicio de pensión / tiempo de servicios, pensión inicial / fecha de nacimiento, debiendo ser categoría / fecha de inicio de pensión / tiempo de servicios, pensión inicial / fecha de nacimiento, por lo que se procede a regularizar su pensión de cesantía / viudez</p>
                    <p>Que, de conformidad con la Nonagésima Sétima Disposición Complementaria Final de la Ley Nº 29951, el interés que corresponde pagar por adeudos de carácter previsional es el interés legal fijado por el Banco Central de Reserva del Perú, el mismo que no es capitalizable de conformidad con el artículo 1249° del Código Civil y se devenga a partir del día siguiente de aquel en que se produjo el incumplimiento hasta el día de su pago efectivo, sin que sea necesario que el acreedor afectado exija judicial o extrajudicialmente el incumplimiento de la obligación o pruebe haber sufrido daño alguno;</p>
                    <p>Que, el artículo 1° del Decreto Supremo Nº 132-2005-EF, publicado el 07 de octubre de 2005, dispone que la Oficina de Normalización Previsional se encargará de administrar las funciones de declarar, reconocer, calificar y pagar derechos derivados del Decreto Ley Nº 20530 para aquellas entidades de origen que hayan sido o sean privatizadas, liquidadas, desactivadas y disueltas, siempre que cuenten con la partida presupuestal respectiva o con el fondo correspondiente.</p>
                    <p>Estando a lo dispuesto en el Artículo 11° del Decreto de Urgencia N° 015-2019, el Decreto Ley Nº 20530, Ley Nº 28449, y a las facultades señaladas en la Ley Nº 25967, la Ley Nº 28532, Decreto Supremo Nº 132-2005-EF, la 97° Disposición Complementaria Final de la Ley Nº 29951 y el Reglamento de Organización y Funciones de la Oficina de Normalización Previsional, aprobado mediante Resolución Ministerial Nº 174-2013-EF/10.</p>
                    <p><strong>SE RESUELVE:</strong></p>
                    <p>ARTÍCULO 1º.- Disponer el pago del nuevo monto de pensión de cesantía / viudez de <strong>{dataUser['COD-004']}</strong>, a partir del 03 de mayo de 1991, de conformidad con lo expuesto en los considerandos precedentes.</p>
                    <p>ARTÍCULO 2º.- Comunicar a Pago de Prestaciones de la Dirección de Prestaciones para que proceda a efectuar el pago de la Pensión de Cesantía, Devengados e Intereses Legales, según lo dispuesto por la Nonagésima Sétima Disposición Complementaria Final de la Ley Nº 29951, cuyos montos obran en las liquidaciones adjuntas a la presente Resolución, los mismos que están afectos a los descuentos de ley.</p>
                    <p>ARTÍCULO 3°.- La autoridad administrativa se reserva el derecho de comprobar la veracidad de la información presentada, el cumplimiento de la normatividad sustantiva y aplicar las sanciones pertinentes en caso que la información presentada no sea veraz, en aplicación del numeral 1.16 del artículo IV, del Título Preliminar de la Ley N° 27444, referente al Principio de Privilegio de Controles Posteriores.</p>
                    <p><strong>REGÍSTRESE, COMUNÍQUESE, CÚMPLASE Y ARCHÍVESE</strong></p>
                </section>
            </div>
        )
    }
}

NotifProcedente.propTypes ={
    objPlanilla: PropTypes.object,
    objDataUser: PropTypes.object,
    tableView: PropTypes.array
}

export default NotifProcedente;