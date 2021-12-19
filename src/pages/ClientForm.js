import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function ClientForm(){

    const [campos, setCampos] = useState({
        name: '',
        email: '',
        cpf: '',
        rg: '',
        cnh: '',
        category_cnh: '',
        cnh_first_date: '',
        profession: '',
        address: {}
    });


    const [endereco, setEndereco] = useState({
        street: '',
        number: '',
        city: '',
        zip_code: '',
        state : '',
        country: '',
    });

    function handleInputAddressChange(event){

        const target = event.target
        const name = target.name
        const value = target.value

        endereco[name] = value;
        setEndereco(endereco);
    }
    
    
    function handleInputChange(event){

        const target = event.target
        const name = target.name
        const value = target.value

        campos[name] = value;
        setCampos(campos);
    }
	
    function handleFormSubmit(event){

        campos['address'] =endereco;
        setEndereco(endereco);

        event.preventDefault();
        console.log(campos);
        Api.post("/customers/",campos).then((res) => {
                                                        console.log(res.data)
                                                        }).catch((error) => {
                                                            console.log(error)
                                                        });
                                                    }

    return(
        <Container id="main-container" className="d-grid h-100">
            <form onSubmit={handleFormSubmit} id="info-client" initialState={{ input: '' }} className="text w-100">
                    <div className="col-md-8 m-auto">
                        <p className="lead text-center pt-5">Cadastro Cliente</p>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome completo:</label>
                            <Form.Control type="text" name ="name" size="lg" placeholder="Nome" autoComplete="name" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Email:</label>
                            <Form.Control type="email" name ="email" size="lg" placeholder="email" autoComplete="email" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">cpf:</label>
                            <Form.Control type="color-car" name ="cpf" size="lg" placeholder="cpf" autoComplete="cpf" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">rg:</label>
                            <Form.Control type="color-car" name ="rg" size="lg" placeholder="rg" autoComplete="rg" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">cnh:</label>
                            <Form.Control type="text" name ="cnh" size="lg" placeholder="CNH" autoComplete="cnh" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">category_cnh:</label>
                            <Form.Control type="text" name ="category_cnh" size="lg" placeholder="category_cnh" autoComplete="category_cnh" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Data CNH:</label>
                            <Form.Control type="date" name ="cnh_first_date" size="lg" placeholder="data" autoComplete="cnh_first_date" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Rua:</label>
                            <Form.Control type="text" name ="street" size="lg" placeholder="Rua" autoComplete="street" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Numero Residencia:</label>
                            <Form.Control type="number" name ="number" size="lg" placeholder="Numero" autoComplete="number" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Cidade:</label>
                            <Form.Control type="text" name ="city" size="lg" placeholder="Cidade" autoComplete="city" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">CEP:</label>
                            <Form.Control type="number" name ="zip_code" size="lg" placeholder="CEP" autoComplete="CEP" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Estado:</label>
                            <Form.Control type="text" name ="state" size="lg" placeholder="Estado" autoComplete="state" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Pais:</label>
                            <Form.Control type="text" name ="country" size="lg" placeholder="country" autoComplete="Pais" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Profissao:</label>
                            <Form.Control type="text" name ="profession" size="lg" placeholder="Profissao" autoComplete="profession" className="position-relative" onChange={handleInputChange}/>
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

export default ClientForm;