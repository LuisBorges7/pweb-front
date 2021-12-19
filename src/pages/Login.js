import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'
import { Link } from 'react-router-dom';

import '../css/Login.css'

function Login(){

    const [campos, setCampos] = useState({
        email: '',
        senha: ''
    });
    
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event) {
		event.preventDefault();
		console.log(campos);
		Api.post("/auth/login/", campos).then((res) => {
			console.log(res.data);
		}).catch((error) => { console.log(error) });
	}
    
    return(
        <Container id="main-container" className="d-grid h-100">
            <Form id="sign-in-form"className="text-center w-100" onSubmit={handleFormSubmit}> 
                <img
                className="mb-4 bootstrap-logo" 
                src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Carro-PNG.png"
                alt="Bootstrap 5" />
                <h1 className="mb-3 fs-3 fw-normal">login</h1>
                <Form.Group controlId="sign-in-email_adress">
                    <Form.Control type="email" name="email" size="lg" placeholder="Email" autoComplete="username" className="position-relative" onChange={handleInputChange}/>
                </Form.Group >
                <Form.Group controlId="sign-in-password" className="mb-3">
                    <Form.Control type="password" name="senha" size="lg" placeholder="senha" autoComplete="current-password" className="position-relative" onChange={handleInputChange} />
                </Form.Group>       
                <div className="d-grid">
                    <button variante="primary" size="lg" type="submit">Logar</button>
                </div>
                <div className="d-grid">
                    <Link to="/client-create/">
                        <button variante="primary" size="lg" type="register">Registrar</button>
                    </Link>    
                </div>
                <p className="mt-5 text-muted">&copy; 2021-2022 </p>
            </Form>

        </Container>
    );
}

export default Login;       