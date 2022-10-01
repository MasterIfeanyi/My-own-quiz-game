import React,{useState} from 'react';
import {
  Flex,
  Text
} from '@chakra-ui/react'
import QuestionComponent from './QuestionComponent';
function App() {
  const questions = [
    {
      id:1,
      question:"What type of loop will always execute atleast once ?",
      options:[
        "For","While","do-while"
      ],
      ans:"do-while"
    },
    {
      id:2,
      question:"Which of the following HTTP status codes means 'Not Found' ?",
      options:[
        "200","404","400","500"
      ],
      ans:"404"
    }
  ]
  const [score,setScore] = useState(0);
  const [id,setID] = useState(1);

  return (
   <>
    <Flex justify={"center"}>
      <Text fontSize={"1.6rem"} fontWeight={"bold"}>
        Quiz
      </Text>
    </Flex>
    <Flex mx={"20%"} justify="center">
      {
        questions.map((question)=>{
          return(
            <>
            {
              id===question.id?<><QuestionComponent id={id} score={score} setScore={setScore} setID={setID}  question={question} /></>:<></>
            }
            </>
          )
        })
      }
    </Flex>
    <Flex justify={"center"}>
      <Text>Questions Correct : {score} of {questions?.length}</Text>
    </Flex>

   </>
  );
}

export default App;
