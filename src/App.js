import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuestionComponent from "./QuestionComponent";

function App() {
  const [score, setScore] = useState(0);
  const [id, setID] = useState(1);
  const [randomQuestions, setRandomQuestions] = useState([]);

  // Define the questions and randomize their options and ids
  useEffect(() => {
    const questions = [
      {
        id: 1,
        question: "What type of loop will always execute atleast once ?",
        options: ["For", "While", "do-while"],
        ans: "do-while",
      },
      {
        id: 2,
        question:
          "Which of the following HTTP status codes means 'Not Found' ?",
        options: ["200", "404", "400", "500"],
        ans: "404",
      },
      {
        id: 3,
        question: "What does the fetch API return ?",
        options: ["string", "promise", "number", "float"],
        ans: "promise",
      },
      {
        id: 4,
        question: "What the status code 403 means?",
        options: ["Not Found", "Internal error", "Forbidden", "Success"],
        ans: "Forbidden",
      },
      {
        id: 5,
        question: "What year did Javascript first appear?",
        options: ["1979", "2001", "1997", "1995"],
        ans: "1995",
      },
      {
        id: 6,
        question: "Which status code indicates Request is OK?",
        options: ["201", "206", "204", "200"],
        ans: "200",
      },
      {
        id: 7,
        question: "Javascript is an _______ language",
        options: ["Object Oriented", "Object Based", "Procedural", "None"],
        ans: "Object Oriented",
      },
    ];

    // Variable with randomized ids from the questions
    const randomIds = questions
      .map((question) => question.id)
      // Shuffle algorithm
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setRandomQuestions(
      questions.map((question) => {
        // Randomize the options on each question
        question.options = question.options
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

        // Set the question id to be the one of the random ids
        // This will ensure that questions appears randomly
        question.id = randomIds[question.id - 1]; // -1 to avoid `undefined` id
        return question;
      })
    );
  }, []); // run the useEffect only once

  return (
    <main className="App">
      <Header />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center mt-4">
              {randomQuestions.map((question) =>
                id === question.id ? (
                  <QuestionComponent
                    id={id}
                    key={id}
                    score={score}
                    setScore={setScore}
                    setID={setID}
                    question={question}
                  />
                ) : null
              )}
            </div>
            <div className="text-center my-2">
              <div>
                Questions Correct : {score} of {randomQuestions?.length}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
