import Header from './Header';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { Modal, Button, Container, Col, Row, Image, Spinner } from 'react-bootstrap';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("userInfo")){
            history.push("/add")
        }
    }, [])

    async function login(){
        let item = {email,password}
        let result = await fetch("http://localhost:8000/api/login",{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("userInfo", JSON.stringify(result))
        history.push("/add")
    }
    return(
        <>
        <Header />
        <Container>
        <Row>
          <Col sm={9}><Image fluid src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></Col>
          <Col sm={3}>
          <div className="regForm">
          <label for="Email">Email Address:</label>
          <input type="email" autocomplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" alt="Email" placeholder="Email" className="form-control" />
          <label for="Password">Password:</label>
          <input type="password" autocomplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" alt="Password" placeholder="Password" className="form-control" />
          <button onClick={login} className="btn btn-primary">Login</button>
          </div>
          </Col>
        </Row>
        </Container>
        </>
    )
}

export default Login
