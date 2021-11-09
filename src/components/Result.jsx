import React from 'react';
import { Button, Heading, Text, Box} from "@chakra-ui/react"

const Result = ({answer, handleClick}) => {
    return (
    <>
      <Heading mt={10} align='center'>{answer.name}</Heading>
      <Text align='center'>{answer.description}</Text>
      <Box display='flex' justifyContent='center' mt='5'>
      <Button variant="outline" onClick={handleClick}>Retry!</Button>
      </Box>
    </>
    )
}

export default Result
