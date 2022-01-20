import '../styles/App.scss';
import { useState,useEffect } from 'react';
import callToApi from '../services/api';
import Header  from './Header';
import Dummy  from './Dummy';
import SolutionLetters from './SolutionLetters'
import ErrorLetters from './ErrorLetters';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState([]);
  useEffect(() => {
    callToApi().then (data => {
      setWord(data);
    });
  }, []);

  let wordLetters;

  const handlerInput = (eve) => {
    //escucho la letra de la usuaria
    const valueInput = eve.currentTarget.value;
    let er = new RegExp(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/);
    if (er.test(valueInput)) {
      setLastLetter(valueInput)
      userLetters.push(lastLetter);
      setUserLetters(userLetters); 
  }
};

  const renderSolutionLetters = () =>{
   wordLetters = word.split('');
  // const filter = wordLetters.filter(x => userLetters.includes(x) === true);
    return wordLetters.map((wordLetter,index) => {
      return <li key={index} className = "letter">
        <small>{userLetters.includes(wordLetter)?wordLetter:""}</small>
        </li>
    })
  }

  const renderErrorLetters = () =>{
    const filter = userLetters.filter(x => word.includes(x) === false);
    return filter.map((wordLetter, index) => {
      return <li key={index} className="letter">
        <small>{wordLetter}</small>
      </li>
    })
  };

  const filterErrors = userLetters.filter(x => word.includes(x) === false);

  return (
    <div className="title">
      <div className="page">
        <Header/>
        <main className="main">
          <section>
           <SolutionLetters renderSolutionLetters={renderSolutionLetters()}/>
            <ErrorLetters renderErrorLetters={renderErrorLetters()}/>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handlerInput}
                value={lastLetter}
              />
            </form>
          </section>
          <Dummy numberOfError={filterErrors.length}/>
          
        </main>
      </div>
    </div>
  );
}

export default App;
