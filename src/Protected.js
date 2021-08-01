import Header from './Header';
import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router';

function Protected(props){
    let Cmp = props.Cmp
    const history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem("userInfo")){
            history.push("/register")
        }
    }, [])
    return(
        <>
        <div>
            <Cmp />
        </div>
        </>
    )
}

export default Protected
