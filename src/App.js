import './App.css';
import React, {useState} from 'react';
import {InputGroup, Input, InputGroupAddon, Button, FormGroup, Label, Spinner} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import BookCard from "./components/BookCard"

function App() {
  //states
  const [maxResults, setMaxResults] = useState(15);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  //handleSearch
  const handleSubmit = () => {
    setLoading(true)
    if(maxResults > 50 || maxResults < 1){
    toast.error("Please pick a number between 1 and 50 ")
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`
      ).then(res => {
        if( res.data.items.length > 0) {
          setCards(res.data.items)
          setLoading(false)
          // console.log(cards)
        }
        // console.log(res.data)
      }).catch(err => {
        setLoading(true)
        toast.error(`${err.response.data.error.message}`)
        console.log(err)
      })
    }
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
         </div>
        </div>
      </div>
    );

  };


  const handleCards = () => {
    console.log(cards);
    const items = cards.map((item, i) => {
      let thumbnail = '';
      if (item.volumeInfo.imageLinks.thumbnail){
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return (
        <div className="col-lg-4" key={item.id}>
          <BookCard thumbnail={thumbnail} />
        </div>
      )
    })
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{width: "2rem", height: "2rem"}}></Spinner>
        </div>
      )} 
        else {
          return(
            <div className="container my-5">
              <div className="row">{items}</div>
            </div>
        )
      }
    

  }

  return (
    <div className="w-100 h-100">
        
        {mainHeader()}
        {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default App;
