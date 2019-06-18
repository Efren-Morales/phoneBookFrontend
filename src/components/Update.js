import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'

export default (props)=> {
    const userId = props.match.params.id
   
    const handleSubmit=async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:4000/user/${userId}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'name':name, 'email':email, 'password':password, 'phone':phone})
        })
        await setToHome(true)
    }

    const deleteHandler = async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:4000/user/${userId}`,{
            method: 'DELETE',
        })
        await setToHome(true)
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [toHome, setToHome] = useState(false)
    
    
    return(
        <>
        <a href="/">Home</a>
        {toHome ? <Redirect to= '/'/> : null}
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder= 'Name' onChange = {e => setName(e.target.value)}/>
            <input type = "email" placeholder= 'Email' onChange = {e => setEmail(e.target.value)}/>
            <input type = "password " placeholder= 'Password' minLength='6' maxLength='12'onChange = {e => setPassword(e.target.value)}/>
            <input type = "tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  maxLength='12'placeholder= 'Phone' onChange = {e => setPhone(e.target.value)}/>
            <input  type ="submit" value="Submit"/>
        </form>
        <form>
            <input type= "submit" value= "Delete" onClick = {deleteHandler}/>
        </form>
        </>
    )
}