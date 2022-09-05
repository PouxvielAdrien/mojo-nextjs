import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavbarMojo() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="border-bottom fixed-top">
            <Container>
                <Navbar.Brand href="/" className="pt-2">
                    <img
                        alt=""
                        src="/images/mojo-star.svg"
                        width="40"
                        height="38"
                        className="d-inline-block align-top"
                    />
                    <span className="fw-bold d-inline-block align-top px-2 ">Mojo Helpdesk</span>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="justify-content-between flex-grow-1 pe-3">

                    <ul className="navbar-nav align-items-center">
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <Nav.Link href="#Pricing">Pricing</Nav.Link>

                        <NavDropdown title="Solutions" id="collasible-nav-dropdown">
                            <h7 className="text-secondary px-3">By Department</h7>
                            <NavDropdown.Item href={"/solutions/it-helpdesk"}>IT Service Desk</NavDropdown.Item>
                            <NavDropdown.Item href="/solutions/customer-service">Customer Service</NavDropdown.Item>
                            <NavDropdown.Divider className="m-4"/>
                            <h7 className="text-secondary px-3">By Industry</h7>
                            <NavDropdown.Item href="/solutions/growing-businesses">Growing Businesses</NavDropdown.Item>
                            <NavDropdown.Item href="/solutions/ecommerce">E-commerce</NavDropdown.Item>
                            <NavDropdown.Item href="/solutions/education">Education</NavDropdown.Item>
                            <NavDropdown.Item href="/solutions/healthcare">Healthcare</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="Ressources" id="collasible-nav-dropdown">
                            <h7 className="text-secondary px-3">Case Studies</h7>
                            <NavDropdown.Item href="#">Austin Community College</NavDropdown.Item>
                            <NavDropdown.Item href="#">Hebron Public School</NavDropdown.Item>
                            <NavDropdown.Item href="#">Raksha Technologies</NavDropdown.Item>
                            <NavDropdown.Item href="">Marion Central School</NavDropdown.Item>
                            <NavDropdown.Item href="#">Synapses Lab</NavDropdown.Item>
                            <NavDropdown.Item href="#">Simplain Software Solutions</NavDropdown.Item>
                            <NavDropdown.Item href="">Genesis Healthcare</NavDropdown.Item>
                            <NavDropdown.Item href="/ressources/sona-dermatology">Sona Dermatology & MedSpa</NavDropdown.Item>
                            <NavDropdown.Divider className="m-4"/>
                            <h7 className="text-secondary px-3">Free Guides & Assessments</h7>
                            <NavDropdown.Item href="#">How to evaluate an IT helpdesk software</NavDropdown.Item>
                            <NavDropdown.Item href="#">10 features to improve customer services</NavDropdown.Item>
                            <NavDropdown.Item href="#">15 help desk evaluation best practices</NavDropdown.Item>
                            <NavDropdown.Item href="#">Help desk software FAQs</NavDropdown.Item>
                            <NavDropdown.Item href="#">Assess the state of your current solution</NavDropdown.Item>
                        </NavDropdown>

                    </ul>

                        <ul className="navbar-nav align-items-center">
                            <Nav.Link href="https://mojohelpdesk.com/sign-in/">
                                <button className="btn btn-outline-dark">Sign in</button>
                            </Nav.Link>

                            <Nav.Link href="https://signup.mojohelpdesk.com/signup/register/90?referer=website">
                                <button className="btn btn-danger text-uppercase">Try for free</button>
                            </Nav.Link>

                        </ul>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}