import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Pagination from "react-bootstrap/Pagination";
import Placeholder from "react-bootstrap/Placeholder";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);//<ProgressBar now={60} />;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
   return (
     <>
       <div>
         <Accordion defaultActiveKey="0">
           <Accordion.Item eventKey="0">
             <Accordion.Header>Accordion Item #1</Accordion.Header>
             <Accordion.Body>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
             </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="1">
             <Accordion.Header>Accordion Item #2</Accordion.Header>
             <Accordion.Body>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
             </Accordion.Body>
           </Accordion.Item>
         </Accordion>
       </div>
       <br></br>
       <div>
         {[
           "primary",
           "secondary",
           "success",
           "danger",
           "warning",
           "info",
           "light",
           "dark",
         ].map((variant) => (
           <Alert key={variant} variant={variant}>
             This is a {variant} alert with{" "}
             <Alert.Link href="#">an example link</Alert.Link>. Give it a click
             if you like.
           </Alert>
         ))}
       </div>
       <br></br>
       <div>
         <Button variant="outline-primary">Primary</Button>
         <Button variant="outline-secondary">Secondary</Button>
         <Button variant="outline-success">Success</Button>
         <Button variant="outline-warning">Warning</Button>
         <Button variant="outline-danger">Danger</Button>
         <Button variant="outline-info">Info</Button>
         <Button variant="outline-light">Light</Button>
         <Button variant="outline-dark">Dark</Button>
       </div>
       <br></br>
       <div>
         <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
       </div>
       <br></br>
       <div>
         {/* <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
       </div>
       <br></br>
       <div>
         <Dropdown>
           <Dropdown.Toggle variant="success" id="dropdown-basic">
             Dropdown Button
           </Dropdown.Toggle>

           <Dropdown.Menu>
             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
       </div>
       <br></br>
       <div>
         <Container>
           <Row>
             <Col xs={6} md={4}>
               <Image src="holder.js/171x180" rounded />
             </Col>
             <Col xs={6} md={4}>
               <Image src="holder.js/171x180" roundedCircle />
             </Col>
             <Col xs={6} md={4}>
               <Image src="holder.js/171x180" thumbnail />
             </Col>
           </Row>
         </Container>
       </div>
       <br></br>
       <div>
         <ListGroup>
           <ListGroup.Item>Cras justo odio</ListGroup.Item>
           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
           <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
         </ListGroup>
       </div>
       <br></br>
       <div>
         {/* { className="modal show" style={{ display: "block", position: "initial" }}
        >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog> } */}
       </div>
       <br></br>
       <div>
         <Navbar expand="lg" className="bg-body-tertiary">
           <Container>
             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#link">Link</Nav.Link>
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">
                     Action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">
                     Something
                   </NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                     Separated link
                   </NavDropdown.Item>
                 </NavDropdown>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
       </div>
       <br></br>
       <div>
         <Button variant="primary" onClick={handleShow}>
           Launch
         </Button>

         <Offcanvas show={show} onHide={handleClose}>
           <Offcanvas.Header closeButton>
             <Offcanvas.Title>Offcanvas</Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
             Some text as placeholder. In real life you can have the elements
             you have chosen. Like, text, images, lists, etc.
           </Offcanvas.Body>
         </Offcanvas>
       </div>
       <br></br>
       <div className="d-flex justify-content-around">
         <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>

         <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Placeholder as={Card.Title} animation="glow">
               <Placeholder xs={6} />
             </Placeholder>
             <Placeholder as={Card.Text} animation="glow">
               <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
               <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
               <Placeholder xs={8} />
             </Placeholder>
             <Placeholder.Button variant="primary" xs={6} />
           </Card.Body>
         </Card>
       </div>
       <br></br>
       <div>
         <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
         </Spinner>
       </div>
       <br></br>
       <div>
         <Table striped bordered hover>
           <thead>
             <tr>
               <th>#</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Username</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>1</td>
               <td>Mark</td>
               <td>Otto</td>
               <td>@mdo</td>
             </tr>
             <tr>
               <td>2</td>
               <td>Jacob</td>
               <td>Thornton</td>
               <td>@fat</td>
             </tr>
             <tr>
               <td>3</td>
               <td colSpan={2}>Larry the Bird</td>
               <td>@twitter</td>
             </tr>
           </tbody>
         </Table>
       </div>
       <br></br>
       <div></div>
       <br></br>
       <Container>
         <Row>
           <Col xs={12} sm={6} md={4} lg={3}>
             Column 1
           </Col>
           <Col xs={12} sm={6} md={4} lg={3}>
             Column 2
           </Col>
           <Col xs={12} sm={6} md={4} lg={3}>
             Column 3
           </Col>
           <Col xs={12} sm={6} md={4} lg={3}>
             Column 4
           </Col>
         </Row>
       </Container>
       <br></br>
       <Container>
         <Row>
           <Col>1 of 1</Col>
         </Row>
       </Container>
       <br></br>
       <Stack gap={3}>
         <div className="p-2">First item</div>
         <div className="p-2">Second item</div>
         <div className="p-2">Third item</div>
       </Stack>
       <br></br>
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
       <br></br>
       <div>
         <Form>
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="name@example.com" />
           </Form.Group>
           <Form.Group
             className="mb-3"
             controlId="exampleForm.ControlTextarea1"
           >
             <Form.Label>Example textarea</Form.Label>
             <Form.Control as="textarea" rows={3} />
           </Form.Group>
         </Form>
       </div>
       <br></br>
       <div>
         <Form.Label htmlFor="inputPassword5">Password</Form.Label>
         <Form.Control
           type="password"
           id="inputPassword5"
           aria-describedby="passwordHelpBlock"
         />
         <Form.Text id="passwordHelpBlock" muted>
           Your password must be 8-20 characters long, contain letters and
           numbers, and must not contain spaces, special characters, or emoji.
         </Form.Text>
       </div>
       <br></br>
       <div>
         <Form.Select aria-label="Default select example">
           <option>Open this select menu</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
         </Form.Select>
       </div>
       <br></br>
       <div>
         <Form>
           {["checkbox", "radio"].map((type) => (
             <div key={`default-${type}`} className="mb-3">
               <Form.Check // prettier-ignore
                 type={type}
                 id={`default-${type}`}
                 label={`default ${type}`}
               />

               <Form.Check
                 disabled
                 type={type}
                 label={`disabled ${type}`}
                 id={`disabled-default-${type}`}
               />
             </div>
           ))}
         </Form>
       </div>
       <br></br>
       <div>
         <InputGroup className="mb-3">
           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
           <Form.Control
             placeholder="Username"
             aria-label="Username"
             aria-describedby="basic-addon1"
           />
         </InputGroup>

         <InputGroup className="mb-3">
           <Form.Control
             placeholder="Recipient's username"
             aria-label="Recipient's username"
             aria-describedby="basic-addon2"
           />
           <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
         </InputGroup>

         <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
         <InputGroup className="mb-3">
           <InputGroup.Text id="basic-addon3">
             https://example.com/users/
           </InputGroup.Text>
           <Form.Control id="basic-url" aria-describedby="basic-addon3" />
         </InputGroup>

         <InputGroup className="mb-3">
           <InputGroup.Text>$</InputGroup.Text>
           <Form.Control aria-label="Amount (to the nearest dollar)" />
           <InputGroup.Text>.00</InputGroup.Text>
         </InputGroup>

         <InputGroup>
           <InputGroup.Text>With textarea</InputGroup.Text>
           <Form.Control as="textarea" aria-label="With textarea" />
         </InputGroup>
       </div>
       <br></br>
       <div>
         <FloatingLabel
           controlId="floatingInput"
           label="Email address"
           className="mb-3"
         >
           <Form.Control type="email" placeholder="name@example.com" />
         </FloatingLabel>
         <FloatingLabel controlId="floatingPassword" label="Password">
           <Form.Control type="password" placeholder="Password" />
         </FloatingLabel>
       </div>
       <br></br>
       <div>
         <Form>
           <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
           </Form.Group>
         </Form>
       </div>
       <br></br>
       <div>
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
           <Row className="mb-3">
             <Form.Group as={Col} md="4" controlId="validationCustom01">
               <Form.Label>First name</Form.Label>
               <Form.Control
                 required
                 type="text"
                 placeholder="First name"
                 defaultValue="Mark"
               />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="4" controlId="validationCustom02">
               <Form.Label>Last name</Form.Label>
               <Form.Control
                 required
                 type="text"
                 placeholder="Last name"
                 defaultValue="Otto"
               />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="4" controlId="validationCustomUsername">
               <Form.Label>Username</Form.Label>
               <InputGroup hasValidation>
                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                 <Form.Control
                   type="text"
                   placeholder="Username"
                   aria-describedby="inputGroupPrepend"
                   required
                 />
                 <Form.Control.Feedback type="invalid">
                   Please choose a username.
                 </Form.Control.Feedback>
               </InputGroup>
             </Form.Group>
           </Row>
           <Row className="mb-3">
             <Form.Group as={Col} md="6" controlId="validationCustom03">
               <Form.Label>City</Form.Label>
               <Form.Control type="text" placeholder="City" required />
               <Form.Control.Feedback type="invalid">
                 Please provide a valid city.
               </Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="3" controlId="validationCustom04">
               <Form.Label>State</Form.Label>
               <Form.Control type="text" placeholder="State" required />
               <Form.Control.Feedback type="invalid">
                 Please provide a valid state.
               </Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="3" controlId="validationCustom05">
               <Form.Label>Zip</Form.Label>
               <Form.Control type="text" placeholder="Zip" required />
               <Form.Control.Feedback type="invalid">
                 Please provide a valid zip.
               </Form.Control.Feedback>
             </Form.Group>
           </Row>
           <Form.Group className="mb-3">
             <Form.Check
               required
               label="Agree to terms and conditions"
               feedback="You must agree before submitting."
               feedbackType="invalid"
             />
           </Form.Group>
           <Button type="submit">Submit form</Button>
         </Form>
       </div>
     </>
   );
}

 export default App 
 //BasicExample;