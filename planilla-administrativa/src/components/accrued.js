import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert} from 'react-bootstrap';
import PropTypes from 'prop-types';


class Devengados extends React.Component {
  render() {
     const {nombre}= this.props.location;
     return (
      <div>
         <Alert variant="info">{nombre}</Alert>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link>
      </div>
     )
  }
}

Devengados.propTypes = {
   nombre: PropTypes.string
}

export default Devengados;