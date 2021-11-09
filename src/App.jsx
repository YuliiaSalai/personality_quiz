import './App.css';
import { Container, Heading } from "@chakra-ui/react"
import React, { useState } from 'react';
import axios from "axios";
import Result from './components/Result';
import QuestionForm from './components/QuestionForm';
import computedResult from './utils/computedResult';
import { useQuery } from 'react-query'
import {FullSpinner} from './styles/FullSpinner'

function App() {
  
  const [selectedValue, setSelectedValue] = useState({});
  const [answer, setAnswer] = useState('');
  const { isLoading, isError, data, isSuccess } = useQuery('questions', () =>
     axios.get('https://my-json-server.typicode.com/YuliiaSalai/quiz/questions')
     .then(res =>res.data))
     
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = computedResult(selectedValue);
    axios.get(`https://my-json-server.typicode.com/YuliiaSalai/quiz/results/${result}`)
    .then(res=>setAnswer(res.data))
    .then(()=>window.scrollTo(0, document.documentElement.scrollHeight))
    .catch(err=>console.log(err))
  }

  const handleChange = ({target}) =>{
    target.value > 0 ? setSelectedValue({...selectedValue, [target.id]: target.value}) 
    : setSelectedValue({...selectedValue, [target.id]: 0})
  }

  const handleClick = () =>{
    setAnswer('');
    setSelectedValue({});
  }

  return (
    <Container p={10}>
    <Heading mb={5}>Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You Have</Heading>
      {isLoading ? <FullSpinner />
      : isError ? <p>Something went wrong...</p>
      : isSuccess ? <QuestionForm 
      handleSubmit={handleSubmit} 
      handleChange={handleChange}
      selectedValue={selectedValue}
      questions={data}
      /> : null}
      {answer && <Result answer={answer} handleClick={handleClick}/>}
    </Container>
  );
}

export default App;
