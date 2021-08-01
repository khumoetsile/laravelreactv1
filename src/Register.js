import React,{useState, useEffect} from "react";
import  {useHistory} from "react-router-dom";
import Header from './Header';
import { Modal, Button, Container, Col, Row, Image, Spinner } from 'react-bootstrap';

function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("userInfo")){
            history.push("/add")
        }
    }, [])

    async function signUp(){
        let item = {name, email, password}
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register",{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
            }
        })
        result = await result.json()
        localStorage.setItem("userInfo",JSON.stringify(item));
        history.push("/login");
    }
    return(
        <>
        <Header />
        <Container>
        <Row>
          <Col sm={9}><Image fluid src="https://images.pexels.com/photos/7194527/pexels-photo-7194527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></Col>
          <Col className="reg" sm={3}>
            <div className="regForm">
            <label for="Name">Full Name:</label>
            <input type="text" autocomplete="off" value={name} onChange={(e)=>setName(e.target.value)} name="name" alt="Full Name" className="form-control" />
            <label for="Email">Email Address:</label>
            <input type="email" autocomplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" alt="Email" placeholder="Email" className="form-control" />
            <label for="Password">Password:</label>
            <input type="password" autocomplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" alt="Password" placeholder="Password" className="form-control" />
            <button onClick={signUp} className="btn btn-primary">Register</button>
            </div>
            </Col>
          </Row>
          </Container>
        </>
    )
}

export default Register
