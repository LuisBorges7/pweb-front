import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

function pgAdmin() {

    return (

        <Container id="main-container" className="d-grid h-100">
            <div className="col-md-8 m-auto">
                <p className="lead text-center pt-5">Página do Adminstrador</p>
                <div className="d-grid">
                    <Link to="/vehicle-create/">
                        <button variante="primary" style={{ width: '800px' }} size="lg" type="register">Cadastrar Veiculos</button>
                    </Link>
                </div>
                <div className="d-grid">
                    <Link to="/employee-register/">
                        <button variante="primary" style={{ width: '800px' }} size="lg" type="register">Cadastrar Funcionário</button>
                    </Link>
                </div>
                <div className="d-grid">
                    <Link to="/provider-register/">
                        <button variante="primary" style={{ width: '800px' }} size="lg" type="register">Cadastrar Fornecedor</button>
                    </Link>
                </div>
                <div className="d-grid">
                    <Link to="/categories-create/">
                        <button variante="primary" style={{ width: '800px' }} size="lg" type="register">Cadastrar Categorias</button>
                    </Link>
                </div>
                <div className="d-grid">
                    <Link to="/checklist/">
                        <button variante="primary" style={{ width: '800px' }} size="lg" type="register">Checklist</button>
                    </Link>
                </div>
            </div>

        </Container >
    )
}

export default pgAdmin;