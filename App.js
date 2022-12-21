import './App.css';
import Quote from './components/quote/quote';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, makeStyles} from "@material-ui/core"
import React, {useState} from "react"
import "./index.css"
import {Card} from "react-bootstrap"

const useStyles = makeStyles({
  cardItem:{
    margin:"auto",
    backgroundColor: "white",
    height:"50px",
    width:"200px",
    textAlign:"right",
  }
})
function App() {
  const [quotes, setQuotes] = useState("")

  const classes = useStyles();
  const getQuote = () => {
    fetch("https://type.fit/api/quotes/")
      .then((res)=>res.json())
      .then((data)=> {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  }
  return (
      <div class="box">
        <header class="App-header"> 
        Create Your Quote!
        </header>
       
          <div class="quote">
              <Card bg='dark' text='white'>
                <Card.Body>
                  <Card.Title>Quote</Card.Title>
                  <Card.Text>
                        <p>"{quotes.text}"</p>
                        <p>{quotes.author}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                
        
                
          </div>
          <div class="btnContainer">
              <button onClick = {getQuote} class="btn btn-primary btn-lg"> 
              Create</button>
              <button onClick={() =>  navigator.clipboard.writeText("" + quotes.text + " - " + quotes.author)}class="btn btn-secondary btn-lg"> Copy Quote</button>
          </div>
        </div>
  )
}

export default App;
