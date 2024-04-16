import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Home from './Pages/Home';
import BasicQuestions from './Pages/Basic';
import Detailed from './Pages/Detailed';
import NavHome from './navbar';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <>
    <NavHome></NavHome>
    {/* Replace <BasicQuestions></BasicQuestions> with the actual implementation of the BasicQuestions component */}
    
    <BasicQuestions> </BasicQuestions>
        
        <footer className="footer">
          <h2 className="footer-container">Contact Us</h2>
          <h2 className="footer-container">Help</h2>
          <Form className="api-form">
        <Form.Group controlId="apiKey">
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} />
        </Form.Group>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </footer>
          </>
  );
}

export default App;
