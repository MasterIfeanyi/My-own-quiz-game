import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
    <main className="App">
      <Header />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className='text-center mt-2'>
                <h3 >
                  Quiz
                </h3>
              </div>
              <div className='d-flex justify-content-center' >
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
              </div>
              <div className='text-center my-2'>
                <div>Questions Correct : {score} of {questions?.length}</div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </main>
  );
}

export default App;
