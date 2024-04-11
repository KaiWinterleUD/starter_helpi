import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Home from './Pages/Home';
import Basic from './Pages/Basic';
import Detailed from './Pages/Detailed';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [currPg, setCurrPg] = useState<string>('Home');
  const [workingPref, setWorkingPref] = useState<string>('');
  const [creativity, setCreativity] = useState<string>('');
  const [adaptability, setAdaptability] = useState<string>('');
  const [impact, setImpact] = useState<string>('');
  const [routine, setRoutine] = useState<string>('');
  const [learn, setLearn] = useState<string>('');
  const [environment, setEnvironment] = useState<string>('');
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  const updatePageState = () => {
    switch (currPg) {
      case 'Basic':
        return <Basic handlePage={setCurrPg} />;
      case 'Detailed':
        return <Detailed handlePage={setCurrPg} />;
      case 'Home':
      default:
        return <Home handlePage={setCurrPg} />;
    }
  };

  return (
    <div className="App">

      {updatePageState()};

      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      <h1>Kai Winterle, Joey Dare, Joanna Crisomia, Ricky Kiamilev</h1>
      <div className="question-section">
        {/* Each question has its own div for clarity and potential styling */}
        
        <div className="question">
          <p>How much do you prefer working independently over working collaboratively?</p>
          <Button variant={workingPref === 'Not at all' ? 'primary' : 'secondary'} onClick={() => setWorkingPref('Not at all')}>Not at all</Button>
          <Button variant={workingPref === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setWorkingPref('Neutral')}>Neutral</Button>
          <Button variant={workingPref === 'Very much' ? 'primary' : 'secondary'} onClick={() => setWorkingPref('Very much')}>Very much</Button>
        </div>

        <div className="question">
          <p>How important is expressing creativity and passion in your work?</p>
          <Button variant={creativity === 'Not important' ? 'primary' : 'secondary'} onClick={() => setCreativity('Not important')}>Not important</Button>
          <Button variant={creativity === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setCreativity('Neutral')}>Neutral</Button>
          <Button variant={creativity === 'Important' ? 'primary' : 'secondary'} onClick={() => setCreativity('Important')}>Important</Button>
        </div>

        <div className="question">
          <p>How easily do you adapt to changes in your work environment and job responsibilities?</p>
          <Button variant={adaptability === 'Difficult' ? 'primary' : 'secondary'} onClick={() => setAdaptability('Difficult')}>Difficult</Button>
          <Button variant={adaptability === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setAdaptability('Neutral')}>Neutral</Button>
          <Button variant={adaptability === 'Easy' ? 'primary' : 'secondary'} onClick={() => setAdaptability('Easy')}>Easy</Button>
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
          <Button variant={learn === 'Not at all' ? 'primary' : 'secondary'} onClick={() => setLearn('Not at all')}>Not at all</Button>
          <Button variant={learn === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setLearn('Neutral')}>Neutral</Button>
          <Button variant={learn === 'Very much' ? 'primary' : 'secondary'} onClick={() => setLearn('Very much')}>Very much</Button>
        </div>

        <div className="question">
          <p>Do you prefer an office environment or an environment that is frequently changing?</p>
          <Button variant={environment === 'Office' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Office')}>Office</Button>
          <Button variant={environment === 'Neutral' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Neutral')}>Neutral</Button>
          <Button variant={environment === 'Changing Environment' ? 'primary' : 'secondary'} onClick={() => setEnvironment('Changing Environment')}>Changing Environment</Button>
        </div>

      </div>
    </div>
  );
}

export default App;
