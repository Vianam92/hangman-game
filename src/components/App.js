import '../styles/App.scss';
import { useState,useEffect } from 'react';
import callToApi from '../services/api';
import Header  from './Header';
import Dummy  from './Dummy';
import SolutionLetters from './SolutionLetters'
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from "./Footer"
import Intructions from './Intructions'
import Options from './Options'
import Loader from './Loader';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    callToApi().then (data => {
      setLoading(false);
      setWord(data);
    });
  }, []);

  const handlerInput = (value) => {
    //escucho la letra de la usuaria
    const valueInput = value;
    let er = new RegExp(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/);
    if (er.test(valueInput)) {
      setLastLetter(valueInput)
      userLetters.push(lastLetter);
      setUserLetters(userLetters); 
  }
};
   
  const handleChange = (value) =>{
    setWord(value);
    setUserLetters([]);
    setLastLetter([]);
  };

  const filterErrors = userLetters.filter(x => word.includes(x) === false);

  return (
    
    <div className="title">
      <div className="page">
        <Header/>
        <Loader loading={loading}/>
        <Switch>
          <Route exact path="/">
          <main className="main">
          <section>
           <SolutionLetters userLetters={userLetters} word={word}/>
            <ErrorLetters userLetters={userLetters} word={word}/>
            <Form handlerInput={handlerInput} lastLetter={lastLetter}/>
          </section>
          <Dummy numberOfError={filterErrors.length}/>
        </main>
          </Route>
          <Route exact path="/instructions">
            <Intructions/>
            <Dummy numberOfError={filterErrors.length}/>
          </Route>
          <Route exact path="/options">
            <Options handleChange={handleChange}/>
            <Dummy  numberOfError={filterErrors.length}/>
          </Route>

        </Switch>
        
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

// Estas son las default props


export default App;
