import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert} from 'react-bootstrap';

class Hello extends React.Component {

  render() {
     return (
      <div class="text-center">
         <Alert variant="info" className="text-center">Hello World</Alert>
         <Link to="/resultados"><Button variant="outline-info">Resultado</Button></Link><br/><br/>
         <Link to="/devengados"><Button variant="outline-info">Devengados</Button></Link>         
      </div>
     )
  }

}

export default Hello;