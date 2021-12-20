import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

function pgAdmin() {

    return (

        <Container id="select-car" className="d-grid h-100">
            <div className="d-grid">
                <Link to="/vehicle-create/">
                    <button variante="primary" size="lg" type="register">Criar Veiculos</button>
                </Link>    
            </div>
            <div className="d-grid">
                <Link to="/employee-register/">
                    <button variante="primary" size="lg" type="register">Criar Empregado</button>
                </Link>    
            </div>
            <div className="d-grid">
                <Link to="/checklist/">
                    <button variante="primary" size="lg" type="register">checklist</button>
                </Link>   
            </div>
            <div className="d-grid">
                <Link to="/provider-register /">
                    <button variante="primary" size="lg" type="register">Registrar Fornecedor</button>
                </Link>    
            </div>
          
        </Container >
    )
}

export default pgAdmin;