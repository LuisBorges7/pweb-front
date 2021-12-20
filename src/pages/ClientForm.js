import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function ClientForm(){

    const [campos, setCampos] = useState({
        name: '',
        email: '',
        password: '',
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
        neighborhood: '',
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
        Api.post("admin/customers/",campos).then((res) => {
                                                        console.log(res.data)
                                                        }).catch((error) => {
                                                            console.log(error)
                                                        });
                                                    }

    return(
        <Container id="main-container" className="d-grid h-100">
            <form onSubmit={handleFormSubmit} id="info-client" initialstate={{ input: '' }} className="text w-100">
                    <div className="col-md-8 m-auto">
                        <p className="lead text-center pt-5">Cadastro do Cliente</p>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome completo:</label>
                            <Form.Control type="text" name ="name" size="lg" placeholder="Nome" autoComplete="name" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Email:</label>
                            <Form.Control type="email" name ="email" size="lg" placeholder="Email" autoComplete="email" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Senha:</label>
                            <Form.Control type="password" name ="password" size="lg" placeholder="Senha" autoComplete="password" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">CPF:</label>
                            <Form.Control type="color-car" name ="cpf" size="lg" placeholder="CPF" autoComplete="cpf" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">RG:</label>
                            <Form.Control type="color-car" name ="rg" size="lg" placeholder="RG" autoComplete="rg" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">CNH:</label>
                            <Form.Control type="text" name ="cnh" size="lg" placeholder="CNH" autoComplete="cnh" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Categoria da CNH:</label>
                            <Form.Control type="text" name ="category_cnh" size="lg" placeholder="Categoria da CNH" autoComplete="category_cnh" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Data da CNH:</label>
                            <Form.Control type="date" name ="cnh_first_date" size="lg" placeholder="data" autoComplete="cnh_first_date" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Rua:</label>
                            <Form.Control type="text" name ="street" size="lg" placeholder="Rua" autoComplete="street" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Número Residência:</label>
                            <Form.Control type="number" name ="number" size="lg" placeholder="Numero" autoComplete="number" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Bairro:</label>
                            <Form.Control type="text" name ="neighborhood" size="lg" placeholder="Bairro" autoComplete="neighborhood" className="position-relative" onChange={handleInputAddressChange}/>
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
                            <label className="form-control-label" class="text-left pt-3">País:</label>
                            <Form.Control type="text" name ="country" size="lg" placeholder="Pais" autoComplete="Pais" className="position-relative" onChange={handleInputAddressChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Profissão:</label>
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