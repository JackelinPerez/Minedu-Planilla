import React from 'react';
import {Link} from "react-router-dom";
import {Button, Alert, Form} from 'react-bootstrap';
import Background from '../../image/icono.png';
import backgroundA from '../../image/background-Minedu.png'
import '../../css/home-style.css'

const divStyle = {
   // backgroundImage: `url(${backgroundA})`
 }

class home extends React.Component {
   constructor(props) {
      super(props);
      this.state={formDNI:0}
   }

   myChangeHandler = (event) => {
      let id = event.target.id;
      let val = event.target.value;
      let err = '';
      this.setState({errormessage: err});
      this.setState({[id]: val});
   }
  
   handleSubmit = () =>{
   }

    render() {
     return (    
      <div className="home" style={divStyle}>
         <section className="logo">
            <img src={Background} alt="Logo" />
            <div className= "title-logo">
               <p className="t">Transferencia</p>
               <h1 className="m">MINEDU</h1>
            </div>
         </section>
         <h1 className="title">Atención de solicitudes 20530</h1>

         <Form onSubmit={this.handleSubmit} onChange={this.myChangeHandler} >
            <Form.Group controlId="formDNI">
               <Form.Control type="number" placeholder="Ingrese su DNI" />
            </Form.Group>
            <Link   
            to={{
               pathname: "/resultados",
               dni: this.state.formDNI
            }}
            >
            <Button type="submit" variant="boton"> Ok </Button>
            </Link>
         </Form>    
      </div>
     )
  }
}

 
export default home;