import React from 'react';
import { Select, Button} from "@chakra-ui/react"

const QuestionForm = ({ handleChange, handleSubmit, selectedValue, questions}) => {
    return (
    <form onSubmit={handleSubmit} aria-label='quiz-form'>
      {questions.map(item=>
      <label htmlFor={item.title} key={item.id}>{item.title}
        <Select mb={5} 
        id={item.title} 
        value={selectedValue[item.title]||0}
        onChange={handleChange}>
        <option value={0}>Select answer</option>
        {item.answers.map((i, index)=><option value={index+1} key={i+index}>{i}</option>)}
      </Select>
      </label>
      )}
      <Button colorScheme="teal" variant="solid" type='submit'
       disabled={Object.values(selectedValue).length<5 || Object.values(selectedValue).includes(0)}
       >
       Check</Button>
      </form>
    )
}

export default QuestionForm
