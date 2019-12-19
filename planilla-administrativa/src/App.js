import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './App.css';

class App extends React.Component {
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

    if(this.state.formDNI.length<7 || this.state.formDNI  === 0){
      alert('El numero de DNI no puede ser menor a 7 digitos, vuelve a intentarlo')
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} onChange={this.myChangeHandler} >
        <Form.Group controlId="formDNI" >
          <Form.Control type="number" placeholder="Ingrese su DNI" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default App;