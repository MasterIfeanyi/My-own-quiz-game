import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { useSnackbar } from "notistack";
const QuestionComponent = ({ question,score,setScore,id,setID }) => {
    const { enqueueSnackbar } = useSnackbar();
  const handleAns = (option)=>{
        if(option===question.ans){
            setID(id + 1);
            setScore(score + 1);
            enqueueSnackbar("Correct Answer!")
        }else{
            setID(1);
            setScore(0);
            enqueueSnackbar("Restarting Quiz")
        }
  }

  return (
    <>
      <Box>
        <Text>{question?.question}</Text>
        <Flex justify={"space-evenly"}>
          {question?.options?.map((option) => {
            return (
              <Button onClick={() => handleAns(option)}>{option}</Button>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default QuestionComponent;
