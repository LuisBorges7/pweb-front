import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

//Pendências: mascara do cnpj

function ProviderRegistrationForm() {

	const [campos, setCampos] = useState({
		name: '',
		email: '',
		email2: '',
		email3: '',
		cellphone: '',
		phone: '',
		cnpj: '',
		address: {},
		services: ''
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


	function handleInputChange(event) {

		const target = event.target
		const name = target.name
		const value = target.value

		campos[name] = value;
		setCampos(campos);
	}

	function handleFormSubmit(event) {

		campos['address'] = endereco;
		setEndereco(endereco);

		event.preventDefault();
		console.log(campos);
		Api.post("admin/providers/", campos).then((res) => {
			console.log(res.data)
		}).catch((error) => {
			console.log(error)
		});
	}

	return (
		<Container id="provider-main-container" className="d-grid h-100">
			<h1>Provider Registration</h1>
			<p>Provider information</p>
			<Form id="provider-registration-form" initialState={{ input: '' }} onSubmit={handleFormSubmit}>

				<Form.Group className="mb-3" controlId="name_field">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" maxLength={60} name="name" size="lg" placeholder="" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email_field">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" name="email" size="lg" placeholder="" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email_field2">
					<Form.Label>Email 02</Form.Label>
					<Form.Control type="email" name="email2" size="lg" placeholder="" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email_field3">
					<Form.Label>Email 03</Form.Label>
					<Form.Control type="email" name="email3" size="lg" placeholder="" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="cellphone_field">
					<Form.Label>Cellphone</Form.Label>
					<Form.Control type="number" name="cellphone" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
					}} size="lg" placeholder="" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phone_field">
					<Form.Label>Phone</Form.Label>
					<Form.Control type="number" name="phone" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
					}} size="lg" placeholder="" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="cnpj_field">
					<Form.Label>CNPJ</Form.Label>
					<Form.Control type="number" name="cnpj" onInput={(e) => {
						e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 18)
					}} className="textbox" size="lg" placeholder="" onChange={handleInputChange}>
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

				<Form.Group className="mb-3" controlId="services_field">
					<Form.Label>Services</Form.Label>
					<Form.Control type="text" name="services" size="lg" onChange={handleInputChange}>
					</Form.Control>
				</Form.Group>

					<div className="row">
						<input type="submit" name="submit button" className="btn btn-info btn-block mt-4" />
						<button type="reset" class="submit button" className="btn btn-info btn-block" onChange={handleInputChange}>Clear</button>
					</div>
			</Form >
		</Container >
	)
}

export default ProviderRegistrationForm;