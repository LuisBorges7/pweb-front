import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function CategoriesForm(){

    const [campos, setCampos] = useState({
        name: '',
        passengers: '',
        price: ''
    });
  
    
    function handleInputChange(event){  

        const target = event.target
        const name = target.name
        const value = target.type==="checkbox" ? target.checked : target.value

        campos[name] = value;
        setCampos(campos);
    }
	
    function handleFormSubmit(event){

        event.preventDefault();
        console.log(campos);
        Api.post("categories/",campos).then((res) => {
                                                        console.log(res.data)
                                                        }).catch((error) => {
                                                            console.log(error)
                                                        });
    }

    return(
        <Container id="main-container" className="d-grid h-100">
            <form onSubmit={handleFormSubmit} id="info-car" initialState={{ input: '' }} className="text w-100">
                    <div className="col-md-8 m-auto">
                        <p className="lead text-center pt-5">Cadastro Categoria Veículos</p>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Categoria:</label>
                            <Form.Control type="name" name ="name" size="lg" placeholder="Nome" autoComplete="name" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Quantidade Passageiros (sem o motorista):</label>
                            <Form.Control type="number" name ="passengers" size="lg" placeholder="Passageiros" autoComplete="passengers" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Valor:</label>
                            <Form.Control type="price" name ="price" size="lg" placeholder="Valor categoria" autoComplete="price" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <div className="row">
                            <input type="submit" name="submit button" className="btn btn-info btn-block mt-4"/>
                            <button type="reset" class="submit button" className="btn btn-info btn-block" onChange={handleInputChange}>Clear</button>
                        </div>
                    </div>
            </form>
        </Container>
    ) 
}

export default CategoriesForm;