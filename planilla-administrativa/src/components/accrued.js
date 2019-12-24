import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert} from 'react-bootstrap';

class Devengados extends React.Component {
  render() {
     return (
      <div class="text-center">
         <Alert variant="info" className="text-center">Devengados</Alert>
         <Link to="/"><Button variant="outline-info">Principal</Button></Link>
      </div>
     )
  }
}


export default Devengados;