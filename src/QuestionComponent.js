import React from "react";
import { useSnackbar } from "notistack";
const QuestionComponent = ({
	question,
	score,
	setScore,
	id,
	setID,
	negativeScore,
	setNegativeScore,
}) => {
	const { enqueueSnackbar } = useSnackbar();
	const handleAns = (option) => {
		if (option === question.ans) {
			setID(id + 1);
			setScore(score + 1);
			enqueueSnackbar("Correct Answer!");
		} else {
			setID(id + 1);
			setNegativeScore(negativeScore + 1);
			enqueueSnackbar("Incorrect Answer!");
		}
	};
	const restartQuiz = () => {
		//to restart the quiz;
		setID(1);
		setScore(0);
		setNegativeScore(0);
		enqueueSnackbar("Restarting Quiz");
	};

	return (
		<>
			<div>
				<h5 className="text-center">{question?.question}</h5>
				<div className="my-4 d-flex justify-content-evenly">
					{question?.options?.map((option) => {
						return (
							<button
								className="btn btn-info w-28"
								onClick={() => handleAns(option)}
							>
								{option}
							</button>
						);
					})}
				</div>
				<div class="d-flex justify-content-center">
					{/* a button to restart quiz */}
					<button
						className="btn btn-warning w-28"
						onClick={() => restartQuiz()}
					>
						Restart Quiz
					</button>
				</div>
			</div>
		</>
	);
};

export default QuestionComponent;
