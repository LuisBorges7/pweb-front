import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Col, Row } from "react-bootstrap"
import Api from '../ApiAxions'


function ChecklistForm() {

	const [campos, setCampos] = useState({
		paint_scratch: '',
		tires_good: '',
		kilometers: '',
		lights_working: '',
		panel_lights: '',
		brake_lights: '',
		seats: '',
		roof: '',
		is_clean: '',
		glasses: '',
		observations: '',
		gps_working: '',
		lock_working: '',
		fuel_liters: '',
		security_items: '',
		oil: '',
		water: '',
		brake_fluid: '',
		singed_customer: '',
		singed_employee: ''
	});

	function handleInputChange(event) {
		campos[event.target.name] = event.target.value;
		setCampos(campos);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(campos);
		Api.post("/checklists/", campos).then((res) => {
			console.log(res.data);
		}).catch((error) => { console.log(error) });
	}

	return (
		<Container id="checklist-main-container" className="d-grid h-100">
			<h1>Checklist Form</h1>
			<p>Check the fields below.</p>
			<Form id="checklist-in-form" initialState={{ input: '' }} onSubmit={handleFormSubmit}>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="paint_scratch">
							<Form.Label>Paint scratch</Form.Label>
							<div>
								<input type="radio" value={true} name="paint_scratch" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="paint_scratch" onChange={handleInputChange} /> No
							</div>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="tires_good">
							<Form.Label>Tires good</Form.Label>
							<div>
								<input type="radio" value={true} name="tires_good" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="tires_good" onChange={handleInputChange} /> No
							</div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="sign-in-kilometers">
							<Form.Label>Kilometers</Form.Label>
							<Form.Control type="number" name="kilometers" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
						</Form.Group>                        </Col>
					<Col>
						<Form.Group className="mb-3" controlId="lights_working">
							<Form.Label>Lights working</Form.Label>
							<div>
								<input type="radio" value={true} name="lights_working" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="lights_working" onChange={handleInputChange} /> No
							</div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="panel_lights">
							<Form.Label>Panel lights</Form.Label>
							<div>
								<input type="radio" value={true} name="panel_lights" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="panel_lights" onChange={handleInputChange} /> No
							</div>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="brake_lights">
							<Form.Label>Brake lights</Form.Label>
							<div>
								<input type="radio" value={true} name="brake_lights" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="brake_lights" onChange={handleInputChange} /> No
							</div>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="seats">
							<Form.Label>Seats</Form.Label>
							<div>
								<input type="radio" value={true} name="seats" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="seats" onChange={handleInputChange} /> No
							</div>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="roof">
							<Form.Label>Roof</Form.Label>
							<div>
								<input type="radio" value={true} name="roof" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="roof" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="is_clean">
							<Form.Label>Is clean</Form.Label>
							<div>
								<input type="radio" value={true} name="is_clean" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="is_clean" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="glasses">
							<Form.Label>Glasses</Form.Label>
							<div>
								<input type="radio" value={true} name="glasses" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="glasses" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Form.Group className="mb-3" controlId="observations">
					<div class="form-group">
						<label for="exampleFormControlTextarea1">Observations</label>
						<textarea class="form-control" as="textarea" id="exampleFormControlTextarea1" style={{ height: '100px', width: '400px' }} name='observations' maxLength={500} rows="3" onChange={handleInputChange}></textarea>
					</div>
				</Form.Group >
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="gps_working">
							<Form.Label>GPS working</Form.Label>
							<div>
								<input type="radio" value={true} name="gps_working" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="gps_working" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="lock_working">
							<Form.Label>Lock working</Form.Label>
							<div>
								<input type="radio" value={true} name="lock_working" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="lock_working" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="fuel_liters">
							<Form.Label>Fuel liters</Form.Label>
							<Form.Control type="number" name="fuel_liters" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="security_items">
							<Form.Label>Security items</Form.Label>
							<div>
								<input type="radio" value={true} name="security_items" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="security_items" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="oil">
							<Form.Label>Oil</Form.Label>
							<div>
								<input type="radio" value={true} name="oil" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="oil" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="water">
							<Form.Label>Water</Form.Label>
							<div>
								<input type="radio" value={true} name="water" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="water" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="brake_fluid">
							<Form.Label>Brake fluid</Form.Label>
							<div>
								<input type="radio" value={true} name="brake_fluid" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="brake_fluid" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="singed_customer">
							<Form.Label>Signed customer</Form.Label>
							<div>
								<input type="radio" value={true} name="singed_customer" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="singed_customer" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="singed_employee">
							<Form.Label>Signed employee</Form.Label>
							<div>
								<input type="radio" value={true} name="singed_employee" onChange={handleInputChange} /> Yes
								<input type="radio" value={false} name="singed_employee" onChange={handleInputChange} /> No
							</div>
						</Form.Group >
					</Col>
				</Row>
				<Form.Group className="mb-3" controlId="singed_employee">
					<Form.Label>Please check all fields before confirming</Form.Label>
				</Form.Group >
				<div className="row">
					<input type="submit" name="submit button" style={{ width: '400px' }} className="btn btn-info btn-block mt-4" />
					<button type="reset" class="submit button" style={{ width: '400px' }} className="btn btn-info btn-block mt-4" onChange={handleInputChange}>Clear</button>
				</div>
			</Form >
		</Container >
	)
}

export default ChecklistForm;