import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
const Apipost = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState([])

  const savedata = (event) => {
    const data = { email, password }
    fetch("http://localhost:8000/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log(result);
      result.json().then((resp) => {
      })
    })
    setEmail("");
    setPassword("");
    // event.preventDefault()
    // setStop(true)
  }

  useEffect(() => {
    fetch("http://localhost:8000/User").then((data) => {
      data.json().then((resp) => {
        console.log(resp);
        setUser(resp)
      })
    })
  }, [])
  return (
    <>
      <form>
        <MDBInput className='mb-4' value={email} type='email' id='form2Example1' label='Email address' onChange={(e) => setEmail(e.target.value)} />
        <MDBInput className='mb-4' type='password' value={password} id='form2Example2' label='Password' onChange={(e) => setPassword(e.target.value)} />
        <MDBBtn onClick={savedata} type='submit' className='mb-4' block>Sign in</MDBBtn>
      </form>
    </>
  );
}
export default Apipost;