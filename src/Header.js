import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function Header() {
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem('userInfo'))
    function logout(){
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="">Khumoetsile</Navbar.Brand>
                    <Nav className="me-auto headerLinks float-right">
                        {
                            localStorage.getItem("userInfo") ?
                            <>
                                <Link to="/add">Add Products</Link>
                                <Link to="/update">Update Products</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {
                            localStorage.getItem("userInfo") ?
                            <>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            </>
                            :
                            <>
                            <span className="text-white">Login to interact.</span>
                            </>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
