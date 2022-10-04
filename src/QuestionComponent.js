import React from "react";
import { useSnackbar } from "notistack";

const QuestionComponent = ({ question, score, setScore, id, setID }) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleAns = (option) => {
    if (option === question.ans) {
      setID(id + 1);
      setScore(score + 1);
      enqueueSnackbar("Correct Answer!");
    } else {
      setID(1);
      setScore(0);
      enqueueSnackbar("Restarting Quiz");
    }
  };

  return (
    <>
      <div>
        <h5 className="text-center">{question?.question}</h5>
        <div className="my-4 d-flex justify-content-evenly gap-4">
          {question?.options?.map((option) => {
            return (
              <button
                key={option}
                className="btn btn-info w-28"
                onClick={() => handleAns(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionComponent;
