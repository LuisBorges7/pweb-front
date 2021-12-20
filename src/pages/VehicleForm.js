import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function VehicleForm(){

    const [categories, setCategories] = useState([])

    const [campos, setCampos] = useState({
        license_plate: '',
        car_model: '',
        color: '',
        brand: '',
        year: '',
        chassi_number: '',
        renavam: '',
        tank: '',
        fuel_liters: '',
        kilometers: '',
        category: '',
        is_for_pcd : false,
        have_gps: false,
        status: '',
        price: '',
        photo: ''
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
        Api.post("vehicles/",campos).then((res) => {
                                                        console.log(res.data)
                                                        }).catch((error) => {
                                                            console.log(error)
                                                        });
    }

    useEffect( () => {
        (async () => {
          Api.get('categories/').then( response => {
            setCategories(response.data);
            console.log(campos);
          });
        })();
    }, []);


    return(
        <Container id="main-container" className="d-grid h-100">
            <form onSubmit={handleFormSubmit} id="info-car" initialState={{ input: '' }} className="text w-100">
                    <div className="col-md-8 m-auto">
                        <p className="lead text-center pt-5">Cadastro Veículos</p>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="license_plate" name ="license_plate" size="lg" placeholder="Placa" autoComplete="license-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Modelo:</label>
                            <Form.Control type="text" name ="car_model" size="lg" placeholder="Modelo do carro" autoComplete="car_model" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="color-car" name ="color" size="lg" placeholder="cor do carro" autoComplete="color-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Nome Veículo:</label>
                            <Form.Control type="brand-car" name ="brand" size="lg" placeholder="marca do carro" autoComplete="brand-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Ano:</label>
                            <Form.Control type="year" name ="year" size="lg" placeholder="Ano carro" autoComplete="year-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Chassis:</label>
                            <Form.Control type="chassis" name ="chassi_number" size="lg" placeholder="chassi_number" autoComplete="chassi_number-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Renavam:</label>
                            <Form.Control type="number" name ="renavam" size="lg" placeholder="Renavam" autoComplete="renavam-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Tamanho do tanque combustivel em litros:</label>
                            <Form.Control type="number" name ="tank" size="lg" placeholder="tamanho total tanque" autoComplete="tank-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">nivel combustivel em litros:</label>
                            <Form.Control type="number" name ="fuel_liters" size="lg" placeholder="Nivel total tanque" autoComplete="fuel_liters" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Km rodados:</label>
                            <Form.Control type="number" name ="kilometers" size="lg" placeholder="kilometers" autoComplete="kilometers-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="car_type">
                            <label className="form-control-label" class="text-left pt-3">Selecione a categoria do carro:</label>
                            <Form.Control as="select" name="category" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
                                {
                                categories.map((result) => (<option text={result.id}>{result.name}</option>))
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form>
                            <div>
                                <label className="form-control-label" class="text-left pt-3">PCD : </label>
                                <input type="checkbox" name="is_for_pcd" defaultChecked={campos.is_for_pcd} onChange={handleInputChange}/>
                            </div>
                        </Form>
                        <Form>
                            <div>
                                <label className="form-control-label" class="text-left pt-3">GPS : </label>
                                <input type="checkbox" name="have_gps" defaultChecked={campos.have_gps} onChange={handleInputChange}/>
                            </div>
                        </Form>
                        <Form.Group>
                            <label className="form-control-label pt-3" class="text-left">Status Carro:</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" id="inlineRadio1" value="available" onChange={handleInputChange}/>
                                <label class="form-check-label" for="inlineRadio1">Disponível</label>
                            </div>
                            <div class="form-check form-check-inline">                                                                                                                                                                                  
                                <input class="form-check-input" type="radio" name="status" id="inlineRadio2" value="rented" onChange={handleInputChange}/>
                                <label class="form-check-label" for="inlineRadio2">Alugado</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="status" id="inlineRadio1" value="maintenance" onChange={handleInputChange}/>
                                <label class="form-check-label" for="inlineRadio1">Manutenção</label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label className="form-control-label" class="text-left pt-3">Valor Basico por diaria:</label>
                            <Form.Control type="number" name="price" size="lg" placeholder="price" autoComplete="price-car" className="position-relative" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <div class="form-group pt-3">
                                <label for="exempleFormControlFile">Carregue a foto do veículo:</label>
                                <br/>
                                <input type="file" name="photo" class="form-control-file pt-2" id="FormControleFile" onChange={handleInputChange}/>
                            </div>
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

export default VehicleForm;