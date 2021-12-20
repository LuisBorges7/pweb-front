import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function ReservationForm() {


	const [campos, setCampos] = useState({
		customer: '',
		vehicle: '',
		insurance: '',
		rent_date: '',
		return_date: ''
	});

	const [categories, setCategories] = useState([]);
	const [insurances, setInsurances] = useState([]);

	function handleInputChange(event) {
		campos[event.target.name] = event.target.value;
		setCampos(campos);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(campos);
		Api.post("rents/", campos).then((res) => {
			console.log(res.data);
		}).catch((error) => { console.log(error) });
	}

	useEffect(() => {
		(async () => {
			Api.get('categories/').then(response => {
				setCategories(response.data);
				console.log(categories);
			});
		})();
	}, []);

	useEffect(() => {
		(async () => {
			Api.get('insurances/').then(response => {
				setInsurances(response.data);
				console.log(insurances);
			});
		})();
	}, []);

	return (
		<Container id="main-container" className="d-grid h-100">
			<h1>Reservation Form</h1>
			<p>Fill in the fields below.</p>
			<Form id="registration-in-form" onSubmit={handleFormSubmit}>
				<Form.Group className="mb-3" controlId="sign-in-customer">
					<Form.Label>Customer ID</Form.Label>
					<Form.Control type="text" name="customer" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="sign-in-vehicle">
					<Form.Label>Vehicle category (choose a category)</Form.Label>
					<Form.Control as="select" name="vehicle" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
						{
							categories.map((result) => (<option text={result.id}>{result.name}</option>))
						}
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="sign-in-insurance">
					<Form.Label>Insurance category (choose a category)</Form.Label>
					<Form.Control as="select" name="insurance" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange}>
						{
							insurances.map((result) => (<option text={result.id}>{result.name}</option>))
						}
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="sign-rent_date">
					<Form.Label>Rent date</Form.Label>
					<Form.Control type="date" name="rent_date" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="sign-in-return-date">
					<Form.Label>Return date</Form.Label>
					<Form.Control type="date" name="return_date" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
				</Form.Group>
				<div className="row">
					<input type="submit" name="submit button" className="btn btn-info btn-block mt-4" />
					<button type="reset" class="submit button" className="btn btn-info btn-block" onChange={handleInputChange}>Clear</button>
				</div>
			</Form>
		</Container>
	)
}

export default ReservationForm;