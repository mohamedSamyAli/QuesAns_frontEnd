import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
// const axios = require('axios')
import axios from "../helpers/axiosI"
const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
//   const [header, setheader] = useState('');
//   const [body, setbody] = useState('');
var header , body;
  const backdrop =true

  const toggle = () => setModal(!modal);
  const addQuestion=()=>{
    axios.post("Question/addquestion",JSON.stringify({
        
            header: header,
            body: body
          
    }))
  }
  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        
        {' '}
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop}>
        <ModalHeader toggle={toggle}>Add question</ModalHeader>
        <ModalBody>
        <Input placeholder="Question Headers" type="text"  onChange={e=>{header = e.target.value}}/>
        <Input type="textarea" placeholder="questionbody"  onChange={e=>body = e.target.value}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addQuestion}>Add Question</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;