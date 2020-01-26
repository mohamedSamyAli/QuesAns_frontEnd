import React from 'react';
import{apiKey}from"./helpers/Url"
import axios from "./helpers/axiosI"
import AllQuestions from "./component/AllQuestions"
import AddModal from "./component/AddingQuestion"
import { Container } from "reactstrap"
function App() {
  return (
    <Container >
      <AddModal buttonLabel="Add Question"></AddModal>
    <button onClick={
function(){
  fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+apiKey,{
    method:'POST',
    headers:{
      'content-Type':'application/json'
    },
    body: JSON.stringify({
      email:"smsm@smsm.com",
      password:"123456789",
      returnSecureToken:true
    }) 
  }).then((resp) => resp.json()).then((e)=>{
    localStorage.setItem("token",e.idToken)
    console.log(e)
  })
}
}>Sign IN </button>
<AllQuestions></AllQuestions>
    </Container>

  );
}

export default App;
