import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'

export default ()=> {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [toHome, setToHome] = useState(false)
    
    const handleSubmit=async (e) => {
        e.preventDefault()
        await fetch('http://localhost:4000/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'name':name, 'email':email, 'password':password, 'phone':phone})
        })
        await setToHome(true)
    }
    
    return(
        <>
        {toHome ? <Redirect to= '/'/> : null}
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder= 'Name'required onChange = {e => setName(e.target.value)}/>
            <input type = "email" placeholder= 'Email'required onChange = {e => setEmail(e.target.value)}/>
            <input type = "password " placeholder= 'Password'required minLength='6' maxLength='12'onChange = {e => setPassword(e.target.value)}/>
            <input type = "tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required maxLength='12'placeholder= 'Phone' onChange = {e => setPhone(e.target.value)}/>
            <button type ="submit"> submit</button>
        </form>
        </>
    )
}