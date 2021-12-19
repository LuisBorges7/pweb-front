import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function EmployeeRegistrationForm() {

	const [campos, setCampos] = useState({
		name: '',
		email: '',
		cellphone: '',
		phone: '',
		cpf: '',
		address: {},
		password: ''
	});

	const [endereco, setEndereco] = useState({
		street: '',
		number: '',
		city: '',
		zip_code: '',
		state: '',
		country: '',
	});

	function handleInputAddressChange(event) {
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
        Api.post("admin/employees/",campos).then((res) => {
                                                        console.log(res.data)
                                                        }).catch((error) => {
                                                            console.log(error)
                                                        });
                                                    }

	return (
		<Container id="provider-main-container" className="d-grid h-100">
			<Form id="employee-registration-form" initialState={{ input: '' }} onSubmit={handleFormSubmit}>
				<div className="col-md-8 m-auto">
					<p className="lead text-center pt-5">Employee Registration</p>

					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Name:</label>
						<Form.Control type="text" name="name" maxLength={60} size="lg" placeholder="Name" autoComplete="name" className="position-relative" onChange={handleInputChange}>
						</Form.Control>
					</Form.Group>

					<Form.Group className="mb-3" controlId="email_field">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name="email" size="lg" placeholder="Email" autoComplete="email" className="position-relative" onChange={handleInputChange}>
						</Form.Control>
					</Form.Group>

					<Form.Group className="mb-3" controlId="cellphone_field">
						<Form.Label>Cellphone</Form.Label>
						<Form.Control type="number" name="cellphone" placeholder="Cellphone" autoComplete="cellphone" className="position-relative" onInput={(e) => {
							e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
						}} size="lg" onChange={handleInputChange}>
						</Form.Control>
					</Form.Group>

					<Form.Group className="mb-3" controlId="phone_field">
						<Form.Label>Phone</Form.Label>
						<Form.Control type="number" name="phone" placeholder="phone" autoComplete="phone" className="position-relative" onInput={(e) => {
							e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
						}} size="lg" onChange={handleInputChange}>
						</Form.Control>
					</Form.Group>

					<Form.Group className="mb-3" controlId="cpf_field">
						<Form.Label>CPF</Form.Label>
						<Form.Control type="number" name="cpf" placeholder="Cpf" autoComplete="cpf" className="position-relative" onInput={(e) => {
							e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
						}} size="lg" onChange={handleInputChange}>
						</Form.Control>
					</Form.Group>

					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Rua:</label>
						<Form.Control type="text" name="street" size="lg" placeholder="Rua" autoComplete="street" className="position-relative" onChange={handleInputAddressChange} />
					</Form.Group>
					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Numero Residencia:</label>
						<Form.Control type="number" name="number" size="lg" placeholder="Numero" autoComplete="number" className="position-relative" onChange={handleInputAddressChange} />
					</Form.Group>
					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Cidade:</label>
						<Form.Control type="text" name="city" size="lg" placeholder="Cidade" autoComplete="city" className="position-relative" onChange={handleInputAddressChange} />
					</Form.Group>
					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">CEP:</label>
						<Form.Control type="number" name="zip_code" size="lg" placeholder="CEP" autoComplete="CEP" className="position-relative" onChange={handleInputAddressChange} />
					</Form.Group>
					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Estado:</label>
						<Form.Control type="text" name="state" size="lg" placeholder="Estado" autoComplete="state" className="position-relative" onChange={handleInputAddressChange} />
					</Form.Group>
					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Pais:</label>
						<Form.Control type="text" name="country" size="lg" placeholder="country" autoComplete="Pais" className="position-relative" onChange={handleInputAddressChange} />
					</Form.Group>
					<Form.Group>
						<label className="form-control-label" class="text-left pt-3">Profissao:</label>
						<Form.Control type="text" name="profession" size="lg" placeholder="Profissao" autoComplete="profession" className="position-relative" onChange={handleInputChange} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="password_field">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="Password" autoComplete="password" className="position-relative" size="lg" onChange={handleInputChange}>
						</Form.Control>
					</Form.Group>
					<div className="row">
						<input type="submit" name="submit button" className="btn btn-info btn-block mt-4" />
						<button type="reset" class="submit button" className="btn btn-info btn-block" onChange={handleInputChange}>Clear</button>
					</div>
				</div>
			</Form >
		</Container >
	)
}

export default EmployeeRegistrationForm;