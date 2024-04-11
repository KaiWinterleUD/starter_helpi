import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData);                    //for api key input
  const [workPref, setWorkPref] = useState<string>('');               // work type preference
  const [creativity, setCreativity] = useState<string>('');           // preference of creativity in work
  const [adapt, setAdapt] = useState<string>('');                     // how easily do you adapt
  const [impact, setImpact] = useState<string>('');                   // importance of impact
  const [routine, setRoutine] = useState<string>('');                 // is a routine needed
  const [leadership, setLeadership] = useState<string>('');           // is collaborative learning important
  const [environment, setEnvironment] = useState<string>('');         // work environment
  const [showQuestions, setShowQuestions] = useState<boolean>(false); //shows questions if basic button pressed
   
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function toggleQuestions() {
    // show questions if not already shown
    setShowQuestions(!showQuestions);
  }

  return (
    <div className="App">
      <h1>Joanna Crisomia</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>

      <Button variant="primary" size="lg" onClick={toggleQuestions}>Basic</Button>
      {showQuestions && (
      <div className="question-section">
        
        <div className="question">
          <p>How much do you prefer working independently over working collaboratively?</p>
          <Button variant={workPref === 'Not at all' ? 'primary' : 'secondary'} onClick={() => setWorkPref('Not at all')}>Not at all</Button>
          <Button variant={workPref === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setWorkPref('Neutral')}>Neutral</Button>
          <Button variant={workPref === 'Very much' ? 'primary' : 'secondary'} onClick={() => setWorkPref('Very much')}>Very much</Button>
        </div>

        <div className="question">
          <p>How important is expressing creativity and passion in your work?</p>
          <Button variant={creativity === 'Not important' ? 'primary' : 'secondary'} onClick={() => setCreativity('Not important')}>Not important</Button>
          <Button variant={creativity === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setCreativity('Neutral')}>Neutral</Button>
          <Button variant={creativity === 'Important' ? 'primary' : 'secondary'} onClick={() => setCreativity('Important')}>Important</Button>
        </div>

        <div className="question">
          <p>How easily do you adapt to changes in your work environment and job responsibilities?</p>
          <Button variant={adapt === 'Difficult' ? 'primary' : 'secondary'} onClick={() => setAdapt('Difficult')}>Difficult</Button>
          <Button variant={adapt === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setAdapt('Neutral')}>Neutral</Button>
          <Button variant={adapt === 'Easy' ? 'primary' : 'secondary'} onClick={() => setAdapt('Easy')}>Easy</Button>
        </div>

        <div className="question">
          <p>How important is it for you to make a tangible impact through your work?</p>
          <Button variant={impact === 'Not important' ? 'primary' : 'secondary'} onClick={() => setImpact('Not important')}>Not important</Button>
          <Button variant={impact === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setImpact('Neutral')}>Neutral</Button>
          <Button variant={impact === 'Very Important' ? 'primary' : 'secondary'} onClick={() => setImpact('Very Important')}>Very Important</Button>
        </div>

        <div className="question">
          <p>How important is having a set routine in the workplace to you?</p>
          <Button variant={routine === 'Not important' ? 'primary' : 'secondary'} onClick={() => setRoutine('Not important')}>Not important</Button>
          <Button variant={routine === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setRoutine('Neutral')}>Neutral</Button>
          <Button variant={routine === 'Important' ? 'primary' : 'secondary'} onClick={() => setRoutine('Important')}>Important</Button>
        </div>

        <div className="question">
          <p>Do you see yourself as a natural leader and enjoy taking charge of projects?</p>
          <Button variant={leadership === 'Not at all' ? 'primary' : 'secondary'} onClick={() => setLeadership('Not at all')}>Not at all</Button>
          <Button variant={leadership === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setLeadership('Neutral')}>Neutral</Button>
          <Button variant={leadership === 'Very much' ? 'primary' : 'secondary'} onClick={() => setLeadership('Very much')}>Very much</Button>
        </div>

        <div className="question">
          <p>Do you prefer an office environment or an environment that is frequently changing?</p>
          <Button variant={environment === 'Office' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Office')}>Office</Button>
          <Button variant={environment === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Neutral')}>Neutral</Button>
          <Button variant={environment === 'Changing' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Changing Environment')}>Changing Environment</Button>
        </div>

      </div>
      )} 
    </div>
  );
}

export default App;
