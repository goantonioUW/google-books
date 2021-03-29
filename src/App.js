import './App.css';
import React, {useState} from 'react';
import {InputGroup, Input, InputGroupAddon, Button, FormGroup, Label} from 'reactstrap'

function App() {
  //states
  const [maxResults, setMaxResults] = useState(15);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  //handleSearch
  const handleSubmit = () => {
    setLoading(true)

  }

  const mainHeader = () => {
    return(
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/* overlay */}
        <div className="filter"></div>
          <h1 className="display-2 text-center text-white mb-3" style={{zIndex: 2}}>
            Google Book Search
          </h1>
          <div style={{width: '60%', zIndex: 2}}>
            <InputGroup size="lg" className="mb-3">
              <Input 
                placeholder="Search for Books" 
                value={query} 
                onChange={evt => setQuery(evt.target.value)}>
              </Input> 
              <InputGroupAddon addonType="append" className="m-0">
                <Button color="success" style={{paddingBottom: 20}} onClick={handleSubmit}>
                  <i className="fas fa-search align-items-center"></i>
                </Button>
              </InputGroupAddon>
            </InputGroup>

            <div className="d-flex text-white justify-content-center">
            <FormGroup className="ml-5">
              <Label for="maxResults">Max Results</Label>
              <Input 
                type="number" 
                id="maxResults" 
                placeholder="Max Results" 
                value={maxResults} 
                onChange={evt => setMaxResults(evt.target.value)}>
              </Input>
            </FormGroup>
            <FormGroup className="ml-5">
              <Label for="startIndex">startIndex</Label>
              <Input 
                type="number"
                id="startIndex" 
                placeholder="Start Index"
                value={startIndex} 
                onChange={evt => setStartIndex(evt.target.value)}>

              </Input>
            </FormGroup>
         </div>
        </div>
      </div>
    )

  }
  return (
    <div>
        {mainHeader()}
    </div>
  );
}

export default App;
