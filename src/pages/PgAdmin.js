import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

function pgAdmin() {

    return (

        <Container id="main-container" className="d-grid h-100">
            <div className="col-md-8 m-auto">
                <p className="lead text-center pt-5">Paginas Admin</p>
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
                    <Link to="/provider-register/">
                        <button variante="primary" size="lg" type="register">Registrar Fornecedor</button>
                    </Link>    
                </div>
                <div className="d-grid">
                    <Link to="/categories-create/">
                        <button variante="primary" size="lg" type="register">Criar Categorias</button>
                    </Link>    
                </div>
            </div>
          
        </Container >
    )
}

export default pgAdmin;